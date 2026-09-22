import { wixClient } from './wix-client.js';
import { login } from '@wix/site-members';

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        await login(wixClient, {
            email,
            password
        });

        window.location.href = 'dashboard.html';

    } catch (error) {
        console.error(error);
        alert('Login failed. Please check your email and password.');
    }
});