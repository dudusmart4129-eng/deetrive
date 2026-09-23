import { wixClient } from "./wix-client.js";

wixClient.auth.init().then(() => {
  document.querySelector("#logout-btn").addEventListener("click", async () => {
    try {
      const currentUrl = window.location.href;

      const { logoutUrl } = await wixClient.auth.logout(currentUrl);

      window.location.href = logoutUrl;
    } catch (error) {
      console.error("Logout error:", error);
      alert("Unable to log out right now.");
    }
  });
});
