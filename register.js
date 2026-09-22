import { wixClient } from './wix-client.js';

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fullName = document.querySelector('#full-name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    try {
        const response = await wixClient.auth.register({
            email,
            password,
            profile: {
                nickname: fullName
            }
        });

        console.log('Wix registration response:', response);

        alert('Account created successfully!');

        window.location.href = 'login.html';

    } catch (error) {
        console.error('Wix registration error:', error);
        alert(`Registration failed: ${error.message || error}`);
    }
});