var person = {
    firstName: "", 
    lastName: "", 
    address: "", 
    cellphoneNumber: ""}

function submitData()
{
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.address = document.getElementById("address").value;
    person.cellphoneNumber = document.getElementById("telephone").value;
    
    let fullName =  person.lastName + ", " +  person.firstName; 

    document.getElementById('submitOk').innerHTML = "Data has been Submitted";
    document.getElementById('fullName').innerHTML = fullName;
    document.getElementById('contactNumber').innerHTML = person.cellphoneNumber;
}

function showMessage(idName, message)
{
    document.getElementById(idName).innerHTML = message;
}

function removeMessage(idName)
{
    document.getElementById(idName).innerHTML = "";
}