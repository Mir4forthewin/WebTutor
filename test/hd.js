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
        
        let fullName =  person.lastName + ", " +  person.firstName;

        document.getElementById('submitOk').innerHTML = "Data has been Submitted";
        document.getElementById('fullName').innerHTML = fullName;

        person.cellphoneNumber
    }



    var integer = 7;
    var boolean = true;
    var boolean = false;

    var string = "this is string";
    var string2 = 'this is string';

    let text = "the big bad wolf  jump over " + 
    "the lazy dog the big bad wolf  jump over " + 
    "the lazy dogthe big bad wolf  jump over the lazy dogthe big bad wolf " +
    "  jump over the lazy dogthe big bad wolf  jump over the lazy dogthe " + 
    "big bad wolf  jump over the lazy dogthe big bad wolf " +
      "jump over the lazy dogthe big bad wolf  jump over the lazy dog";


      let x = "John";
      let y = new String("John");


    var nameOfSky = "Zky 'Dominic' Galford";

    var lengthOfString = nameOfSky.length;




    var person = {
        firstName: "", 
        lastName: "", 
        address: "", 
        cellphoneNumber: ""}

        function testingObject()
{
    let anotherPerson = Person;
    let anotherPersonAgain = Person;

    anotherPerson.firstName = "tim";
    anotherPerson.lastName = "Tan";

    anotherPersonAgain.firstName = "girlie";
    anotherPersonAgain.lastName = "Co";
    let stringVariable = "this is a string and more";

    let lengthOfstring =  stringVariable.length;
}

//string reference type
//object refernce type

//intger primitive
//boolean primitive



