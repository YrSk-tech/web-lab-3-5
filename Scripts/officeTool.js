export class OfficeTool {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

const officeToolTemplate = ({ id, name, description }) =>
    `<div class="main-section__products--product" id="${id}">
     <img src="Assets/Product_Image.svg" alt="Product image">
     <h2 class="product-name">${name}</h2>
     <p class='product-description'>${description}</p>
     <div class='product-buttons'>
         <a href="edit.html?id=${id}" class="product-buttons--edit" id="edit-button">Edit</a>
         <a href="delete.html?id=${id}" class="product-buttons--remove" id="remove-button">Remove</a>
     </div>
 </div>`

export const addOfficeTool = ({ id, name, description }) => {
    let officeToolContainer = document.getElementById('main-section__products');
    officeToolContainer.insertAdjacentHTML('beforeend', officeToolTemplate({ id, name, description }));
}