# QR-Code-Generator
A Web App generating QR Code for texts and URL

## Phase
Frontend , API

## Tech used
 HTML, CSS, Javascript, JSON, API

## Description
1. User has to input text or URL in the Input box
2. Clicking the button "Generate QR" generates the QR Code
3. The QR image is fetched from `QR code API` url -> `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`
4. The QR code is generated for the value passed for the `data` property in the url
5. To remove the QR code generated, either `Refresh` the browser or `remove` the text from Input box

## Validation
1. If entered text = 0 or "" : QR is not generated and `QR not fetched` displays on the button
2. If the API sends unwanted response , then also `QR not fetched` displays on the button

## Concepts implemented
 CSS Flexbox, Transition, Fetch API, Promise, then() method, DOM manipulation, DOM style manipulation with JS

## New learning
`height` and `width` attributes can be over-ridden by new class attached to the same element

## Future Plans
1. QR Code downloading feature
2. QR Code Screenshot and scanning feature

<hr />

### References

1.  [Coding Nepal Youtube Channel](https://youtu.be/pv5K28zVepE)

2.  [QR Code API](https://goqr.me/api/)

***********************************************************************************************************


