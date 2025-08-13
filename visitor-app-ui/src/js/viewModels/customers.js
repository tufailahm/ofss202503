define([
  'knockout',
   'ojs/ojarraydataprovider',
  'ojs/ojinputtext',
  'ojs/ojselectsingle'],
  function (ko,ArrayDataProvider) {
    function CustomerViewModel() {
      this.username = ko.observable("Rohan");
      this.firstName = ko.observable("Neha");
      this.lastName = ko.observable("Ahmed");    //viewModel

      this.selectVal = 'F';

      this.customerType = [
        { value: 'O', label: 'Permanent' },
        { value: 'C', label: 'Contractual' },
        { value: 'F', label: 'Freelance' },
        { value: 'V', label: 'Vendor' }
      ];

      this.customerTypeDataProvider = new ArrayDataProvider(this.customerType,{
        keyAttributes :'value'
      });

      changeUsername = () => {
        console.log("Change user name called " + this.username())
        this.username("Abhishek");
        this.firstName("Riya");
      }
      changeFirstName = () => {
        this.firstName("Tanya");
      }

      displayCustomerType = (event) => {
          console.log("You selected customer type :"+event.detail.value);
      }
    }
    return CustomerViewModel;
  }
);