import { wixClient } from "./wix-client.js";

wixClient.auth.init().then(async () => {
  const status = document.querySelector("#status");

  try {
    const oauthData = JSON.parse(sessionStorage.getItem("wixOAuthData"));

    if (!oauthData) {
      throw new Error("OAuth data not found.");
    }

    const { code, state } = wixClient.auth.parseFromUrl(
      window.location.href,
      "query"
    );

    if (!code || !state) {
      throw new Error("Authorization code not found.");
    }

    const tokens = await wixClient.auth.getMemberTokens(
      code,
      state,
      oauthData
    );

    wixClient.auth.setTokens(tokens);

    sessionStorage.removeItem("wixOAuthData");
    sessionStorage.removeItem("wixSessionToken");

    status.textContent = "Login successful!";
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Wix callback error:", error);
    status.textContent = "Login could not be completed.";
  }
});
