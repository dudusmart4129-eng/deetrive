import { wixClient } from './wix-client.js';
// no import needed

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await wixClient.auth.login({
    email,
    password
});
        console.log('Wix login response:', response);

        if (response.loginState === 'SUCCESS') {
    const sessionToken = response.data.sessionToken;

    sessionStorage.setItem('wixSessionToken', sessionToken);

    const redirectUri = 'https://dudusmart4129-eng.github.io/deetrive/callback.html';

    const oauthData = wixClient.auth.generateOAuthData(
        redirectUri,
        window.location.href
    );

    sessionStorage.setItem(
        'wixOAuthData',
        JSON.stringify(oauthData)
    );

    const { authUrl } = await wixClient.auth.getAuthUrl(oauthData, {
        prompt: 'login',
        responseMode: 'query',
        sessionToken
    });

    window.location.href = authUrl;
        }
          
        else {
            alert(`Login requires another step: ${response.loginState}`);
        }

 } catch (error) {
    console.error('Wix login error:', error);
    alert(`Wix error: ${error.message || error}`);
}
});