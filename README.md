fe_test
=======
Prerequisites : node.js, guntcli

Install:
`git clone git@github.com:alexpirjol/fe_test.git && cd fe_test && npm install && bower install`

Development:

`grunt serve` - start local server and grunt tasks for development
`grunt server:dist` - start grunt localserver and serve production version of the files (minified, compressed)

Known issues:
- there is a problem with the angular-bbotstrap bower packaget in that it does not specify all of it's components that need to be injected which triggers an error when running `grunt serve:dist`. to fix this just edit the `bower_components/angular-bootstrap/bower.json` and add `ui-bootstrap.js` to the `main` array
ex: "main": ["./ui-bootstrap-tpls.js", "./ui-bootstrap.js"],
