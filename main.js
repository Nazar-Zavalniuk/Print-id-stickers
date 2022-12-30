const barcodesString = {
    barcodesRackNumber2: '30061965300620163006206130062115300621603006221430062269300623133006236830062412300624673006197230062023300620783006212230062177300622213006227630062320300623753006242930062474300619893006203030062085300621393006218430062238300622833006233730062382300624363006248130061996300620473006209230062146300621913006224530062290300623443006239930062443300624983006200930062054300621083006215330062207300622523006230630062351300624053006245030062504',
    barcodesRackNumber3: '300625113006256630062610300625353006258030062634300625423006259730062641300625593006260330062658',
    barcodesRackNumber4: '300626653006271930062764300626723006272630062771300626893006273330062788300626963006274030062795300627023006275730062801',
    barcodesRackNumber5: '300628183006286330062917300628253006287030062924300628323006288730062931300628493006289430062948300628563006290030062955',
    barcodesRackNumber6: '300629623006301330063068300629793006302030063075300629863006303730063082300629933006304430063099300630063006305130063105',
    barcodesRackNumber7: '300631123006316730063211300631293006317430063228300631363006318130063235300631433006319830063242300631503006320430063259',
    barcodesRackNumber8: '300632663006331030063365300632733006332730063372300632803006333430063389300632973006334130063396300633033006335830063402',
    barcodesRackNumber9: '3006341930063464300635183006356330063426300634713006352530063570300634333006348830063532300635873006344030063495300635493006359430063457300635013006355630063600',
    barcodesRackNameBox: '30068216300682233006823030068247300682543006826130068278300682853006829230068308300683153006832230068339300683463006835330068360',
    barcodesRackNameHall: '300684453006845230068469'
}
const arraysWithBarcodes = [];

function fillArraysWithBarcodes() {

    function createArrayWithBarcodes (stringWithBarcodes, arrayWithBarcodes) {
        let startIndex = 0;
        let endIndex = 8;
        let barcodeCell = stringWithBarcodes.slice(startIndex, endIndex);

        while (barcodeCell !== '') {
            arrayWithBarcodes.push(barcodeCell);
            startIndex += 8;
            endIndex += 8;
            barcodeCell = stringWithBarcodes.slice(startIndex, endIndex);
        }
    }

    for (let prop in barcodesString) {
        let stringWithBarcodes = barcodesString[prop];
        const arrayWithBarcodes = [];

        createArrayWithBarcodes(stringWithBarcodes, arrayWithBarcodes);
        arraysWithBarcodes.push(arrayWithBarcodes);
    }

}

fillArraysWithBarcodes();

const rackNames = ['m2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'b1', 'h1'];
const arraysWithCellNames = [];

function fillArraysWithCellNames() {

    function createArrayWithCellNames (rackName, startLength, startHeight, rackLength, rackHeight) {
        const cellNames = [];

        for (; startHeight <= rackHeight; startLength++) {
            if (startLength > rackLength) {
                startLength = 1;
                startHeight += 1;
            }
            if (startHeight > rackHeight) break;

            cellNames.push(rackName + startLength + startHeight);
        }

        arraysWithCellNames.push(cellNames);
    }

    for (let rackName of rackNames) {
        switch (true) {
            case (rackName === 'm2'):
                createArrayWithCellNames(rackName, 1, 1, 11, 5);
                break;
            case (rackName === 'm3'):
                // Since there are no barcodes for the cells of the second shelf for this rack,
                // we create an array with names starting from the third shelf,
                // after which we manually add the names of the cells of the first shelf.

                createArrayWithCellNames(rackName, 1, 3, 3, 5);
                arraysWithCellNames[1].unshift('m311', 'm321', 'm331');
                break;
            case (rackName === 'm9'):
                createArrayWithCellNames(rackName, 1, 1, 4, 5);
                break;
            case (rackName === 'b1'):
                createArrayWithCellNames(rackName, 1, 1, 1, 16);
                break;
            case (rackName === 'h1'):
                // Since there is no barcode for the first shelf,
                // we create an array with names starting from the second shelf.

                createArrayWithCellNames(rackName, 1, 2, 1, 4);
                break;
            default:
                createArrayWithCellNames(rackName, 1, 1, 3, 5);
                break;
        }
    }

}

fillArraysWithCellNames();

const sticker = {};

function fillSticker() {
    let indexArray = 0;
    const lastIndexArray = arraysWithBarcodes.length - 1;

    let arrayWithBarcodes = arraysWithBarcodes[indexArray];
    let arrayWithCellNames = arraysWithCellNames[indexArray];

    let indexItemArray = 0;
    let indexLastItemArray = arrayWithBarcodes.length - 1;


    while (indexArray <= lastIndexArray) {
        if (indexItemArray > indexLastItemArray) {
            indexArray += 1;
            indexItemArray = 0;

            if (indexArray > lastIndexArray) break;

            arrayWithBarcodes = arraysWithBarcodes[indexArray];
            arrayWithCellNames = arraysWithCellNames[indexArray];
            indexLastItemArray = arrayWithBarcodes.length - 1;
        }

        sticker[arrayWithCellNames[indexItemArray]] = arrayWithBarcodes[indexItemArray];
        indexItemArray += 1;
    }

    // add remaining single cells
    sticker['m332'] = '30062627';
    sticker['b1118'] = '30068384';
    sticker['m000'] = '30057579';

}

fillSticker();

const userInputEvents = {
    inputName: document.querySelector('.input-name'),
    submitCellName: document.querySelector('.submitName'),
    print: document.querySelector('.print')
}

const render = {
    warningError: document.querySelector('#warning-error'),
    warningHeading: document.createElement('h2'),
    warningParagraph: document.createElement('p'),
    textHeading: 'Ошибка!',
    textParagraph: 'Введено некоректное имя ячейки или же ячейка отсутствует в базе, попробуйте еще раз.',
    cellName: document.querySelector('.name-cell'),
    firstNumberCell: document.querySelector('.first-number-cell'),
    secondNumberCell: document.querySelector('.second-number-cell'),
    thirdNumberCell: document.querySelector('.third-number-cell'),
    imgCode: document.querySelector('.img-code')
}

userInputEvents['inputName'].focus();
render['warningHeading'].textContent = render['textHeading'];
render['warningParagraph'].textContent = render['textParagraph'];

function checkInput() {
    let inputValue = userInputEvents['inputName'].value.toLowerCase();

    if (inputValue in sticker) {
        let cellName;
        let firstNumberCell = inputValue.slice(1, 2);
        let secondNumberCell = inputValue.slice(2, 3);
        let thirdNumberCell = inputValue.slice(3);
        let imgCode = `https://barcode.tec-it.com/barcode.ashx?data=${sticker[inputValue]}&code=Code25IL`;

        function renderSticker(cellName) {
            render['cellName'].textContent = cellName;
            render['firstNumberCell'].textContent = firstNumberCell;
            render['secondNumberCell'].textContent = secondNumberCell;
            render['thirdNumberCell'].textContent = thirdNumberCell;
            render['imgCode'].src = imgCode;
            userInputEvents['inputName'].focus();
        }

        let cellNameLength = inputValue.length;

        function checkLengthNameCell() {
            if (cellNameLength === 5) {
                secondNumberCell = inputValue.slice(2, 4);
                thirdNumberCell = inputValue.slice(4);
            }
        }

        let firstLetter = inputValue.slice(0, 1);

        switch (true) {
            case (firstLetter === 'm'):
                cellName = 'Осн';
                checkLengthNameCell();
                renderSticker(cellName);
                break;
            case (firstLetter === 'b'):
                cellName = 'Ящ.';
                renderSticker(cellName);
                break;
            default:
                cellName = 'Зал';
                renderSticker(cellName);
        }

        function removeWarningError() {
            render['warningError'].removeAttribute('class');
            render['warningError'].removeChild(render['warningHeading']);
            render['warningError'].removeChild(render['warningParagraph']);
        }

        removeWarningError();

    } else {
        function showWarning() {
            render['warningError'].setAttribute('class', 'warning-error');
            render['warningError'].appendChild(render['warningHeading']);
            render['warningError'].appendChild(render['warningParagraph']);
            userInputEvents['inputName'].focus();
        }
        showWarning();

        function scale() {
            render['warningError'].style.transition = 'transform 0.8s ease 0s';
            render['warningError'].style.transform = 'scale(1)';
        }

        if (render['warningError'].getAttribute('class') === 'warning-error') {
            render['warningError'].style.transform = 'scale(0.1)';
            render['warningError'].style.transition = 'none';
            window.setTimeout(scale, 150);
        } else {
            showWarning();
            scale();
        }
    }


}

userInputEvents['submitCellName'].addEventListener('click', checkInput);
userInputEvents['inputName'].addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        checkInput()
    }
});
userInputEvents['print'].addEventListener('click', () => {
    window.print();
    userInputEvents['inputName'].focus();
});

