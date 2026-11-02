// Member profile integration checks against the running local preview.
const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const { chromium } = require("playwright");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";
const data = JSON.parse(
  execFileSync(
    "ruby",
    [
      "-ryaml",
      "-rjson",
      "-e",
      'puts JSON.generate({people: YAML.load_file("_data/people.yml"), profiles: YAML.load_file("_data/member_profiles.yml")})',
    ],
    { encoding: "utf8" }
  )
);
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    for (const member of data.people) {
      const response = await page.goto(`${base}/people/${member.id}/`);
      assert.equal(response.status(), 200, member.id);
      assert.equal(await page.locator(".scala-profile-hero").count(), 1);
      assert.equal(await page.locator('.scala-breadcrumb a[href="/al-folio/group/"]').count(), 1);
      assert.equal(await page.locator("#project").count(), 1);
      assert.equal(await page.locator(".post-content pre.highlight").count(), 0, `Escaped profile markup: ${member.id}`);
      const schema = await page.locator('script[type="application/ld+json"]').evaluateAll((nodes) => nodes.map((n) => JSON.parse(n.textContent)));
      const profile = schema.find((s) => s["@type"] === "ProfilePage");
      assert.equal(profile.mainEntity.name, member.name);
      if (!member.university) assert.equal(profile.mainEntity.affiliation, undefined, member.id);
      for (const link of data.profiles[member.id]?.links || []) {
        assert.equal(
          await page
            .locator(".scala-profile-links a")
            .evaluateAll((nodes, url) => nodes.filter((n) => n.getAttribute("href") === url).length, link.url),
          1,
          `${member.id}: ${link.label}`
        );
        assert.ok(profile.mainEntity.sameAs.includes(link.url));
      }
      if (!data.profiles[member.id]) assert.equal(await page.locator("#academic-background, #research-interests, #education").count(), 0);
    }
    await page.goto(`${base}/people/alexander-heinlein/`);
    assert.equal(await page.locator(".scala-profile-table tbody tr").count(), 6);
    assert.equal(await page.locator(".scala-profile-timeline li").count(), 3);
    assert.equal(await page.locator(".scala-profile-links a").count(), 7);
    const text = await page.locator("main").innerText();
    assert.ok(text.includes("Parallel Overlapping Schwarz Preconditioners"));
    assert.ok(text.includes("Spezielle Finite-Elemente-Methoden"));
    assert.equal(await page.locator('a[href="https://searhein.github.io/cv/"]').count(), 0);
    for (const theme of ["light", "dark"]) {
      await page.evaluate((theme) => (document.documentElement.dataset.theme = theme), theme);
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${theme} ${width}`);
      }
    }
    await page.setViewportSize({ width: 390, height: 1000 });
    await page.evaluate(() => {
      document.documentElement.dataset.theme = "light";
    });
    await page.screenshot({ path: "/tmp/scala-profile-mobile.png", fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: "/tmp/scala-profile-desktop.png", fullPage: true });
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, "200% font");
    await page.goto(`${base}/people/filipe-antonio-cumaru-silva-alves/`);
    await page.screenshot({ path: "/tmp/scala-profile-filipe.png", fullPage: true });
    const selectedLinks = await page.locator("#selected-publications + ul a").evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    await page.goto(`${base}/publications/`);
    for (const url of selectedLinks) assert.equal(await page.locator(`[id="${url.split("#")[1]}"]`).count(), 1);
    for (const id of ["alexander-heinlein", "corne-verburg", "filipe-antonio-cumaru-silva-alves"]) {
      assert.ok((await page.locator(`.author a[href="/al-folio/people/${id}/"]`).count()) > 0, `Bibliography member link: ${id}`);
    }
    const search = await page.request.get(`${base}/assets/search-index.json`);
    assert.equal(search.status(), 200);
    assert.ok((await search.text()).includes("domain decomposition and multiscale methods"));
    console.log(
      `Profiles passed: ${data.people.length} pages, verified links/schema, optional sections, bibliography navigation, responsive layouts and search.`
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
