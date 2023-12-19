# Authorheader

Example use:
```js
(async () => {

  let ah = await AuthorHeader({
    location: './.spctools/authorheader.js'
  });

  console.log(ah);
  console.log(await ah.compile());
})();
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
