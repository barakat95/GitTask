let itemInput = document.getElementById('itemInput');
let addItemBtn = document.getElementById('addItemBtn');
let itemRow = document.getElementById('itemRow');
let itemList = [];

function addItem() {
    let item = {
        name: itemInput.value
    };
    itemList.push(item);
    displayItem();
    clearItemForm();
}
addItemBtn.addEventListener('click', () => {
    addItem();
})

function displayItem() {
    let cartoona = '';
    for (let i = 0; i < itemList.length; i++) {
        cartoona +=
            `
                    <li class="form-control text-left position-relative">
                        ${itemList[i].name}
                        <button class="btn btn-danger position-absolute" onclick="deleteItem(${i})">X</button>
                    </li>
                    `
    }
    itemRow.innerHTML = cartoona;
}

function deleteItem(index) {
    itemList.splice(index, 1);
    displayItem();
}

function clearItemForm() {
    itemInput.value = '';
}


// code 2 is here
//----------------- Section Two -----------------// 
let audio = document.getElementById('mySound');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
$("#hustlin").mouseenter(function () {
    let x = setInterval(() => {
        $(".q2").css('background-color', getRandomColor);
    }, 500);
    audio.play();
    $("#hustlin").mouseleave(() => {
        clearInterval(x);
        $(".q2").css('background-color', 'transparent');
    })
});
$("#hustlin").mouseleave(function () {
    audio.pause();
});


/* start code of Q3 */

var countDownDate = new Date("decem, 2020 1:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time4").innerHTML =  seconds  +  `<div>second</div>` ;
  document.getElementById("time3").innerHTML =  minutes  +  `<div>minutes</div>`;
  document.getElementById("time2").innerHTML =  hours  +  `<div>hours </div>`;
  document.getElementById("time1").innerHTML =  days  +  `<div>days</div>` ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time4").innerHTML = "EXPIRED";
    document.getElementById("time3").innerHTML = "EXPIRED";
    document.getElementById("time2").innerHTML = "EXPIRED";
    document.getElementById("time1").innerHTML = "EXPIRED";
  }
}, 1000);
/* End code of Q3 */
//Code Q5

let nameInput=document.getElementById("nameInput");
let emailInput=document.getElementById("emailInput");
let phoneInput=document.getElementById("phoneInput");
let alertMassegeName=document.getElementById("alertMassegeName");
let alertMassegeEmail=document.getElementById("alertMassegeEmail");
let alertMassegeNumber=document.getElementById("alertMassegeNumber");
nameInput.addEventListener("blur",testName);
emailInput.addEventListener("blur",testEmail);
phoneInput.addEventListener("blur",testNumber);
function testName(){
    var regex=/^[A-Z][a-z]{2,8}$/;
    if(regex.test(nameInput.value)==true){
        nameInput.classList.add(`is-valid`);
        nameInput.classList.remove(`is-invalid`);
        alertMassegeName.classList.replace(`d-block`,'d-none');
    }
    else{
        nameInput.classList.add(`is-invalid`);
        nameInput.classList.remove(`is-valid`);
        alertMassegeName.classList.replace(`d-none`,'d-block');

    } 
}

function testEmail(){
    var regex=/^(\w{4,8})\s@gmail.com$/;
    if(regex.test(  emailInput.value)==true){
        emailInput.classList.add(`is-valid`);
        emailInput.classList.remove(`is-invalid`);
        alertMassegeEmail.classList.replace(`d-block`,'d-none');
    }else{
        emailInput.classList.add(`is-invalid`);
        emailInput.classList.remove(`is-valid`);
        alertMassegeEmail.classList.replace(`d-none`,'d-block');

    } 

}
// end  code Q4

// ------------------- Section 4 ---------------------//
let red = $('.red');
let green = $('.green');
let blue = $('.blue');

red.mouseenter(() => {
    $('.q4').css('background-color', '#ff0000');
})
red.mouseleave(() => {
    $('.q4').css('background-color', 'transparent');
})
green.mouseenter(() => {
    $('.q4').css('background-color', '#00ff00');
})
green.mouseleave(() => {
    $('.q4').css('background-color', 'transparent');
})
blue.mouseenter(() => {
    $('.q4').css('background-color', '#0000ff');
})
blue.mouseleave(() => {
    $('.q4').css('background-color', 'transparent');
})
