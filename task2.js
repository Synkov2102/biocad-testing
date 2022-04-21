let data = [{ "name": "Mikky", "type": "dog", "age": 3 }, { "name": "Neon", "type": "cat", "age": 0.5 }];

const addButton = document.getElementById('addButton');
const changeButton = document.getElementById('changeButton');
const deleteButton = document.getElementById('deleteButton');

let table = document.createElement('table');
let tableHead = document.createElement('thead');
let tableBody = document.createElement('tbody');

table.appendChild(tableHead);
table.appendChild(tableBody);

// Добавим таблицу
document.getElementById('body').appendChild(table);

// Создадим заголовочную строку
let headRow = document.createElement('tr');
let headingName = document.createElement('th');
headingName.innerHTML = "Name";
let headingType = document.createElement('th');
headingType.innerHTML = "Type";
let headingAge = document.createElement('th');
headingAge.innerHTML = "Age";

headRow.appendChild(headingName);
headRow.appendChild(headingType);
headRow.appendChild(headingAge);
tableHead.appendChild(headRow);


// Функция для очистки данных таблицы
function deleteTable() {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

// Функция для добавления данных в таблицу
function addRow() {
    let newRow = prompt('Введите строку в формате name,type,age', 'Eugeny,human,20').split(',');
    data.push({ name: newRow[0], type: newRow[1], age: newRow[2] })
    rerenderTable(data);
}

// Функция для изменения данных в таблице
function changeRow() {
    let rowNumber = prompt('Введите номер строки для изменения (отсчет от 0)', 0);
    if(rowNumber==null){
        return
    }
    while (rowNumber >= data.length){
        rowNumber = prompt('Введите СУЩЕСТВУЮЩИЙ номер строки для изменения (отсчет от 0)', 0);
    }
    let rowInfo = data[rowNumber]
    let rowNewInfo = prompt('Введите изменения в формате name,type,age', `${rowInfo.name},${rowInfo.type},${rowInfo.age}`).split(',');
    data[rowNumber] = { name: rowNewInfo[0], type: rowNewInfo[1], age: rowNewInfo[2] };
    rerenderTable(data);
}

// Функция для удаления данных в таблице
function deleteRow() {
    let rowNumber = prompt('Введите номер строки для удаления (отсчет от 0)', 0);
    if(rowNumber==null){
        return
    }
    while (rowNumber >= data.length){
        rowNumber = prompt('Введите СУЩЕСТВУЮЩИЙ номер строки для удаления (отсчет от 0)', 0);
    }
    data.splice(rowNumber,1); 
    rerenderTable(data);
}

//Функция для ререндера данных в таблице
function rerenderTable(arrInfo) {
    deleteTable() 
    arrInfo.forEach((rowInfo, index) => {
        let row = document.createElement('tr');
        row.id = `row-${index}`;
        let rowName = document.createElement('td');
        rowName.innerHTML = rowInfo.name;
        let rowType = document.createElement('td');
        rowType.innerHTML = rowInfo.type;
        let rowAge = document.createElement('td');
        rowAge.innerHTML = String(rowInfo.age);

        row.appendChild(rowName);
        row.appendChild(rowType);
        row.appendChild(rowAge);

        tableBody.appendChild(row);
    })
}

rerenderTable(data)

addButton.addEventListener('click', addRow);
changeButton.addEventListener('click', changeRow);
deleteButton.addEventListener('click', deleteRow);



