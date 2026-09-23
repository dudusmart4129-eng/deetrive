import { createClient, OAuthStrategy } from '@wix/sdk'

const authStrategy = OAuthStrategy({
  clientId: '50a1463b-3a58-4b5e-8d47-8b886771326e'
})

export const wixClient = createClient({
  auth: authStrategy
})

const savedTokens = localStorage.getItem('wixTokens')

if (savedTokens) {
  try {
    wixClient.auth.setTokens(JSON.parse(savedTokens))
  } catch (error) {
    console.error('Unable to restore Wix session:', error)
    localStorage.removeItem('wixTokens')
  }
}
