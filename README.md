# theia-embedded-webpack-app
Trying to integrate Theia ide in webapp


How to reproduce bug.
```
 > cd theia-embedded-webpack-app
 > yarn
 > yarn install
 > yarn dev

open http://localhost:8080/

got to console and error would be there.
Uncaught TypeError: __webpack_require__(...).use is not a function
    at eval (frontend-application-module.js:40)
    at Object../node_modules/@theia/core/lib/browser/frontend-application-module.js (main.js:1359)
    at __webpack_require__ (main.js:20)
    at eval (app.ts:7)
    at Object../src/app.ts (main.js:9631)
    at __webpack_require__ (main.js:20)
    at eval (index.ts:22)
    at Object../src/index.ts (main.js:9654)
    at __webpack_require__ (main.js:20)
    at eval (webpack:///multi_(:8080/webpack)-dev-server/client?:2:18)
