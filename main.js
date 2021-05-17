// Blocks
const TOP_BLOCK = document.querySelector('.top');
const EDIT_BLOCK = document.querySelector('.edit-block');
const STYLE_BLOCK = document.querySelector('.style-block');
const TEXT_COLOR_BLOCK = document.querySelector('.textColorBlock');
const BACK_COLOR_BLOCK = document.querySelector('.backgroundColorBlock');
const MIDDLE_BLOCK = document.querySelector('.middle');
const BOTTOM_BLOCK = document.querySelector('.bottom');
const CHOOSE_BLOCK = document.querySelector('.chooseBlock');
const TABLE_CREATE_BLOCK = document.querySelector('.tableCreateBlock');
const FORM_SIZE_BLOCK = document.querySelector('.formSizeBlock');
const FONT_FAMILY_BLOCK = document.querySelector('.fontFamilyBlock');
const ENTRANCE_BLOCK = document.querySelector('.entranceBlock');
const LIST_CREATE_BLOCK = document.querySelector('.listCreatorBlock');

// Buttons
const EDIT_BTN = document.querySelector('.edit');
const STYLE_BTN = document.querySelector('.style');
const ADD_BTN = document.querySelector('.add');
const SAVE_BTN = document.querySelector('.save');
const TEXTCOLOR_BTN = document.querySelector('.textColor');
const BACKGROUNDCOLOR_BTN = document.querySelector('.backgroundColor');
const TABLE_BTN = document.querySelector('.table');
const LIST_BTN = document.querySelector('.list');
const CREATE_TABLE_BTN = document.querySelector('.tableBtn');
const CREATE_LIST_BTN = document.querySelector('.createList');

const LI = document.querySelector('.LI');
const AREA = document.querySelector('.area');
const LIST_MARK = document.querySelector('.listMark');
const LIST_VALUE = document.querySelectorAll('.listValue');
let font = document.forms.font;

// table input
let TrInput = document.querySelector('.TrInput');
let TdInput = document.querySelector('.TdInput');
let widthInput = document.querySelector('.widthInput');
let heightInput = document.querySelector('.heightInput');
let borderWidthInput = document.querySelector('.borderWidthInput');
let borderTypeInput = document.querySelector('.borderTypeInput');
let borderColorInput = document.querySelector('.borderColorInput');

EDIT_BTN.addEventListener('click', function () {
    EDIT_BLOCK.style.display = 'block';
    STYLE_BLOCK.style.display = 'none';
    AREA.value = TOP_BLOCK.innerHTML;
})
SAVE_BTN.addEventListener('click', () => {
    EDIT_BLOCK.style.display = 'none';
    TOP_BLOCK.innerHTML = AREA.value;
})
STYLE_BTN.addEventListener('click', function () {
    EDIT_BLOCK.style.display = 'none';
    STYLE_BLOCK.style.display = 'block';
})
FORM_SIZE_BLOCK.addEventListener('click', (event) => {
    if (event.target.name === 'size') {
        TOP_BLOCK.style.fontSize = event.target.value;
    }
})
FONT_FAMILY_BLOCK.form - FONT_FAMILY_BLOCK.addEventListener('click', function (event) {
    TOP_BLOCK.style.fontFamily = event.target.value;
})
TEXTCOLOR_BTN.addEventListener('click', function () {
    TEXT_COLOR_BLOCK.style.display = 'flex';
})
BACKGROUNDCOLOR_BTN.addEventListener('click', function () {
    BACK_COLOR_BLOCK.style.display = 'flex';
})
TEXT_COLOR_BLOCK.addEventListener('click', function (event) {
    TOP_BLOCK.style.color = event.target.classList[1];
    TEXT_COLOR_BLOCK.style.display = 'none';
})
BACK_COLOR_BLOCK.addEventListener('click', function (event) {
    TOP_BLOCK.style.backgroundColor = event.target.classList[1];
    BACK_COLOR_BLOCK.style.display = 'none';
})
font.addEventListener('click', function () {
    if (font.bold.checked) {
        TOP_BLOCK.style.fontWeight = 'bold';
    } else if (font.bold.checked === false) {
        TOP_BLOCK.style.fontWeight = 'normal';
    }
})
font.addEventListener('click', function () {
    if (font.cursive.checked) {
        TOP_BLOCK.style.fontStyle = 'italic';
    } else if (font.cursive.checked === false) {
        TOP_BLOCK.style.fontStyle = 'normal';
    }
})
ADD_BTN.addEventListener('click', function () {
    ENTRANCE_BLOCK.style.display = 'none';
    CHOOSE_BLOCK.style.display = 'block';
    TABLE_CREATE_BLOCK.style.display = 'none';
    LIST_CREATE_BLOCK.style.display = 'none';
})
TABLE_BTN.addEventListener('click', function () {
    TABLE_CREATE_BLOCK.style.display = 'block';
    LIST_CREATE_BLOCK.style.display = 'none';
})
LIST_BTN.addEventListener('click', function () {
    LIST_CREATE_BLOCK.style.display = 'block';
    TABLE_CREATE_BLOCK.style.display = 'none';
})
CREATE_LIST_BTN.addEventListener('click', function () {
    CHOOSE_BLOCK.style.display = 'none';
    ENTRANCE_BLOCK.style.display = 'block';
    createList();
})
function createList() {
    let type = LIST_MARK.value;
    let countLi = LI.value;
    let str = `<ul style="list-style-type:${type};">`
    for (let i = 1; i <= countLi; i++) {
        str += '<li>List</li>';
    }
    str += '</ul>';
    AREA.value += str;
}
CREATE_TABLE_BTN.addEventListener('click', function () {
    ENTRANCE_BLOCK.style.display = 'block';
    CHOOSE_BLOCK.style.display = 'none';
    createTable()
})
function createTable() {
    let w = borderWidthInput.value;
    let s = borderTypeInput.value;
    let c = borderColorInput.value;
    let wi = widthInput.value;
    let hi = heightInput.value;
    let str = '<table>';
    for (let i = 0; i <= TrInput.value; i++) {
        str += '<tr>'
        for (let i = 0; i <= TdInput.value; i++) {
            str += `<td style="width:${wi}px;height:${hi}px;border:${w}px ${s} ${c}">TD</td>`;
        }
        str += '</tr>';
    }
    str += '</table>';
    AREA.value += str;
}
