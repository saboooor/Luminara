# Store setup

The `/store` page loads package IDs, descriptions, images, categories, prices, and currencies from the Tebex Headless API. All navigation store links point to this page.

Set `TEBEX_HEADLESS_TOKEN` to Luminara's public Headless API webstore token from the Tebex creator panel. For local development, add it to `.env`. Configure the same variable in the production Cloudflare Worker environment. Do not use a plugin secret or checkout API key.

Without the token, or when Tebex is unavailable, the page links visitors to https://luminara.tebex.io.

Purchasing validates the username and current package on the server, creates a basket, authorizes the player through Tebex when required, adds the selected package, and redirects to Tebex checkout. Package fulfillment and subscription settings are managed in Tebex. Verify a real checkout with the configured store before releasing, including username delivery, recurring packages, cancellations, and any package-specific required variables.

API reference: https://docs.tebex.io/developers/headless-api/endpoints

## Troubleshooting

If the store shows as unavailable, inspect the server console. A missing-token message means the server environment does not contain `TEBEX_HEADLESS_TOKEN`; restart local development after changing `.env`. Production requires the variable in Cloudflare, independently of your local `.env`.

A Tebex HTTP 404 means the API could not find the requested resource. If the account endpoint also returns 404, verify you copied the Headless API **public webstore token** for this store from the Tebex creator panel. Plugin/server secret keys and Checkout API private keys are not interchangeable with this token.
