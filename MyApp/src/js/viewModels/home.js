define(['ojs/ojrouter'], function(Router) {
  function HomeViewModel() {
    var self = this;

    self.goCustomers = function() {
      Router.rootInstance.go('customers');
    };
  }
  return HomeViewModel;
});
