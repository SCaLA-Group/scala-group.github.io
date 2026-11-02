const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const samples = [
      ["/group/", ["Home", "group"], "/group/"],
      ["/teaching/", ["Home", "teaching"], "/teaching/"],
      ["/people/alexander-heinlein/", ["Home", "Group", "Alexander Heinlein"], "/group/"],
      ["/research/", ["Home", "research"], "/research/"],
      ["/projects/", ["Home", "Research", "projects"], "/research/"],
      ["/projects/rapid-wind/", ["Home", "Research", "Projects", "RAPID-Wind"], "/research/"],
      ["/software/", ["Home", "Research", "software"], "/research/"],
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
      ["/news/", ["Home", "Blog", "news"], "/blog/"],
    ];
    const checked = new Set();
    for (const [path, crumbs, root] of samples) {
      const response = await page.goto(base + path);
      assert.equal(response.status(), 200, path);
      const actual = await page.locator(".scala-breadcrumb li").allTextContents();
      assert.deepEqual(
        actual.map((s) => s.trim()),
        crumbs,
        path
      );
      assert.equal(await page.locator(`#navbarNav a[href="/al-folio${root}"][aria-current]`).count(), 1, path);
      assert.equal(await page.locator('.scala-breadcrumb [aria-current="page"]').count(), 1);
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
      assert.ok(
        await page
          .locator(".scala-context-nav")
          .evaluate((n) => n.getBoundingClientRect().top > document.querySelector("h1").getBoundingClientRect().bottom)
      );
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
