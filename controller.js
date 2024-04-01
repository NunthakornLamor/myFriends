window.onload = function () {
    randomFriends();
};


function randomFriends(){
    var maxRow = 9;
    var numberOfRow = Math.floor(Math.random() * maxRow) + 1;

    var form = document.getElementById("form");
    form.innerHTML = "";

    for(var i=0;i< numberOfRow;i++){
        var row = document.createElement("div");
        row.id = "friend"+i;
        row.className = "form-row appearAnimation";
        row.style.animationDelay = (i+1) * 0.1 + 's';

        row.innerHTML = (i + 1) + " : " + 
                        " Name <input type='text' id='textInput" + (i+1) + "' required>" +
                        " Age <input type='number' id='numberInput" + (i+1) + "' required>";
        
        form.appendChild(row);

    }

    document.getElementById("form-wrap").addEventListener("submit", function(event) {
        event.preventDefault();
    });

    

    var resultHeader = document.getElementById("result-header");
    var resultFooter = document.getElementById("result-footer");
    resultHeader.classList.remove("appearAnimation");
    resultFooter.classList.remove("appearAnimation");
    void resultHeader.offsetWidth;
    void resultFooter.offsetWidth;
    resultHeader.classList.add("appearAnimation");
    resultFooter.classList.add("appearAnimation");
}

function findMin(){

    if(!hasAllField()){
        alert("Please input all fields");
        return;
    }
    var form = document.getElementById("form");
    var inputs = form.querySelectorAll("input[type='number']");

    var min = Number.MAX_VALUE;
    var friendsWithMinAge = [];

    inputs.forEach( function(row) {
        var value = parseFloat(row.value);
        if(!isNaN(value)){
            if(value < min){
                friendsWithMinAge = [];
                friendsWithMinAge.push(row.previousElementSibling.value);
                min = value;

            }else if(value === min){
                friendsWithMinAge.push(row.previousElementSibling.value);
            }
        }
    })

    document.getElementById("result-header").innerHTML = "<h2>Minimum age: " + min  +"</h2>"
    document.getElementById("result-footer").innerHTML = "<h3>People with min age: " + friendsWithMinAge  +"</h3>"
}

function findMax(){

    if(!hasAllField()){
        alert("Please input all fields");
        return;
    }

    var form = document.getElementById("form");
    var inputs = form.querySelectorAll("input[type='number']");

    var max = Number.MIN_VALUE;
    var friendsWithMaxAge = [];

    inputs.forEach( function(row) {
        let value = parseFloat(row.value);
        if(!isNaN(value)){
            if(value > max){
                friendsWithMaxAge = [];
                friendsWithMaxAge.push(row.previousElementSibling.value);
                max = value;
            }else if(value === max){
                friendsWithMaxAge.push(row.previousElementSibling.value);
            }
        }
    })

    document.getElementById("result-header").innerHTML = "<h2>Maximum age: " + max  +"</h2>"
    document.getElementById("result-footer").innerHTML = "<h3>People with max age: " + friendsWithMaxAge  +"</h3>"


}

function sum(){

    if(!hasAllField()){
        alert("Please input all fields");
        return;
    }

    var form = document.getElementById("form");
    var inputs = form.querySelectorAll("input[type='number']");

    var total = 0;

    inputs.forEach( function(row) {
        let value = parseFloat(row.value);
        if(!isNaN(value)){
            total += value;
        }
    })

    document.getElementById("result-header").innerHTML = "<h2>Total Age: " + total  +"</h2>"
    document.getElementById("result-footer").innerHTML = "";


}

function average(){
    if(!hasAllField()){
        alert("Please input all fields");
        return;
    }
    var form = document.getElementById("form");
    var inputs = form.querySelectorAll("input[type='number']");
    console.log(inputs.length);

    var total = 0;
    var avg = 0;

    inputs.forEach( function(row) {
        let value = parseFloat(row.value);
        if(!isNaN(value)){
            total += value;
        }
    })

    avg = total/inputs.length;

    document.getElementById("result-header").innerHTML = "<h2>Average age: " + avg  +"</h2>";
    document.getElementById("result-footer").innerHTML = "";
}



function clearForm(){

    var form = document.getElementById("form");
    var inputs = form.querySelectorAll("input");

    inputs.forEach( function(row){
        row.value = "";
    })

}

function hasAllField(){
    var form = document.getElementById("form");
    var inputs = form.querySelectorAll("input");

    var result = true;

    inputs.forEach( function(row){
        if(row.value === ""){
            result = false;
            return;
        }
    })

    return result;
}

function clearPrompt(){
    alert("กรุณากด Double Click เพื่อทำการ clear ข้อมูล");
}