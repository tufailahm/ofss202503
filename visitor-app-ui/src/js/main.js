require([
  'ojs/ojbootstrap', 
  'knockout', 
  'appController', 
  'ojs/ojrouter'
], function (Bootstrap, ko, app) {
  Bootstrap.whenDocumentReady().then(function () {
    // Apply Knockout bindings of appController to index.html
    ko.applyBindings(app, document.getElementById('globalBody'));
  });
});
