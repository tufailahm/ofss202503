define(['ojs/ojrouter'], function(Router) {
  function CustomersViewModel() {
    var self = this;

    self.goAbout = function() {
      Router.rootInstance.go('about');
    };
  }
  return CustomersViewModel;
});
