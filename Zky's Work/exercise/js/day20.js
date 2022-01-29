var person = 
{
    firstName: "", 
    lastName: "", 
    address: "", 
    cellphoneNumber: "",
    function() {
        //print helo
    }
}

function submitData()
{
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.address = document.getElementById("address").value;
    person.cellphoneNumber = document.getElementById("contactNumber").value;
    
    let fullName =  person.lastName + ", " +  person.firstName;


    document.getElementById('submitOk').innerHTML = "Data has been Submitted";
    document.getElementById('fullName').innerHTML = fullName;
    document.getElementById('number').innerHTML = person.cellphoneNumber;
    document.getElementById("fullNameLength").innerHTML = fullName.length + " - Lenght of full name";

    showLenght();
    showProvider();
    changetoUpperCase();
}

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
    document.getElementById("lastName").value = person.lastName.toUpperCase();
}
