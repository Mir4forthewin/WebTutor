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
    person.cellphoneNumber = document.getElementById("contactNumber").value;
    
    let fullName =  person.lastName + ", " +  person.firstName;


    document.getElementById('submitOk').innerHTML = "Data has been Submitted";
    document.getElementById('fullName').innerHTML = fullName;
    document.getElementById('number').innerHTML = person.cellphoneNumber;
}

function showMessage()
{
    document.getElementById('message').innerHTML = "Mouse is hovering";
}

function removeMessage()
{
    document.getElementById('message').innerHTML = "";
}