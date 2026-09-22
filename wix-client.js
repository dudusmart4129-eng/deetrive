import { createClient, OAuthStrategy } from '@wix/sdk'

export const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: '50a1463b-3a58-4b5e-8d47-8b886771326e'
  })
})
