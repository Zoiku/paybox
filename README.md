# Paybox

An Ionic 5 and Angular 11 pizza-ordering demo with a product catalogue, an in-memory cart, checkout, and a Paybox mobile-money payment screen in Ghana cedis.

## Local development

Use Node.js and npm compatible with the Angular 11 dependency set. This repository does not pin a Node version.

```sh
git clone https://github.com/Zoiku/paybox.git
cd paybox
npm install
npm start
```

Open the address printed by Angular, normally `http://localhost:4200`. Browser development lets you explore the catalogue and checkout. Payment calls use the Cordova native HTTP plugin and require a configured native runtime.

## Payment integration

`src/app/payment/payment.page.ts` constructs the payment request, including the amount, mobile network, and mobile number. It currently contains fixed authorization and order/voucher values. Replace that demo configuration with a controlled payment integration before attempting transactions; do not copy those values into a new deployment. The response handling is demo logic and does not establish a complete payment-verification flow.

The Android project configuration uses Cordova Android 9.1.0. Native packaging also requires Ionic/Cordova tooling and the matching Android SDK setup; these are separate from the browser preview.

## Commands

- `npm run build`: Angular build, written to `www/`.
- `npm test`: Karma/Jasmine unit tests.
- `npm run lint`: TSLint checks.
- `npm run e2e`: Protractor tests.

Browser-based tests require the corresponding browser tooling.

## Code guide

- `src/app/services/cart.service.ts`: pizza data, cart items, and totals.
- `src/app/shop/`, `checkout/`, `payment/`: ordering screens.
- `src/app/app-routing.module.ts`: routes.
- `angular.json`, `config.xml`, `ionic.config.json`: web and native configuration.
- `resources/`: native icons and splash screens.
