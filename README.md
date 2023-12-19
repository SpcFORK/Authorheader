# Authorheader

Example use:
```js
// === AUTHORHEADER ===
// -- authorheader.js --
// @SpcFORK
// @SpectCOW
// === ===

(async () => {

  let ah = await AuthorHeader({
    location: './.spctools/authorheader.js'
  });

  console.log(ah);
  console.log(await ah.compile());
})();

/*
{
  "path": [
    "authorheader.js"
  ],
  "atData": [
    "SpcFORK",
    "SpectCOW"
  ]
}
*/
```

---

Types:
```ts
function AuthorHeader(prefs: any, cb: Function): Promise<{
    compile: () => Promise<{} | undefined>;
    getFile: () => Promise<any>;
    formatExpectation: () => Promise<{}>;
    prefs: any;
}>

// ---
// A getter for author info.
```
