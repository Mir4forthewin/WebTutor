


var Person = //object
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
    
    let fullName =  person.lastName + ", " +  person.firstName + ", ";
    
    var len = fullName.length;
    


    document.getElementById('submitOk').innerHTML = "Data has been Submitted";
    document.getElementById('fullName').innerHTML = fullName;
    document.getElementById('number').innerHTML = person.cellphoneNumber;
    document.getElementById('fullNameLength').innerHTML = len + " letter counter";
    
    


}

function showMessage(idName, message)
{
    document.getElementById(idName).innerHTML = message;
}

function removeMessage(idName)
{
    document.getElementById(idName).innerHTML = "";
}