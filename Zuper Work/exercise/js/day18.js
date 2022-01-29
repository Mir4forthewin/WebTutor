var person = 
{
    firstName: "", 
    lastName: "", 
    address: "", 
    cellphoneNumber: ""
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
    document.getElementById('number').innerHTML = person.cellphoneNumber
    document.getElementById("fullNameLenght").innerHTML = fullName.length + " - Lenght of full name";

    showLenght();
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