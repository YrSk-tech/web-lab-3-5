import {
    deleteOfficeTool,
    getUrlVars
} from './crud.js'

const deleteButton = document.getElementById('delete-confirmation');

const id = getUrlVars()["id"];

deleteButton.addEventListener('click', (event) => {
    event.preventDefault();

    deleteOfficeTool(id);
})