define([
    'knockout',
    'ojs/ojarraydataprovider',
    'ojs/ojinputtext',
    'ojs/ojselectsingle',
    'ojs/ojradioset',
    'ojs/ojcheckboxset',
    'ojs/ojformlayout'
],
    function (ko, ArrayDataProvider) {
        function SignupViewModel() {
            this.username = ko.observable("Rohan@123");
            this.password = ko.observable("Rohan1111");
        }
        return SignupViewModel;
    }
);