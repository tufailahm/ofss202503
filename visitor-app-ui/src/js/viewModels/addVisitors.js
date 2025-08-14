define([
    'knockout',
    'ojs/ojasyncvalidator-length',
    'ojs/ojvalidator-regexp',
    'ojs/ojinputtext',
    'ojs/ojselectsingle',
    'ojs/ojformlayout',
    'ojs/ojvalidationgroup',
    'ojs/ojbutton'
], function (ko, AsyncLengthValidator, RegExpValidator) {
    function AddVisitorsViewModel() {

        var self = this;

        self.visitorId = ko.observable('');
        self.visitorName = ko.observable('');
        self.mobileNumber = ko.observable('');
        self.purpose = ko.observable('');

        self.isFormInvalid = ko.observable(true);       //
        self.doValidation = (event) => {
            // 'valid' means all fields are good, 
            // 'invalidHidden' or 
            // 'invalidShown' means not valid
            console.log("event.detail.value :" + event.detail.value)
            self.isFormInvalid(event.detail.value !== 'valid');
        };

        // Mobile number validator
        self.mobileValidator = new RegExpValidator({
            pattern: "^[0-9]{10}$",
            hint: "Enter exactly 10 digits",
            messageDetail: "Invalid mobile number format"
        });

        self.visitorNamevalidator = new AsyncLengthValidator({
            min: 5,
            max: 20
        })

        saveVisitor = async () => {

            url = "http://localhost:9090/visitors";

            const visitor = {
                visitorId: this.visitorId(),
                visitorName: this.visitorName(),
                mobileNumber: this.mobileNumber(),
                purpose: this.purpose()
            };
           
            const saveRequest = new Request(url, {
                headers: new Headers({
                    "Content-type": "application/json; charset=UTF-8",
                }),
                body: JSON.stringify(visitor),
                method: "POST",
            });

            const response = await fetch(saveRequest);
            if(response.status == 201)
            {
                console.log("Visitor saved successfully ");
                alert(visitor.visitorName + " you are registered successfully");
            }

        }

        updateVisitor = () => {
                //complete the code here 
        }
    }
    return AddVisitorsViewModel;
});
