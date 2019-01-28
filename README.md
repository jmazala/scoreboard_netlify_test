##Deploy

using Netlify.  drag and drop build folder into online app and it deploys.
can also use netlify-cli: `netlify deploy`

specify `build` as directory
then run `netlify deploy --prod`
```
Logs:            https://app.netlify.com/sites/focused-borg-445dc8/deploys/5c4f7ed76c510b288c97559f
Unique Deploy URL: https://5c4f7ed76c510b288c97559f--focused-borg-445dc8.netlify.com
Live URL:          https://focused-borg-445dc8.netlify.com
```

if you have problems with 404's and redirects on netlify do the following:

create `build/_redirects` file
add `/*    /index.html   200`
use `netlify deploy` again
