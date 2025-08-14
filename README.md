 
------------------

client side validation framework


Angular
OJET
React
Vue


·        Arrow Operator
·        Classes
·        Enhanced object literals
·        Template strings
·        De-structuring
·        Default, rest and spread operators
·        Let and const 
·        Iterators
·        Generators
·        Modules
·        Module loaders
·        Promises


Destructuring is a convenient way to unpack values from arrays or extract properties from objects into separate variables.

1. Array Destructuring
You can pull values out of an array in one shot.

 
 
 
const fruits = ["apple", "banana", "cherry"];

// Traditional way
const a = fruits[0];
const b = fruits[1];

// Destructuring
const [x, y] = fruits;

console.log(x); // apple
console.log(y); // banana
You can skip values:

 
 
 
const [first, , third] = fruits;
console.log(third); // cherry
You can also use default values:

 
 
 
const [p, q = "default"] = ["onlyOne"];
console.log(q); // default





2. Object Destructuring
You can extract properties by name.
const person = { name: "John", age: 30 };

// Traditional
const name1 = person.name;
const age1 = person.age;

// Destructuring
const { name, age } = person;

console.log(name); // John
console.log(age); // 30





You can rename variables while destructuring:

 
const { name: fullName, age: years } = person;
console.log(fullName); // John


















3. Nested Destructuring
Works for nested objects/arrays.

 
 
 
const user = {
  id: 1,
  profile: {
    username: "tufail",
    social: ["twitter", "github"]
  }
};

const { profile: { username, social: [twitterHandle] } } = user;

console.log(username); // tufail
console.log(twitterHandle); // twitter
4. Function Parameter Destructuring
You can destructure directly in function parameters.

 
 
 
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Tufail", age: 30 });
5. Rest with Destructuring
You can collect remaining items with the ...rest syntax.

 
 
 
const numbers = [1, 2, 3, 4];
const [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest);  // [2, 3, 4]



 Key benefits of destructuring:

Cleaner code
Less repetition
Easy extraction of data from objects/arrays

JS
------------

define(['ojs/ojinputtext'],

  function () {
    function CustomerViewModel() {

    }
    return CustomerViewModel;
  }
);

HTML


JS
define([
    'ojs/ojinputtext'],
  function () {
    function CustomerViewModel() {
      this.username = "Rohan";
      this.firstName = "Tufail";
      this.lastName = "Ahmed";
    }
    return CustomerViewModel;
  }
);

------

<h2>Customer Details</h2>
<oj-label for="username" id="lbl-username"></oj-label>
Username : <oj-input-text id="username" value="{{username}}"></oj-input-text><br/>
First Name :  <oj-input-text id="firstName" value="{{firstName}}"></oj-input-text><br/>
Last Name :  <oj-input-text id="lastName" value="{{lastName}}"></oj-input-text><br/>
<br/>
<br/>
<oj-bind-text value="{{username}}"></oj-bind-text><br/>
<oj-bind-text value="{{firstName}}"></oj-bind-text><br/>
<oj-bind-text value="{{lastName}}"></oj-bind-text><br/>

    <oj-button id="btnSave">Save</oj-button>


Pending Question : 

path	-	hello

	-	helloUser.html
	-	helloAdmin.js

--------------------------------------------------------

[[	- one way binding
{{	- two way binding







'ojs/ojselectsingle'
  function (ko,ArrayDataProvider) {
..
..
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

HTML :
Customer Type : <oj-select-single id="customerType" data="[[customerType]]" value="[[selectVal]]">
                </oj-select-single>


---------------

     displayCustomerType = (event) => {
          console.log("You selected customer type :"+event.detail.value);
      }


                 on-value-changed="[[displayCustomerType]]">


---------------------------


Case study : Spring boot Rest Endpoint

http://localhost:9090/visitors

OJET 	-->

Hands on :

visitorId
visitorName
purpose
mobileNumber




Here’s the correct mental model and a common best-practice order:

1. Core Libraries First
These are the foundational scripts that everything else may depend on.

'knockout',
'jquery',              // Only if you explicitly use jQuery
2. Data Utilities & Providers
Put these right after the core libraries if used.

'ojs/ojarraydataprovider',
'ojs/ojcollectiondataprovider',
3. JET Component Modules
These are the widgets/components you actually render in your view.

Example:

'ojs/ojinputtext',
'ojs/ojselectsingle',
'ojs/ojformlayout',
'ojs/ojvalidationgroup',
'ojs/ojbutton',
Rule:
If your HTML contains <oj-xyz>, you must have 'ojs/ojxyz' imported before that element is instantiated.

4. JET Validators & Converters
They don’t render directly but must be loaded before you try to use them.


'ojs/ojasyncvalidator-length',
'ojs/ojvalidator-regexp',
'ojs/ojconverter-number',
5. Custom Modules
Place your own ViewModels, Models, and utilities at the bottom.

'utils/helper',
'models/VisitorModel',
'models/VisitorCollection',


Why This Order Matters
AMD loader (RequireJS) in JET resolves dependencies in the order you declare them.

If a component depends on Knockout (almost all of them do), KO must be loaded first.







Use case : Get the data from REST API and display on OJET page



http://localhost:9090/visitor			- GET





names = ["riya","pooja","tarun"];


OJET don't take raw arrays directly.




Model and Collection
---------------------------

Use case : CRUD operations on any model

Model and Collection

src/js/models/VisitorModel.js

define(['ojs/ojmodel'], function (oj) {
    var VisitorModel = oj.Model.extend({
        idAttribute: 'visitorId',
        urlRoot: 'http://localhost:9090/visitors'
    });
    return VisitorModel;
});


src/js/models/VisitorCollection.js

define(['ojs/ojmodel', 'models/VisitorModel'], function (oj, VisitorModel) {
    var VisitorCollection = oj.Collection.extend({
        url: 'http://localhost:9090/visitors',
        model: VisitorModel
    });
    return VisitorCollection;
});










http://localhost:9090/visitors/119	- GET
http://localhost:9090/visitors/119	- DELETE





    function AddVisitorsViewModel(params) {
..


 var self = this;
            // Router passed from main
        self.router = params && params.parentRouter;


..saveVisitor	

alert(visitor.visitorName + " you are registered successfully");
                self.router.go({ path: 'listVisitors' }); 




-----------------

Components in react


class 
functional






























