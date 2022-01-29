function addition(){
    let inputVal1 = document.getElementById("input1").value;
    let inputVal2 = document.getElementById("input2").value;
    let answer;

    answer = parseInt(inputVal1) + parseInt(inputVal2);

    document.getElementById('answer').innerHTML = answer;
}

function subtract(){
    let inputVal1 = document.getElementById("input1").value;
    let inputVal2 = document.getElementById("input2").value;
    let answer;

    answer = parseInt(inputVal1) - parseInt(inputVal2);

    document.getElementById('answer').innerHTML = answer;
}

function multiplication(){
    let inputVal1 = document.getElementById("input1").value;
    let inputVal2 = document.getElementById("input2").value;
    let answer;

    answer = parseInt(inputVal1) * parseInt(inputVal2);

    document.getElementById('answer').innerHTML = answer;
}

function division(){
    let inputVal1 = document.getElementById("input1").value;
    let inputVal2 = document.getElementById("input2").value;
    let answer;

    answer = parseInt(inputVal1) / parseInt(inputVal2);

    document.getElementById('answer').innerHTML = answer;
}