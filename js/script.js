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