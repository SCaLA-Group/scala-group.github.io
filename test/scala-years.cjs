const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    for (const section of ["talks", "publications"]) {
      await page.goto(`${base}/${section}/`);
      await page.waitForSelector(".scala-year-group");
      const groups = page.locator(".scala-year-group");
      assert.ok((await groups.count()) > 2);
      assert.equal(await page.locator(".scala-year-group[open]").count(), 1);
      assert.equal(await groups.first().getAttribute("open"), "");
      const older = groups.nth(1);
      await older.locator("summary").focus();
      await page.keyboard.press("Enter");
      assert.equal(await older.getAttribute("open"), "");
      await page.keyboard.press("Enter");
      assert.equal(await older.getAttribute("open"), null);
      const year = (await older.locator("h2").innerText()).trim();
      const id = await older.locator("ol > li [id]").first().getAttribute("id");
      await page.locator("#bibsearch").fill(year);
      await page.waitForTimeout(400);
      assert.equal(await older.getAttribute("open"), "");
      assert.equal(await older.isVisible(), true);
      await page.locator("#bibsearch").fill("no-such-entry-unique-zzzz");
      await page.waitForTimeout(400);
      assert.equal(await page.locator(".scala-year-group:visible").count(), 0);
      await page.locator("#bibsearch").fill("");
      await page.waitForTimeout(400);
      assert.equal(await page.locator(".scala-year-group[open]").count(), 1);
      await page.goto(`${base}/${section}/#${id}`);
      await page.waitForFunction((id) => document.getElementById(id)?.closest("details")?.open, id);
      assert.equal(await page.locator(`[id="${id}"]`).isVisible(), true);
      await page.goto(`${base}/${section}/#${year}`);
      await page.waitForTimeout(400);
      assert.equal(await page.locator("#bibsearch").inputValue(), year);
      assert.equal(await groups.nth(1).getAttribute("open"), "");
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${section} ${width}`);
      }
    }
    await page.goto(`${base}/talks/`);
    await page.screenshot({ path: "/tmp/scala-talks-years.png", fullPage: true });
    const nojs = await browser.newContext({ javaScriptEnabled: false });
    const plain = await nojs.newPage();
    await plain.goto(`${base}/talks/`);
    assert.ok((await plain.locator("h2.bibliography:visible").count()) > 2);
    await nojs.close();
    console.log(
      "Year lists passed: latest-year default, keyboard expansion, all-year search, clearing, direct links, responsive layout and no-JS fallback."
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
