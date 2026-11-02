// Verify the local migration against the original-byte manifest and preview routes.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const { request } = require("playwright");
const manifest = require("../docs/DOWNLOAD_MIGRATION.json");
const base = process.env.SCALA_PREVIEW_URL || "http://localhost:8080/al-folio";
(async () => {
  const client = await request.newContext();
  try {
    for (let i = 0; i < manifest.files.length; i += 4) {
      await Promise.all(
        manifest.files.slice(i, i + 4).map(async (item) => {
          const bytes = fs.readFileSync(item.path);
          assert.equal(bytes.length, item.bytes, item.path);
          assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), item.sha256, item.path);
          const response = await client.head(`${base}/${item.path}`);
          assert.equal(response.status(), 200, item.path);
          assert.ok(response.headers()["content-type"].includes("application/pdf"), item.path);
        })
      );
    }
    console.log(`Archive passed: ${manifest.files.length} byte-identical PDFs served locally.`);
  } finally {
    await client.dispose();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
