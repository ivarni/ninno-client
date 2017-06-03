const getConfig = require('hjs-webpack')
const DashboardPlugin = require('webpack-dashboard/plugin');


const config = getConfig({
  // entry point for the app
  in: 'src/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  html: (context) =>
      `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ninno</title>
          <link rel=stylesheet type="text/css" href="${context.css}">
        </head>
        <body>
          <div id="root"></div>
          <script src="${context.main}"></script>
        </body>
        </html>
      `
  ,

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true

});

config.plugins.push(new DashboardPlugin());

module.exports = config;
