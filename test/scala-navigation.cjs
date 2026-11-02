const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const samples = [
      ["/", [], "/"],
      ["/group/", [], "/group/"],
      ["/teaching/", [], "/teaching/"],
      ["/people/alexander-heinlein/", ["Home", "Group", "Alexander Heinlein"], "/group/"],
      ["/research/", [], "/research/"],
      ["/projects/", ["Home", "Research", "Projects"], "/research/"],
      ["/projects/rapid-wind/", ["Home", "Research", "Projects", "RAPID-Wind"], "/research/"],
      ["/software/", ["Home", "Research", "Software"], "/research/"],
      ["/teaching/courses/", ["Home", "Teaching", "Courses"], "/teaching/"],
      [
        "/teaching/courses/2020-2021-ws-lecture-2020-2021-ws-scientific-computing/",
        ["Home", "Teaching", "Courses", "Scientific Computing"],
        "/teaching/",
      ],
      [
        "/teaching/projects/bachelor-thesis-projects-3-dl-nonlinear-dynamics/",
        ["Home", "Teaching", "Bachelor’s theses", "Deep Learning the Nonlinear Dynamics of Mechanical Systems"],
        "/teaching/",
      ],
      ["/blog/2024/cominds-workshop-2024/", ["Home", "Blog", "COMinDS Workshop 2024"], "/blog/"],
      ["/news/", ["Home", "Blog", "News"], "/blog/"],
    ];
    const checked = new Set();
    for (const [path, crumbs, root] of samples) {
      const response = await page.goto(base + path);
      assert.equal(response.status(), 200, path);
      assert.equal(await page.locator(".scala-sticky-submenu").count(), path === "/" ? 0 : 1, path);
      if (path === "/") {
        assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--scala-submenu-height").trim()), "0px");
      }
      const actual = await page.locator(".scala-breadcrumb li").allTextContents();
      assert.deepEqual(
        actual.map((s) => s.trim()),
        crumbs,
        path
      );
      assert.equal(await page.locator(`#navbarNav a[href="/al-folio${root}"][aria-current]`).count(), 1, path);
      assert.equal(await page.locator('.scala-breadcrumb [aria-current="page"]').count(), crumbs.length ? 1 : 0);
      const links = await page.locator(".scala-page-navigation a, .scala-context-nav a").evaluateAll((nodes) => nodes.map((n) => n.href));
      for (const link of links)
        if (!checked.has(link)) {
          assert.equal((await page.request.get(link)).status(), 200, link);
          checked.add(link);
        }
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${path} ${width}`);
      }
    }
    for (const path of ["/teaching/", "/teaching/courses/", "/teaching/master-thesis-projects/"]) {
      await page.goto(base + path);
      assert.equal(await page.locator(".scala-context-nav a:visible").count(), 6, `Visible teaching submenu: ${path}`);
      assert.equal(await page.locator(".scala-context-nav a[aria-current]").count(), 1);
      assert.equal(await page.locator(".scala-page-outline, .scala-section-switcher").count(), 0);
      assert.equal(await page.locator(".scala-sticky-submenu .scala-context-nav").count(), 1, "Section links belong to the sticky submenu");
    }
    await page.goto(base + "/group/");
    assert.equal(await page.locator(".scala-sticky-submenu .scala-group-nav a:visible").count(), 7);
    assert.equal(await page.locator(".scala-page-outline").count(), 0, "Group category links replace the automatic outline");
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(base + "/group/");
      await page.evaluate(() => scrollTo(0, 1200));
      await page.waitForTimeout(100);
      const sticky = await page.evaluate(() => ({
        top: document.querySelector(".scala-sticky-submenu").getBoundingClientRect().top,
        nav: document.querySelector("#navbar").getBoundingClientRect().bottom,
        height: document.querySelector(".scala-sticky-submenu").getBoundingClientRect().height,
      }));
      assert.ok(Math.abs(sticky.top - sticky.nav) < 2, "Submenu stays immediately below the main menu");
      assert.ok(sticky.height < 70, "Submenu stays on one compact row");
      const alumni = page.locator(".scala-group-nav a").filter({ hasText: "Alumni" });
      await alumni.focus();
      await page.keyboard.press("Enter");
      await page.waitForTimeout(150);
      assert.ok(
        await page
          .locator("#alumni")
          .evaluate((n) => n.getBoundingClientRect().top >= document.querySelector(".scala-sticky-submenu").getBoundingClientRect().bottom)
      );
      assert.equal(await alumni.getAttribute("aria-current"), "location");
    }
    await page.goto(base + "/people/alexander-heinlein/");
    await page.locator(".scala-page-outline summary").click();
    await page.locator('.scala-page-outline a[href="#education"]').click();
    await page.waitForTimeout(100);
    assert.ok(await page.locator("#education").evaluate((n) => n.getBoundingClientRect().top >= 60));
    await page.screenshot({ path: "/tmp/scala-navigation-profile.png", fullPage: true });
    await page.goto(base + "/teaching/projects/bachelor-thesis-projects-3-dl-nonlinear-dynamics/");
    await page.screenshot({ path: "/tmp/scala-navigation-desktop.png", fullPage: true });
    await page.setViewportSize({ width: 390, height: 900 });
    await page.screenshot({ path: "/tmp/scala-navigation-mobile.png", fullPage: true });
    await page.addStyleTag({ content: "html {font-size:200% !important}" });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, "200% text");
    console.log("Navigation passed: hierarchy, active ancestors, sibling links, mobile wrapping and section jumps.");
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
