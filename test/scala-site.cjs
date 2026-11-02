// Site regressions: run against the local preview with `node test/scala-site.cjs`.
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto(`${base}/group/`);
    await page.evaluate(() => document.fonts.ready);
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      const layout = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        titleTop: document.querySelector("h1").getBoundingClientRect().top,
        navBottom: document.querySelector("#navbar").getBoundingClientRect().bottom,
      }));
      assert.equal(layout.overflow, false, `Horizontal overflow at ${width}px`);
      assert.ok(layout.titleTop >= layout.navBottom, `Navbar overlaps the title at ${width}px`);
    }
    await page.setViewportSize({ width: 768, height: 1000 });
    const toggle = page.locator(".navbar-toggler");
    await toggle.click();
    assert.equal(await toggle.getAttribute("aria-expanded"), "true");
    assert.equal(await page.locator("#navbarNav a.nav-link:visible").count(), 8);
    assert.equal(await page.locator('#navbarNav a[href="/al-folio/blog/"]:visible').count(), 1);
    await page.keyboard.press("Escape");
    assert.equal(await toggle.getAttribute("aria-expanded"), "false");

    await page.goto(`${base}/publications/`);
    assert.equal(
      await page
        .locator('[id="Heinlein:2021:CML1"] a')
        .filter({ hasText: /^Preprint$/ })
        .getAttribute("href"),
      "https://kups.ub.uni-koeln.de/11285/"
    );
    assert.equal(
      await page.locator('[id="Kalvankar:2026:SBE"] a').filter({ hasText: /^URL$/ }).getAttribute("href"),
      "https://openreview.net/forum?id=ADBBQA7oyU"
    );
    assert.equal(await page.locator('[id="Shang:2025:DDM"]').count(), 1);
    assert.equal(await page.locator('[id="Shang:2025:DDN"]').count(), 1);
    await page.waitForFunction(() => document.querySelector("[data-bib-panel] pre")?.tabIndex === 0);
    const abstract = page.locator("button.abstract").first();
    const abstractId = await abstract.getAttribute("aria-controls");
    await abstract.focus();
    await page.keyboard.press("Enter");
    assert.equal(await abstract.getAttribute("aria-expanded"), "true");
    assert.equal(await page.evaluate((id) => document.getElementById(id).hidden, abstractId), false);
    await page.keyboard.press("Space");
    assert.equal(await abstract.getAttribute("aria-expanded"), "false");
    assert.equal(await page.evaluate((id) => document.getElementById(id).hidden, abstractId), true);
    const entry = abstract.locator("xpath=..");
    await abstract.click();
    const bib = entry.locator("button.bibtex");
    await bib.click();
    assert.equal(await abstract.getAttribute("aria-expanded"), "false");
    assert.equal(await bib.getAttribute("aria-expanded"), "true");
    const authors = page.locator("[data-author-toggle]").first();
    await authors.focus();
    await page.keyboard.press("Enter");
    assert.equal(await authors.getAttribute("aria-expanded"), "true");
    assert.equal(await authors.locator("[data-authors-expanded]").isVisible(), true);
    assert.equal(await page.locator("h2.bibliography").filter({ hasText: /^$/ }).count(), 0);
    assert.equal(await page.locator(".scala-publication-status").count(), 98);

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.waitForFunction(() => document.querySelector("ninja-keys")?.data?.length > 100);
    await page.waitForFunction(() => customElements.get("ninja-keys"));
    await page.locator("#search-toggle").click();
    const input = page.locator("ninja-keys").locator("input");
    for (const query of ["Ezra", "WI4635", "WaterLily"]) {
      await input.fill(query);
      await page.waitForFunction((q) => {
        const ninja = document.querySelector("ninja-keys");
        return (
          ninja._search === q &&
          ninja._actionMatches.some((action) => `${action.title} ${action.description}`.toLowerCase().includes(q.toLowerCase()))
        );
      }, query);
    }
    await page.keyboard.press("Escape");
    await page.goto(`${base}/`);
    const highlights = await page.locator(".scala-work-item h3 a").evaluateAll((links) => links.map((link) => link.href));
    assert.equal(highlights.length, 3);
    for (const href of highlights) {
      await page.goto(href);
      await page.waitForFunction(() => {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        const rect = target?.querySelector(".title")?.getBoundingClientRect();
        const navBottom = document.querySelector("#navbar").getBoundingClientRect().bottom;
        return rect?.height > 0 && rect.top >= navBottom && rect.top < innerHeight;
      });
      assert.equal(await page.locator("#bibsearch").inputValue(), "", href);
    }
    await page.locator(".scala-skip-link").focus();
    await page.keyboard.press("Enter");
    await page.waitForFunction(() => document.querySelector("#bibsearch").value === "");
    assert.ok((await page.locator(".bibliography > li:visible").count()) > 0);

    // Free-text fragment searches and typing still filter the bibliography.
    await page.goto(`${base}/talks/#SCHWARZ`);
    await page.waitForFunction(() => document.querySelector("#bibsearch").value === "SCHWARZ");
    assert.ok((await page.locator(".bibliography > li:visible").count()) > 0);
    await page.locator("#bibsearch").fill("zzznomatchzzzz");
    await page.waitForFunction(() => ![...document.querySelectorAll(".bibliography > li")].some((item) => item.getBoundingClientRect().height > 0));
    await page.evaluate(() => {
      location.hash = "Heinlein:2026:BIRS:ALN";
    });
    await page.waitForFunction(() => document.querySelector("#bibsearch").value === "");
    assert.ok((await page.locator(".bibliography > li:visible").count()) > 0);

    await page.goto(`${base}/`);
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.evaluate(() => {
        document.documentElement.style.fontSize = "200%";
      });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Enlarged text overflows at ${width}px`);
    }
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "";
    });
    await page.goto(`${base}/group/`);
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(() => document.activeElement.classList.contains("scala-skip-link")), true);
    await page.keyboard.press("Enter");
    assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
    console.log("SCaLA site checks passed: responsive menu, keyboard controls, search, highlights and skip link.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
