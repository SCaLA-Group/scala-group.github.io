const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.clock.install();
    await page.goto(`${base}/`);
    const gallery = page.locator("[data-research-gallery]");
    const counter = gallery.locator("[data-gallery-counter]");
    await gallery.locator("[data-gallery-controls]").waitFor({ state: "visible" });
    const total = await gallery.locator("[data-gallery-slide]").count();
    const position = (index) => `${index}/${total}`;
    assert.equal(total, 8, "Four research slides and four software slides");
    assert.equal(await gallery.locator('[data-gallery-kind="research"]').count(), 4);
    assert.equal(await gallery.locator('[data-gallery-kind="event"]').count(), 0);
    const slides = gallery.locator('[data-gallery-kind="software"]');
    for (const [index, name] of ["FROSch", "FEDDLib", "Trilinos", "NGSolve"].entries()) {
      const software = slides.nth(index);
      assert.ok((await software.locator("img").getAttribute("alt")).includes(name));
      assert.ok((await software.locator("img").getAttribute("src")).includes("/assets/img/software/"));
      const officialSites = ["https://shylu-frosch.github.io/", "https://feddlib.github.io/", "https://trilinos.github.io/", "https://ngsolve.org/"];
      assert.equal(await software.locator(".scala-gallery-image").getAttribute("href"), officialSites[index]);
      assert.equal(await software.locator("figcaption > a").getAttribute("href"), `/al-folio/software/#${name.toLowerCase()}`);
    }
    assert.equal(await gallery.locator("[data-gallery-pause-icon]").isVisible(), true);
    assert.equal(await gallery.locator("[data-gallery-play-icon]").isVisible(), false);
    await page.mouse.move(0, 0);
    assert.equal(await counter.innerText(), position(1));
    await page.clock.runFor(6100);
    assert.equal(await counter.innerText(), position(2), "Automatic rotation");
    await gallery.getByRole("button", { name: "Next research image" }).click();
    assert.equal(await counter.innerText(), position(3));
    assert.equal(await gallery.locator("[data-gallery-play-icon]").isVisible(), true);
    assert.equal(await gallery.locator("[data-gallery-pause-icon]").isVisible(), false);
    await page.mouse.move(0, 0);
    await page.locator("#main-content").focus();
    await page.clock.runFor(6100);
    assert.equal(await counter.innerText(), position(3), "Manual navigation stops autoplay");
    await gallery.getByRole("button", { name: "Next research image" }).click();
    for (let index = 4; index <= total; index++) {
      await gallery.getByRole("button", { name: "Next research image" }).click();
    }
    assert.equal(await counter.innerText(), position(1), "Forward wrap");
    await gallery.getByRole("button", { name: "Previous research image" }).focus();
    await page.keyboard.press("ArrowLeft");
    assert.equal(await counter.innerText(), position(total), "Keyboard backward wrap");

    const heights = [];
    for (let index = 0; index < total; index++) {
      const slide = gallery.locator("[data-gallery-slide]:visible");
      assert.equal(await slide.count(), 1);
      const image = slide.locator("img");
      await image.evaluate((img) => img.decode());
      assert.ok(await image.getAttribute("alt"));
      const description = await slide.locator(".scala-gallery-description").innerText();
      assert.ok(description.split(/\s+/).length >= 15, "Every slide has a short descriptive paragraph");
      const href = await slide.locator("figcaption > a").getAttribute("href");
      const url = new URL(href, base);
      const response = await page.request.get(url.href);
      assert.equal(response.status(), 200, `Slide destination ${href}`);
      if (url.hash) assert.ok((await response.text()).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`));
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate((value) => (document.documentElement.dataset.theme = value), theme);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        }
        if (width === 768) heights.push(Math.round((await gallery.boundingBox()).height));
      }
      await gallery.getByRole("button", { name: "Next research image" }).click();
    }
    assert.ok(Math.max(...heights) - Math.min(...heights) <= 1, "Stable gallery height between slides");
    await gallery.getByRole("button", { name: "Start automatic gallery rotation" }).click();
    await page.clock.runFor(6100);
    assert.equal(await counter.innerText(), position(total), "Focused controls pause rotation");
    await page.mouse.move(0, 0);
    await page.locator("#main-content").focus();
    await page.clock.runFor(6100);
    assert.equal(await counter.innerText(), position(1), "Play resumes after focus leaves");
    await gallery.getByRole("button", { name: "Pause automatic gallery rotation" }).click();
    await page.locator("#main-content").focus();
    await page.mouse.move(0, 0);
    await page.clock.runFor(6100);
    assert.equal(await counter.innerText(), position(1), "Pause stops rotation");

    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.reload();
    await gallery.getByRole("button", { name: "Pause automatic gallery rotation" }).waitFor();
    await page.clock.runFor(6100);
    assert.equal(await counter.innerText(), position(2), "Autoplay starts with reduced motion enabled, using instant slide changes");
    await page.setViewportSize({ width: 390, height: 1000 });
    const positions = await page.evaluate(() => ({
      publications: document.querySelector(".scala-home-publications").getBoundingClientRect().top,
      gallery: document.querySelector("[data-research-gallery]").getBoundingClientRect().top,
    }));
    assert.ok(positions.gallery < positions.publications, "Mobile gallery follows the introduction before publication highlights");
    await page.screenshot({ path: "/tmp/scala-gallery-mobile.png", fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: "/tmp/scala-gallery-desktop.png", fullPage: true });
    const noScript = await browser.newPage({ javaScriptEnabled: false });
    await noScript.goto(`${base}/`);
    assert.equal(await noScript.locator("[data-gallery-slide]:visible").count(), 1);
    assert.equal(await noScript.locator("[data-gallery-controls]:visible").count(), 0);
    console.log("Gallery checks passed: rotation, pause/play, keyboard, links, responsive layouts, reduced motion and no-JS fallback.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
