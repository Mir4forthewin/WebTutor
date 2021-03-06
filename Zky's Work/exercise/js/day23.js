var person = 
{
    visitorID: 0,
    firstName: "",  
    lastName: "", 
    address: "", 
    cellphoneNumber: "",
    dateOfBirth:""
}

let tData = document.getElementById("tableData");
let registeredFirstName = [];  //this is storage for the firstname
let registeredLastName = [];   //this is storage for lastname
let registeredPerson = [];

var number = 3;

function submitData()
{
    let fullName =  person.lastName + ", " +  person.firstName;
    let dateToday = new Date();

    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.address = document.getElementById("address").value;
    person.cellphoneNumber = document.getElementById("contactNumber").value;
    person.dateOfBirth = document.getElementById("dateOfBirth").value;
    
    let dateOfBirth = new Date(person.dateOfBirth);
    let todayInt = parseInt( dateToday.getUTCFullYear() );
    let dobInt = parseInt( dateOfBirth.getUTCFullYear() );
    let agePerson = todayInt - dobInt;


    if (agePerson > 17 && agePerson < 30)
    {
        console.log("Adult");
    } 
    else if (agePerson > 29 && agePerson < 60)
    {
        console.log("Middle Age");
    }
    else if (agePerson > 59)
    {
        console.log("Senior");
    }
    else{
        console.log("Minor");
    }

    
    if (agePerson < 18 )
    {
        alert("minor's not allowed");
    }
    else
    {
        console.log("visitor is legal age");

        document.getElementById('submitOk').innerHTML = "Data has been Submitted";
        document.getElementById('fullName').innerHTML = fullName;
        document.getElementById('number').innerHTML = person.cellphoneNumber;
        document.getElementById("fullNameLength").innerHTML = fullName.length + " - Lenght of full name";
    
        showLenght();
        showProvider();
        changetoUpperCase();
        pushData(person.firstName);
        pushDataLastname(person.lastName);
        pushDataAll(person);
    } 

    showLog();
}

function showLog()
{
    for(let index = 0; index < registeredPerson.length; index++)
    { 
        console.log(registeredPerson[index]);
    }
    
    let i, len, text, surnameDummy;
/*
    for(i = 0, len = registeredPerson.length, text = ""; i < len; i++)
    {
        console.log(registeredPerson[i].lastName);   
    }

    let txt = "";

    for(let x in person)
    {
        txt += person[x] + " ";
    }

    console.log(txt); 

    //use "registeredFirstName" as your array of string
    let txt = "";

    for(let x of registeredFirstName)
    {
        txt += x;
    }

    console.log(txt); 

    */

    /*
    //Print the firstname for 20 times 0-19
    let txt = registeredFirstName[0];
    let z = 0;

    while(z < 20)
    {
        txt += registeredFirstName[0] + z;

        z++;
    }
console.log(txt); 
    */


    //Break the loop when it encunters a Japanese made car
    let txt = "";

    const cars = ["bmw", "audi", "toyota","ford"];

    for(let car of cars)
    {
        if (car === "toyota") 
        { 
            break; 
        }
        
        txt += car + "<br>";
    }

    document.getElementById("result").innerHTML = txt;


    txt = "";


    //Skip the loop when it encunters a Japanese made car
    for(let car of cars)
    {
        if(car === "toyota" )
        {
            continue; 
        }

        txt += car + "<br>";;
    }

    document.getElementById("result2").innerHTML = txt;

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

//Start

//retrieving data first

function retrieveFirstNameData()
{   
    clearTable();
   
    let tRow = document.createElement('tr');
    let tHead = document.createElement('th');
 
    tHead.innerHTML = "First Name";  //<th>First Name</th>
    tRow.appendChild(tHead);  //<tr> <th>First Name</th> </tr>
    tData.appendChild(tRow);  //<table> <tr> <th>First Name</th> </tr> </table> 
    
   registeredFirstName.forEach(insertRowFirstName);
}


function clearTable()
{
    tData.innerHTML = "";
}

function insertRowFirstName(value, index, array) 
{
    let tRow = document.createElement('tr');
    let tDef = document.createElement('td');

    tDef.innerHTML = value; //<td>value e.g Name1</td>
    tRow.appendChild(tDef); //<tr> <td>value</td> </tr>
    tData.appendChild(tRow);//<table> <tr> <th>First Name</th> </tr> <tr> <td>value</td> </tr> </table> 
}

//END

function pushData(firstName)
{
    registeredFirstName.push(firstName);
}

function pushDataLastname(lastName)
{
    registeredLastName.push(lastName)
}

function pushDataAll(personData)
{
    let tempPerson = 
    {
        firstName: personData.firstName, 
        lastName: personData.lastName, 
        address: personData.address, 
        cellphoneNumber: personData.cellphoneNumber,
        dateOfBirth: personData.dateOfBirth
    }

    registeredPerson.push(tempPerson);
}

function retrieveLastNameData()
{
    clearTable();

    let tRow = document.createElement('tr')
    let tHead = document.createElement('th');

    tHead.innerHTML = "Last Name"
    tRow.appendChild(tHead);
    tData.appendChild(tRow)

    registeredLastName.forEach(insertRowLastName);
}

function insertRowLastName(value, index, array) 
{
    let tRow = document.createElement('tr');
    let tDef = document.createElement('td');

    tDef.innerHTML = value; //<td>value e.g Name1</td>
    tRow.appendChild(tDef); //<tr> <td>value</td> </tr>
    tData.appendChild(tRow);//<table> <tr> <th>First Name</th> </tr> <tr> <td>value</td> </tr> </table> 
}