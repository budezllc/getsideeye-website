// Set this when the Chrome Web Store listing is published.
// Example: https://chromewebstore.google.com/detail/side-eye/abcdefghijklmnopqrstuvwxyz
const CHROME_WEB_STORE_URL = "";

const storeUrl = CHROME_WEB_STORE_URL.trim();
const hasStoreUrl =
  storeUrl.length > 0 && !storeUrl.includes("REPLACE_WITH_EXTENSION_ID");

document.querySelectorAll("[data-store-link]").forEach((link) => {
  if (!(link instanceof HTMLAnchorElement) || !hasStoreUrl) return;
  link.href = storeUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
