define(['knockout',
    'ojs/ojrestdataprovider',
    'ojs/ojinputtext',
    'ojs/ojtable'],

    function (ko, RESTDataProvider) {

        function ListVisitorViewModel() {
            url = "http://localhost:9090/visitors";

            this.dataprovider = ko.observable(null);
            this.loadVisitor = () => {
                this.dataprovider = new RESTDataProvider.RESTDataProvider({
                    keyAttributes: this.keyAttributes,
                    url: url,
                    transforms: {
                        fetchFirst: {
                            request: async (options) => {
                                const url = new URL(options.url);
                                return new Request(url.href);
                            },
                            response: async ({ body }) => {
                                console.log("BODY :" + body);
                                return { data: body };
                            },
                        },
                    },
                });
                console.log("####Load visitor called :" + this.dataprovider)
            }


            this.loadVisitor();


        }
        return ListVisitorViewModel;
    }
);
