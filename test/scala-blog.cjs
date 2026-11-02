const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto(`${base}/blog/`);
    assert.equal(await page.locator(".scala-blog-card").count(), 3, "Only the migrated stories and verified research spotlight are published");
    const posts = await page.locator(".scala-blog-card h2 a").evaluateAll((links) => links.map((a) => a.getAttribute("href")));
    for (const path of ["/blog/", ...posts.map((url) => url.replace("/al-folio", ""))]) {
      const response = await page.goto(`${base}${path}`);
      assert.equal(response.status(), 200);
      for (const image of await page.locator("main img").all()) {
        await image.evaluate((img) => img.decode());
        assert.ok(await image.evaluate((img) => img.naturalWidth > 0));
      }
      for (const width of [320, 390, 768, 1100, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${path}: ${width}px`);
      }
    }
    await page.goto(`${base}/`);
    assert.equal(await page.locator(".scala-home-blog h3 a").getAttribute("href"), posts[0], "Homepage features the newest published story");
    const feed = await (await page.request.get(`${base}/feed.xml`)).text();
    assert.ok(feed.includes("COMinDS Workshop 2024"));
    assert.ok(feed.includes("EuroTUG 2023"));
    assert.ok(feed.includes("Learning to solve equations"));
    assert.ok(!feed.includes("a post with"), "Starter demo posts stay unpublished");
    const search = await (await page.request.get(`${base}/assets/search-index.json`)).json();
    assert.equal(search.filter((entry) => entry?.section === "Blog").length, 3);
    for (const path of ["/blog/2024/", "/blog/2023/", "/blog/category/workshops/"]) {
      assert.equal((await page.request.get(`${base}${path}`)).status(), 200, `Archive ${path}`);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`${base}/blog/`);
    await page.screenshot({ path: "/tmp/scala-blog-desktop.png", fullPage: true });
    await page.goto(`${base}/blog/2024/cominds-workshop-2024/`);
    await page.setViewportSize({ width: 390, height: 1000 });
    for (const image of await page.locator(".post-content img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((img) => img.decode());
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: "/tmp/scala-blog-story-mobile.png", fullPage: true });
    console.log("Blog checks passed: three stories, photos, feed, search, archives and responsive layouts.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
