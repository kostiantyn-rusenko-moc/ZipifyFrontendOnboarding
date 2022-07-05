const shopifyAppConfig = document.getElementById('shopify-app-init').dataset;
import createApp from '@shopify/app-bridge';
import { isShopifyEmbedded } from '@shopify/app-bridge-utils';
import { Redirect } from '@shopify/app-bridge/actions';

const apiKey = '44a9014cab356328468589c54ba0e258';
const redirectUri = 'https://moc.eu.ngrok.io/auth/shopify/callback';
const host = 'test-store-che.myshopify.com';
const permissionUrl = `https://${host}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;
let app;

// If your app is embedded inside Shopify, use App Bridge to redirect
if (isShopifyEmbedded()) {
    app = createApp({
            apiKey: apiKey,
            host: btoa(`https://${host}/admin`)
        });
        
      Redirect.create(app).dispatch(Redirect.Action.REMOTE, permissionUrl);
    // Otherwise, redirect using the `window` object
    // const productPicker = ResourcePicker.create(app, {
    //     resourceType: ResourcePicker.ResourceType.Product,
    //   });
    // picker.subscribe(ResourcePicker.Action.CANCEL, () => {
    //     // Picker was cancelled
    // });
    // picker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
    //     const selection = selectPayload.selection;
    //     // Do something with `selection`
    // });
} else {
  window.location.assign(permissionUrl);
}
export default app

// Create your shopify app here
