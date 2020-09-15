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
