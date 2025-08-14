define([
    'knockout',
    'ojs/ojtable',
    'ojs/ojmodel',
    'models/VisitorCollection',
    'ojs/ojcollectiondataprovider',
    'ojs/ojbutton',
    'ojs/ojformlayout',
    'ojs/ojinputtext',
    'ojs/ojdialog'
], function (ko, ojtable, ojmodel, VisitorCollection, CollectionDataProvider) {
    function VisitorsViewModel() {
        var self = this;

        self.visitorId = ko.observable();
        self.visitorName = ko.observable();
        self.purpose = ko.observable();
        self.mobileNumber = ko.observable();

        // Collection
        self.collection = new VisitorCollection();
        self.dataProvider = ko.observable();
        // Fetch data
        self.collection.fetch({
            success: function () {
                self.dataProvider(new CollectionDataProvider(self.collection));
            },
            error: function (jqXHR, textStatus) {
                console.error("Fetch error:", textStatus);
            }
        });

        addVisitor = () => {
            var newVisitor = {
                visitorId: self.visitorId(),
                visitorName: self.visitorName(),
                purpose: self.purpose(),
                mobileNumber: self.mobileNumber()
            };

            self.collection.create(newVisitor, {
                wait: true,
                success: function () {
                    alert(self.visitorName() + " registered successfully")
                    document.getElementById("addDialog").close();

                }
            })
        }

        deleteVisitor = (visitorId) => {
            let visitor =  self.collection.get(visitorId);
           if (visitor) {
                visitor.destroy({ wait: true });
            }
        }
        
    }


    return new VisitorsViewModel();
});


