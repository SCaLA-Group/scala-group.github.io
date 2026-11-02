const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto(`${base}/teaching/courses/`);
    const guides = page.getByRole("link", { name: /^Study Guide/, includeHidden: true });
    assert.equal(await guides.count(), 25);
    assert.equal(await page.getByRole("link", { name: "Study Guide (PDF)", exact: true, includeHidden: true }).count(), 17);
    assert.equal(await page.getByRole("link", { name: "Course material", exact: true, includeHidden: true }).count(), 3);
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
        const year = (await card.textContent()).match(/20\d\d\/20\d\d/)[0];
        assert.ok(url.pathname.includes(year.replace("/", "_")), "Archive matches the displayed academic year");
        assert.match(url.hash, /^#page=\d+$/);
      }
    }
    const years = page.locator("details[data-catalogue-disclosure]");
    assert.equal(await years.locator("xpath=self::*[@open]").count(), 1, "Only the newest course year starts open");
    const olderYear = years.nth(1);
    assert.equal(await olderYear.getAttribute("open"), null);
    await olderYear.locator("summary").focus();
    await page.keyboard.press("Enter");
    assert.notEqual(await olderYear.getAttribute("open"), null, "Older courses expand with the keyboard");
    await page.keyboard.press("Enter");
    assert.equal(await olderYear.getAttribute("open"), null);
    const archivedCourse = page.locator("#course-2020-2021-ws-machine-learning");
    await page.goto(`${base}/teaching/courses/#course-2020-2021-ws-machine-learning`);
    await archivedCourse.waitFor({ state: "visible" });
    assert.notEqual(await archivedCourse.locator("xpath=ancestor::details").getAttribute("open"), null, "Direct course links reveal their year");
    for (const category of ["master-thesis-projects", "bachelor-thesis-projects", "internships", "honours-projects"]) {
      await page.goto(`${base}/teaching/${category}/`);
      const archive = page.locator("details[data-catalogue-disclosure]");
      if (!(await archive.count())) continue;
      assert.equal(await archive.getAttribute("open"), null, category);
      const cards = archive.locator(".scala-card");
      assert.match(await archive.locator("summary").innerText(), new RegExp(`${await cards.count()} project`));
      const id = await cards.first().getAttribute("id");
      await archive.locator("summary").focus();
      await page.keyboard.press("Enter");
      assert.equal(await cards.first().isVisible(), true);
      await page.goto(`${base}/teaching/${category}/#${id}`);
      await page.locator(`[id="${id}"]`).waitFor({ state: "visible" });
      assert.notEqual(await archive.getAttribute("open"), null, "Direct project links reveal the archive");
    }
    await page.goto(`${base}/teaching/courses/`);
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: "/tmp/scala-studyguide-course-links.png" });
    console.log(
      "Teaching checks passed: 25 official links, 17 year-specific PDF anchors, three material links, archive disclosures, keyboard/direct-link access and responsive layouts."
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
