# angular2-my-cv
Website I wrote to display my CV using Angular2 and Meteor.

## Initialisation
Commands to type to create the project and initiliase all the dependencies.

```
meteor create my-cv

meteor remove blaze-html-templates
meteor add angular2-compilers barbatus:angular2-runtime
meteor npm install --save angular2-meteor @angular/platform-browser-dynamic
meteor npm install

npm install typings -g
typings init
typings install es6-promise --save
typings install dt~es6-shim --global --save
typings install registry:env/meteor --global

meteor npm install angular2-meteor-auto-bootstrap --save
meteor npm install --save angular2-meteor-polyfills
meteor npm install --save @angular/router-deprecated
meteor npm install --save @angular/http
meteor npm install --save bootstrap@4.0.0-alpha.2
meteor add fourseven:scss
meteor npm install angular2-google-maps --save

meteor add email
meteor add check
```

## Deployment
Command to type to deploy using galaxy meteor.
```
SET DEPLOY_HOSTNAME=galaxy.meteor.com
meteor deploy www.maximerenou.meteorapp.com --settings settings.json
meteor deploy www.maximerenou50.com --settings settings.json
```
