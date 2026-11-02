// Augment the plugin's navigation/theme actions with the site's searchable records.
const scalaSearchIndex = document.currentScript.dataset.index;
(async () => {
  const ninja = document.querySelector("ninja-keys");
  if (!ninja) return;
  try {
    const response = await fetch(scalaSearchIndex);
    if (!response.ok) throw new Error("Search index unavailable");
    const records = (await response.json()).filter(Boolean);
    const decode = (text) => new DOMParser().parseFromString(text || "", "text/html").body.textContent;
    const existing = (ninja.data || []).map((action) => ({
      ...action,
      description: decode(action.description),
      ...(action.section === "News" && !action.handler
        ? {
            handler: () => {
              window.location.href = records.find((record) => record.id === "page-/news/")?.url || "#main-content";
            },
          }
        : {}),
    }));
    ninja.data = [
      ...existing,
      ...records.map(({ url, ...record }) => ({
        ...record,
        handler: () => {
          window.location.href = url;
        },
      })),
    ];
  } catch (error) {
    console.warn("Site search index could not be loaded.", error);
  }
})();
