# Authorheader

Authorheader allows you to specify metadata using comments in a table like syntax.
```js
// Format:

// Rule: line 1: 3 symbols, +AUTHORHEADER (case-insensitive), then same as match 1
// Rule: line 2: 3 symbols + space + same as match 1

// {symbol-id} Authorheader {symbol-id}
// -- {{ location }} --
// @{{ Author }}
// ${{ METADATA }}
// ${{ METADATA }}: {{ METADATA }}
// {symbol-id} {symbol-id}
```

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

You can also use the `path` property secction with an importer!! `(wink, wink, nudge, nudge; coming soon!!)`

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
