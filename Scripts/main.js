import {
    addOfficeTool
} from './officeTool.js';

import {
    getAllOfficeTool
} from './crud.js';

const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');

const sortButton = document.getElementById('sort-button');
const countButton = document.getElementById('count-button');

let officeToolList = [];

function update(list) {
    let officeToolContainer = document.getElementById('main-section__products');
    officeToolContainer.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        let id = list[i].id;
        let name = list[i].name;
        let description = list[i].description;
        addOfficeTool({ id, name, description });
    }
}

export const fetchAllOfficeTool = async() => {
    const allOfficeTool = await getAllOfficeTool();

    officeToolList = allOfficeTool;

    update(officeToolList);
};

//non crud content
countButton.addEventListener('click', (event) => {
    event.preventDefault();

    let totalPrice = 0

    for (let i = 0; i < officeToolList.length; i++) {
        totalPrice += officeToolList[i].price;
    }

    document.getElementById('total-price').innerText = '$' + totalPrice;
})

sortButton.addEventListener('click', (event) => {
    event.preventDefault();

    sortButton.classList.toggle('active');
    document.getElementById('sort-button--element').classList.toggle('active');

    officeToolList.sort((a, b) => b.price - a.price);
    update(officeToolList);
})

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    let request = document.getElementById("search-bar").value;
    let pattern = new RegExp(request);
    let searchedOfficeTool = officeToolList.filter(officeTool => pattern.test(officeTool.name));
    update(searchedOfficeTool);
})

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("search-bar").value = '';
})

//main
fetchAllOfficeTool();