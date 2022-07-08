const shopifyAppConfig = document.getElementById('shopify-app-init').dataset;
// Create your shopify app here
import createApp from '@shopify/app-bridge';
const apiKey = shopifyAppConfig.apiKey;
const host = shopifyAppConfig.shopOrigin;
export const app = createApp({
    apiKey: apiKey,
    host: btoa(host)
});
export default  { app }
