import { createClient, OAuthStrategy } from '@wix/sdk';
import * as siteMembers from '@wix/site-members';

const savedTokens =
    localStorage.getItem('wixTokens');

const authStrategy = OAuthStrategy({
    clientId:
        '50a1463b-3a58-4b5e-8d47-8b886771326e',

    tokens:
        savedTokens
            ? JSON.parse(savedTokens)
            : undefined
});

export const wixMemberClient =
    createClient({
        auth: authStrategy,

        modules: {
            siteMembers
        }
    });