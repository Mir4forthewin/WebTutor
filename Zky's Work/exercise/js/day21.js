var person = 
{
    firstName: "", 
    lastName: "", 
    address: "", 
    cellphoneNumber: "",
    dateOfBirth:"",
    function() {
        //print helo
    }
}

let registeredFirstName = [];
let registeredLastName = [];

//let listOfPerson[person1, person2,]

var number = 3;

function submitData()
{
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.address = document.getElementById("address").value;
    person.cellphoneNumber = document.getElementById("contactNumber").value;
    person.dateOfBirth = document.getElementById("dateOfBirth").value;
    
    let fullName =  person.lastName + ", " +  person.firstName;


    document.getElementById('submitOk').innerHTML = "Data has been Submitted";
    document.getElementById('fullName').innerHTML = fullName;
    document.getElementById('number').innerHTML = person.cellphoneNumber;
    document.getElementById("fullNameLength").innerHTML = fullName.length + " - Lenght of full name";

    showLenght();
    showProvider();
    changetoUpperCase();
    pushData(person.firstName);
    pushDataLastname(person.lastName)
}

//---

function showMessage(idName, message)
{
    document.getElementById(idName).innerHTML = message;
}

function removeMessage(idName)
{
    document.getElementById(idName).innerHTML = "";
}

function showLenght()
{
    document.getElementById("firstNameLength").innerHTML = person.firstName.length;
    document.getElementById("lastNameLength").innerHTML = person.lastName.length;
    document.getElementById("addressLength").innerHTML = person.address.length;
    document.getElementById("cellphoneLength").innerHTML = person.cellphoneNumber.length;
}

function showProvider()
{
    document.getElementById("cellphoneProvider").innerHTML = person.cellphoneNumber.substr(0, 4);
}

function changetoUpperCase()
{
    document.getElementById("firstName").value = person.firstName.toUpperCase();  
    person.firstName = person.firstName.toUpperCase(); 
    document.getElementById("lastName").value = person.lastName.toUpperCase();
    person.lastName = person.lastName.toUpperCase();
}

function clearData()
{
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("contactNumber").value = "";
}

//saving data furst
function pushData(firstName)
{
    registeredFirstName.push(firstName)
}

//retrieving data first
function retrieveFirstNameData()
{
    document.getElementById("showData").innerHTML = registeredFirstName;
}

// Seperation of first name and last name ------------

function pushDataLastname(lastName)
{
    registeredLastName.push(lastName);
}

function retrieveLastnameData()
{
    document.getElementById("showData").innerHTML = registeredLastName; 
}