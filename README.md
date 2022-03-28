# examples-wrapper

Required dependicies:
1. `@cubejs-client/core`
2. `cubedev-tracking`
3. `browserify`

How to integrate it into existing example demo:
1. Copy `/public` folder
2. Check **TODO** at `index.html` and fill the gaps
3. Add to env CUBE_EXAMPLES_META_* variables (prefix may be required if the dashboard-app use framework-specific environment):
    - `[preifx_]CUBE_EXAMPLES_META_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDg0ODc1MzF9.3uTCoC-XGy1MxYoe3Wzbokx6gL0fOpwJG0R_quSDGvg`
    - `[preifx_]CUBE_EXAMPLES_META_API_URL=https://relevant-badger.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1`
4. Install required dependicies
5. Copy `"bundle"` package.json script and run it to build client-side js
6. Copy `"preview"` package.json script and run it to build preview link on Netlify
