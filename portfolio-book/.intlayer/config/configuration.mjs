const internationalization = {
  "locales": [
    "de",
    "en"
  ],
  "requiredLocales": [
    "de",
    "en"
  ],
  "strictMode": "inclusive",
  "defaultLocale": "de"
};
const dictionary = {
  "fill": true,
  "contentAutoTransformation": false,
  "location": "local",
  "importMode": "static"
};
const routing = {
  "mode": "prefix-no-default",
  "storage": {
    "cookies": [
      {
        "name": "INTLAYER_LOCALE",
        "attributes": {
          "path": "/"
        }
      }
    ],
    "headers": [
      {
        "name": "x-intlayer-locale"
      }
    ]
  },
  "basePath": ""
};
const content = {
  "fileExtensions": [
    ".content.ts",
    ".content.js",
    ".content.cjs",
    ".content.mjs",
    ".content.json",
    ".content.json5",
    ".content.jsonc",
    ".content.tsx",
    ".content.jsx",
    ".content.md",
    ".content.mdx",
    ".content.yaml",
    ".content.yml"
  ],
  "contentDir": [
    "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book"
  ],
  "codeDir": [
    "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book"
  ],
  "excludedPath": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.intlayer/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.expo/**",
    "**/.vercel/**",
    "**/.turbo/**",
    "**/.tanstack/**",
    "**/.output/**",
    "**/.svelte-kit/**"
  ],
  "watch": true
};
const system = {
  "baseDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book",
  "moduleAugmentationDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\types",
  "unmergedDictionariesDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\unmerged_dictionary",
  "remoteDictionariesDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\remote_dictionary",
  "dictionariesDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\dictionary",
  "dynamicDictionariesDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\dynamic_dictionary",
  "fetchDictionariesDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\fetch_dictionary",
  "typesDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\types",
  "mainDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\main",
  "configDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\config",
  "cacheDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\cache",
  "tempDir": "C:\\Users\\sabin\\OneDrive\\Desktop\\Portfolio-as-a-book\\portfolio-book\\.intlayer\\tmp"
};
const editor = {
  "editorURL": "http://localhost:8000",
  "cmsURL": "https://app.intlayer.org",
  "backendURL": "https://back.intlayer.org",
  "port": 8000,
  "enabled": false,
  "dictionaryPriorityStrategy": "local_first",
  "liveSync": false,
  "liveSyncPort": 4000,
  "liveSyncURL": "http://localhost:4000"
};
const analytics = {
  "enabled": false,
  "flushInterval": 20000,
  "sampleRate": 1
};
const log = {
  "mode": "default",
  "prefix": "\u001b[38;5;239m[intlayer] \u001b[0m"
};
const ai = {};
const build = {
  "mode": "auto",
  "minify": false,
  "purge": false,
  "chunkGrouping": true,
  "dictionariesPreload": true,
  "traversePattern": [
    "**/*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/build/**",
    "!**/.intlayer/**",
    "!**/.next/**",
    "!**/.nuxt/**",
    "!**/.expo/**",
    "!**/.vercel/**",
    "!**/.turbo/**",
    "!**/.tanstack/**",
    "!**/.output/**",
    "!**/.svelte-kit/**",
    "!**/*.config.*",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/*.stories.*",
    "!**/*.d.ts",
    "!**/*.d.ts.map",
    "!**/*.map"
  ],
  "outputFormat": [
    "esm",
    "cjs"
  ],
  "cache": true,
  "checkTypes": false
};
const compiler = {
  "enabled": false,
  "dictionaryKeyPrefix": "",
  "noMetadata": false,
  "saveComponents": false
};
const schemas = undefined;
const plugins = undefined;

export { internationalization, dictionary, routing, content, system, editor, analytics, log, ai, build, compiler, schemas, plugins };
