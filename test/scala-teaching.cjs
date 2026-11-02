const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto(`${base}/teaching/courses/`);
    const guides = page.getByRole("link", { name: /^Study Guide/ });
    assert.equal(await guides.count(), 25);
    assert.equal(await page.getByRole("link", { name: "Study Guide (PDF)", exact: true }).count(), 17);
    assert.equal(await page.getByRole("link", { name: "Course material", exact: true }).count(), 3);
    const scientificComputing = page.locator("#course-2026-2027-q1-q2-scientific-computing");
    assert.equal(
      await scientificComputing.getByRole("link", { name: "Study Guide", exact: true }).getAttribute("href"),
      "https://studyguide.tudelft.nl/courses/study-guide/educations/33630"
    );
    for (const link of await guides.all()) {
      const href = await link.getAttribute("href");
      const url = new URL(href);
      assert.ok(["studyguide.tudelft.nl", "filelist.tudelft.nl"].includes(url.hostname));
      if (url.hostname === "filelist.tudelft.nl") {
        const card = link.locator("xpath=..");
        const year = (await card.innerText()).match(/20\d\d\/20\d\d/)[0];
        assert.ok(url.pathname.includes(year.replace("/", "_")), "Archive matches the displayed academic year");
        assert.match(url.hash, /^#page=\d+$/);
      }
    }
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: "/tmp/scala-studyguide-course-links.png" });
    console.log("Teaching checks passed: 25 official links, 17 year-specific PDF anchors, three material links and responsive layouts.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
