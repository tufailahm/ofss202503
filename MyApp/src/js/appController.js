define(['ojs/ojcore', 'knockout', 'ojs/ojrouter'],
  function (oj, ko) {

    function ControllerViewModel() {
      var self = this;

      // Root Router
      self.router = oj.Router.rootInstance;

      // Configure your custom routes
      self.router.configure({
        'home': { label: 'Home', isDefault: true },
        'customers': { label: 'Customers' },
        'about': { label: 'About Us' }
      });

      // URL handling
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      return self;
    }

    return new ControllerViewModel();
  }
);
