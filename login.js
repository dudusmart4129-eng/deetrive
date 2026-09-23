import { wixClient } from './wix-client.js';

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const redirectUri =
            'https://dudusmart4129-eng.github.io/deetrive/callback.html';

        const oauthData = wixClient.auth.generateOAuthData(
            redirectUri,
            window.location.href
        );

        localStorage.setItem(
            'wixOAuthData',
            JSON.stringify(oauthData)
        );

        const { authUrl } = await wixClient.auth.getAuthUrl(
            oauthData,
            {
                prompt: 'login',
                responseMode: 'query'
            }
        );

        window.location.href = authUrl;

    } catch (error) {
        console.error('Wix login error:', error);
        alert(`Wix error: ${error.message || error}`);
    }
});