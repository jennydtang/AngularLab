// Function to say hello to multiple people below:
// function sayHello(person: string, wage: number): string {
//   return "Hello, " + person + ", has an hourly wage of: " + wage;
// }
// document.getElementById("wordToReplace").innerHTML = sayHello(
//   "Super Student",
//   0
// );
// document.getElementById("SecondwordToReplace").innerHTML = sayHello(
//   "Jenny",
//   25
// );
// document.getElementById("ThirdwordToReplace").innerHTML = sayHello(
//   "Sprout",
//   100
// );
//creating a class below
var Employee = /** @class */ (function () {
    //constructor
    function Employee(firstname, lastname, age, phonenumber, state, zipcode, occupation, wage, hours, certs) {
        this.FirstName = firstname;
        this.LastName = lastname;
        this.Age = age;
        this.PhoneNumber = phonenumber;
        this.State = state;
        this.Zipcode = zipcode;
        this.Occupation = occupation;
        this.Wage = wage;
        this.Hours = hours;
        this.Certs = [];
    }
    //function
    Employee.prototype.disp = function () {
        return "Hello, " + this.FirstName + " has an hourly wage of: $" + this.Wage;
    };
    Employee.prototype.fullName = function () {
        return "Hello, " + this.FirstName + " " + this.LastName;
    };
    Employee.prototype.location = function () {
        return this.FirstName + " lives in " + this.State + this.Zipcode;
    };
    //Wage Calculator
    Employee.prototype.wageCalc = function () {
        if (this.Hours) {
            this.Hours = this.Hours;
        }
        else {
            this.Hours = 40;
        }
        var weeklyWage = this.Wage * this.Hours;
        return this.FirstName + " has a weekly wage of $" + weeklyWage;
    };
    //function to add an array of certs
    Employee.prototype.addCerts = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            this.Certs.push(args[i]);
            return args;
        }
        //return new Array("MS", "BS", "MBA");
    };
    return Employee;
}());
//creating objects
var user = new Employee("Jenny", "Tang", 32, 1234567, "NC", 28209, "apprentice", 25, 60);
console.log(user.disp());
console.log(user.wageCalc());
console.log("She has the following certs: " + user.addCerts("MS", "BA"));
var user2 = new Employee("Super Student", "Show off", 22, 1234567, "NC", 28209, "student", 0, 100);
console.log(user2.location());
var user3 = new Employee("Sprout", "Sharma", 2, 1234567, "NC", 28209, "lazy cat", 100, 0);
console.log(user3.fullName());
function newEmployee(config) {
    var newEmployee = { NumberofYears: 5 };
    if (config.FirstName) {
        newEmployee.FirstName = config.FirstName;
    }
    if (config.LastName) {
        newEmployee.LastName = config.LastName;
    }
    if (config.NumberofYears) {
        newEmployee.NumberofYears = config.NumberofYears;
    }
    return newEmployee;
}
var newEmployee0 = newEmployee({
    FirstName: "Dana",
    LastName: "Tang",
    NumberofYears: 4
});
console.log(newEmployee0);
