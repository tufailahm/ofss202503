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

        addVisitors = () => {

            var newVisitor = {
                visitorId: self.visitorId(),
                visitorName: self.visitorName(),
                purpose: self.purpose(),
                mobileNumber: self.mobileNumber()
            };

            self.collection.create(newVisitor, {
                wait: true,
                success: function () {
                    alert(this.visitorName + " registered successfully")
                    document.getElementById("addDialog").close();

                }
            })
        }

    }
    return new VisitorsViewModel();
});


