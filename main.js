//  stringCellCodeNum2 - string containing all barcodes of the Main cell "2" (one barcode contains 8 numbers);
const stringCellCodeNum2 = '30061965300620163006206130062115300621603006221430062269300623133006236830062412300624673006197230062023300620783006212230062177300622213006227630062320300623753006242930062474300619893006203030062085300621393006218430062238300622833006233730062382300624363006248130061996300620473006209230062146300621913006224530062290300623443006239930062443300624983006200930062054300621083006215330062207300622523006230630062351300624053006245030062504';
const cellCodeNum2 = [];

let startIndex = 0;
let endIndex = 8;

// this cycle goes through the string collecting the barcode of the Main cell "2" into an array cellCodeNum2
for (let i = 0; (stringCellCodeNum2.slice(startIndex, endIndex)) !== ''; i++) {
    cellCodeNum2.push(stringCellCodeNum2.slice(startIndex, endIndex));
    startIndex += 8;
    endIndex += 8;
}

const nameCellNum2 = [];
const firstNameCell = 'm2';

// this cycle generates all the names of the Main cell "2" and writes them to an array nameCellNum2
for (let i = 1; i <= 5; i++) {
    let thirdNameCell = String(i);
    for (let j = 1; j <= 11; j++) {
        let secondNameCell = String(j);
        let fullNameCell = firstNameCell + secondNameCell + thirdNameCell;
        nameCellNum2.push(fullNameCell);
    }
}

const sticker = {};         // object in which all cell names with their barcodes will be written

// this cycle iterates through the array cellCodeNum2 containing all the barcodes of the Main cell "2",
// assigns names to them and writes to the object the name of the cell with its barcode
for (let i = 0; i < cellCodeNum2.length; i++) {
    sticker[nameCellNum2[i]] = cellCodeNum2[i];
}

//  stringCellCodeNum345678 - string containing all the barcodes of the Main cell "4, 5, 6, 7, 8"
//  (one barcode contains 8 numbers);
const stringCellCodeNum45678 = '300626653006271930062764300626723006272630062771300626893006273330062788300626963006274030062795300627023006275730062801300628183006286330062917300628253006287030062924300628323006288730062931300628493006289430062948300628563006290030062955300629623006301330063068300629793006302030063075300629863006303730063082300629933006304430063099300630063006305130063105300631123006316730063211300631293006317430063228300631363006318130063235300631433006319830063242300631503006320430063259300632663006331030063365300632733006332730063372300632803006333430063389300632973006334130063396300633033006335830063402';
const cellCodeNum45678 = [];

startIndex = 0;
endIndex = 8;

// this cycle goes through the string collecting the barcode of the Main cell "4, 5, 6, 7, 8"
// into an array cellCodeNum45678
for (let i = 0; (stringCellCodeNum45678.slice(startIndex, endIndex)) !== ''; i++) {
    cellCodeNum45678.push(stringCellCodeNum45678.slice(startIndex, endIndex));
    startIndex += 8;
    endIndex += 8;
}

const nameCellNum45678 = [];

// this cycle generates all the names of the Main cell "4, 5, 6, 7, 8" and writes them to an array nameCellNum2
for (let i = 4; i <= 8; i++) {
    let firstNameCell ='m' + String(i);
    for (let j = 1; j <= 5; j++) {
        let thirdNameCell = String(j);
        for (let k = 1; k <= 3; k++) {
            let secondNameCell = String(k);
            let fullNameCell = firstNameCell + secondNameCell + thirdNameCell;
            nameCellNum45678.push(fullNameCell);
        }
    }
}

// this cycle iterates through the array nameCellNum45678 containing all the barcodes of the Main cell "4, 5, 6, 7, 8",
// assigns names to them and writes to the object the name of the cell with its barcode
for (let i = 0; i < nameCellNum45678.length; i++) {
    sticker[nameCellNum45678[i]] = cellCodeNum45678[i];
}

//  stringCellCodeNum9 - string containing all the barcodes of the Main cell "9" (one barcode contains 8 numbers);
const stringCellCodeNum9 = '3006341930063464300635183006356330063426300634713006352530063570300634333006348830063532300635873006344030063495300635493006359430063457300635013006355630063600';
const cellCodeNum9 = [];

startIndex = 0;
endIndex = 8;

// this cycle goes through the string collecting the barcode of the Main cell "9" into an array cellCodeNum9
for (let i = 0; (stringCellCodeNum9.slice(startIndex, endIndex)) !== ''; i++) {
    cellCodeNum9.push(stringCellCodeNum9.slice(startIndex, endIndex));
    startIndex += 8;
    endIndex += 8;
}

const nameCellNum9 = [];
const firstNameCell9 = 'm9';

// this cycle generates all the names of the Main cell "9" and writes them to an array nameCellNum9
for (let i = 1; i <= 5; i++) {
    let thirdNameCell = String(i);
    for (let j = 1; j <= 4; j++) {
        let secondNameCell = String(j);
        let fullNameCell = firstNameCell9 + secondNameCell + thirdNameCell;
        nameCellNum9.push(fullNameCell);
    }
}

// this cycle goes through the array cellCodeNum9 containing all the barcodes of the Main cell "9",
// assigns names to them and writes to the object the name of the cell with its barcode
for (let i = 0; i < cellCodeNum9.length; i++) {
    sticker[nameCellNum9[i]] = cellCodeNum9[i];
}

// stringCellCodeBox - string containing all the barcodes of the "Box" cell (one barcode contains 8 numbers);
const stringCellCodeBox = '30068216300682233006823030068247300682543006826130068278300682853006829230068308300683153006832230068339300683463006835330068360';
const cellCodeBox = [];

startIndex = 0;
endIndex = 8;

// this cycle goes through the line collecting the barcode of the "Box" cell into an array cellCodeNumBox
for (let i = 0; (stringCellCodeBox.slice(startIndex, endIndex)) !== ''; i++) {
    cellCodeBox.push(stringCellCodeBox.slice(startIndex, endIndex));
    startIndex += 8;
    endIndex += 8;
}

const nameCellBox = [];
const firstNameCellBox = 'b11';

// this cycle generates all cell names "Box" and writes them to an array nameCellBox
for (let i = 1; i <= 16; i++) {
    let fullNameCell = firstNameCellBox + String(i);
    nameCellBox.push(fullNameCell);
}

// this cycle iterates through the array cellCodeBox containing all the barcode of the cell "Box",
// assigns names to them and writes to the object the name of the cell with its barcode
for (let i = 0; i < cellCodeBox.length; i++) {
    sticker[nameCellBox[i]] = cellCodeBox[i];
}

//  stringCellCodeNum2 - string containing all the barcodes of the Main cell "3" (one barcode contains 8 numbers);
const stringCellCodeNum3 = '300625113006256630062610300625353006258030062634300625423006259730062641300625593006260330062658';
const cellCodeNum3 = [];

startIndex = 0;
endIndex = 8;

// this cycle goes through the line collecting the barcode of the Main cell "3" into an array cellCodeNum2
for (let i = 0; (stringCellCodeNum3.slice(startIndex, endIndex)) !== ''; i++) {
    cellCodeNum3.push(stringCellCodeNum3.slice(startIndex, endIndex));
    startIndex += 8;
    endIndex += 8;
}

const nameCellNum3 = [];
const firstNameCell3 = 'm3';

// this cycle generates all (except for the second shelf) the names of the main cell "3" and writes them
// to the array nameCellNum3
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        i += 1;
    }
    let thirdNameCell = String(i);
    for (let j = 1; j <= 3; j++) {
        let secondNameCell = String(j);
        let fullNameCell = firstNameCell3 + secondNameCell + thirdNameCell;
        nameCellNum3.push(fullNameCell);
    }
}

// this cycle iterates through the array cellCodeNum3 containing all the barcode of the Main cell "3",
// assigns names to them and writes to the object the name of the cell with its barcode
for (let i = 0; i < cellCodeNum3.length; i++) {
    sticker[nameCellNum3[i]] = cellCodeNum3[i];
}

// add remaining single cells
sticker['m332'] = '30062627';
sticker['b1118'] = '30068384';
sticker['m000'] = '30057579';
sticker['h112'] = '30068445';
sticker['h113'] = '30068452';
sticker['h114'] = '30068469';

// create button constants
const inputName = document.querySelector('.input-name')
const inputSubmit = document.querySelector('.submitName');
const buttonPrint = document.querySelector('.print');

// constants to control the error output block
const warningError = document.querySelector('#warning-error');
const warningHeading = document.createElement('h2');
warningHeading.textContent = 'Ошибка!';
const warningParagraph = document.createElement('p');
warningParagraph.textContent = 'Введено некоректное имя ячейки или же ячейка отсутствует в базе, попробуйте еще раз.';

// we focus on the data entry field for convenience and speed
inputName.focus();

// create constants to control the rendering of sticker content
const nameCell = document.querySelector('.name-cell');
const firstNumberCell = document.querySelector('.first-number-cell');
const secondNumberCell = document.querySelector('.second-number-cell');
const thirdNumberCell = document.querySelector('.third-number-cell');
const imgCode = document.querySelector('.img-code');

// create a function to validate user input and render the sticker or output an error
function checkInput() {
    let inputValue = inputName.value.toLowerCase();
    if(inputValue in sticker) {
        if(inputValue.slice(0, 1) === 'm') {
            nameCell.textContent = 'Осн';
            firstNumberCell.textContent = inputValue.slice(1, 2);
            if(inputValue.length === 5) {
                secondNumberCell.textContent = inputValue.slice(2, 4);
                thirdNumberCell.textContent = inputValue.slice(4);
            } else {
                secondNumberCell.textContent = inputValue.slice(2, 3);
                thirdNumberCell.textContent = inputValue.slice(3);
            }
            imgCode.src = `https://barcode.tec-it.com/barcode.ashx?data=${sticker[inputValue]}&code=Code25IL`;
            inputName.focus();
        }

        else if(inputValue.slice(0, 1) === 'b') {
            nameCell.textContent = 'Ящ.';
            firstNumberCell.textContent = inputValue.slice(1, 2);
            secondNumberCell.textContent = inputValue.slice(2, 3);
            thirdNumberCell.textContent = inputValue.slice(3);
            imgCode.src = `https://barcode.tec-it.com/barcode.ashx?data=${sticker[inputValue]}&code=Code25IL`;
            inputName.focus();
        }

        else {
            nameCell.textContent = 'Зал';
            firstNumberCell.textContent = inputValue.slice(1, 2);
            secondNumberCell.textContent = inputValue.slice(2, 3);
            thirdNumberCell.textContent = inputValue.slice(3);
            imgCode.src = `https://barcode.tec-it.com/barcode.ashx?data=${sticker[inputValue]}&code=Code25IL`;
            inputName.focus();
        }

        warningError.removeAttribute('class');
        warningError.removeChild(warningHeading);
        warningError.removeChild(warningParagraph);
    }

    else {
        function slowWarning() {
            warningError.setAttribute('class', 'warning-error');
            warningError.appendChild(warningHeading);
            warningError.appendChild(warningParagraph);
            inputName.focus();
        }

        if (warningError.getAttribute('class') === 'warning-error') {
            warningError.removeAttribute('class');
            warningError.removeChild(warningHeading);
            warningError.removeChild(warningParagraph);
            window.setTimeout(slowWarning, 150);
        } else {
            window.setTimeout(slowWarning, 150);
        }
    }

}

inputSubmit.addEventListener('click', checkInput);
inputName.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        checkInput()
    }
});
buttonPrint.addEventListener('click', () => { window.print(); inputName.focus(); });