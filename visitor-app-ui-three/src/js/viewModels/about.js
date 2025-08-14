define(['ojs/ojbootstrap', 'knockout', 'ojs/ojrouter'],
  function (Bootstrap, ko, Router) {

    function AppViewModel() {
      var self = this;

      //  Get the root instance of Router
      self.router = Router.rootInstance;

      // Configure routes
      self.router.configure({
        'dashboard': { label: 'dashboard', isDefault: true },
        'incidents': { label: 'incidents' },
        'signup': { label: 'Sign' }
      });

      // Link to ojModule
      self.moduleConfig = ko.pureComputed(function () {
        return { viewName: self.router.stateId(), viewModelFactory: null };
      });
      self.goToIncidents = function () { self.router.go('incidents'); };
      self.goToDashboard = function () { self.router.go('dashboard'); };
      self.goToSignUp = function () { self.router.go('signup'); };

      //Start the router after DOM is ready
      Bootstrap.whenDocumentReady().then(function () {
        Router.sync();
      });
    }

    return AppViewModel;
  });
