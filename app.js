const submit = document.querySelector("#submit")
const customer = document.querySelector("#customer-select")
const print = document.querySelector("#print-method")
const paperType = document.querySelector("#paper-type")
const grammageSelect = document.querySelector("#grammage")
const extent = document.querySelector("#extent")
const trimHeight = document.querySelector("#trim-height")
const trimWidth = document.querySelector("#trim-width")
const qty = document.querySelector("#qty")
const colourSelect = document.querySelector("#colourSelect")
const coverSelect = document.querySelector("#coverSelect")
const bindSelect = document.querySelector("#bindSelect")
const container = document.querySelector(".container")
const notes = document.querySelector("#notes")

const papers = {
    lithoPapers: ["TJ Woodfree White", [80, 90], "TJ Woodfree Cream", [80, 90], "TJ Preprint/Figaro", [80, 90, 100], "Enso Creamy", [60, 70],
        "Enso Novel", [70], "Munken Pure", [80], "PMB Matt", [90, 115], "Pavarotti Silk", [90], "Munken Print Cream", [70]],
    digitalPapers: ["Lets Go High", [80], "Lets Go Matt", [115], "Lets Go Silk", [90], "TJ Woodfree White", [80, 90],
        "TJ Woodfree Cream", [80], "Enso Creamy", [70], "Holmen Book Cream", [60], "Munken Pure", [80], "Amber Super Highway", [100]],
    IXSinglePapers: ["Essential Gloss", [115, 130], "Essential Silk", [115, 130, 150, 170], "TJ Woodfree White", [80, 90], "TJ Woodfree Cream", [80, 90], "TJ PrePrint", [80, 100], "Munken Print Cream", [70], "Precision Matt Blade", [90],],
    IXMixedPapers: []
}

let custNotes = ["No Customer Selected", "Add CUP Labels", "OUP 13kg Limit", "Faber- No Notes"]

const stock = {
    digital: {
        "Lets Go High": {
            "Vol": 13,
            "End": "Inaset INA001",
            80: {
                402: "DLGH02",
                480: "DLGH03",
                503: "DLGH04",
            }
        },
        "Lets Go Matt": {
            "Vol": 11,
            "End": "Inaset INA001",
            115: {
                402: "DLET119",
                455: "DLET115",
            }
        },
        "Lets Go Silk": {
            "Vol": 10,
            "End": "Inaset INA001",
            90: {
                402: "DLETS05",
                480: "DLETS02",
                503: "DLETS01"
            }
        },
        "TJ Woodfree White": {
            "Vol": 17.5,
            "End": "Munken Lynx LYN002",
            80: {
                480: "DTJ809",
                503: "DTJ812"
            },
            90: {
                503: "DTJ812"
            },
        },
        "TJ Woodfree Cream": {
            "Vol": 17.5,
            "End": "Munken Pure PUR003",
            80: {
                480: "DTJC06",
                503: "DTJC04"
            },
        },
        "Enso Creamy": {
            "Vol": 20,
            "End": "Munken Pure PUR003",
            70: {
                480: "DENC03",
                503: "DENC07"
            }
        },
        "Holmen Book Cream": {
            "Vol": 18,
            "End": "Munken Pure PUR003",
            60: {
                480: "DHB002",
                503: "DHB003"
            }
        },
        "Munken Pure": {
            "Vol": 13,
            "End": "Munken Pure PUR003",
            80: {
                402: "DPUR07",
                480: "DPUR08",
                503: "DPUR10"
            }
        },
        "Amber Super Highway": {
            "Vol": 12.5,
            "End": "Inaset INA001",
            100: {
                336: "DAMH101",
            }
        }
    },
    litho: {
        "Enso Creamy": {
            "Vol": 20,
            "End": "Munken Pure PUR003",
            60: {
                "816 x 1056": "ENCR05",
            },
            70: {
                "816 x 1080": "ENCR07",
                "888 x 1128": "ENCR04",
                "960 x 1272": "ENCR03",
            }
        },
        "TJ Woodfree White": {
            "Vol": 17.5,
            "End": "Munken Lynx LYN002",
            80: {
                "816 x 1080": "TJ007",
                "888 x 1128": "TJ002",
                "960 x 1272": "TJ005",
                "1018 x 1416": "TJ013",
            },
            90: {
                "888 x 1128": "TJ008",
                "960 x 1272": "TJ009",
                "1018 x 1416": "TJ024",
            }
        },
        "TJ Woodfree Cream": {
            "Vol": 17.5,
            "End": "Munken Pure PUR003",
            80: {
                "816 x 1080": "TJC007",
                "888 x 1128": "TJC002",
                "960 x 1272": "TJC003",
                "1018 x 1416": "TJC011"
            },
            90: {
                "888 x 1128": "TJC005",
                "960 x 1272": "TJC006",
                "1018 x 1416": "TJC016"
            }
        },
        "TJ Preprint/Figaro": {
            "Vol": 13,
            "End": "Inaset INA001",
            80: {
                "888 x 1128": "PRE001",
                "960 x 1272": "PRE010",
                "1018 x 1416": "PRE009",
                "1020 x 1212": "PRE008",
                "888 x 1212": "PRE005",
                "901 x 1140": "PRE004"
            },
            90: {
                "960 x 1272": "PRE010",
                "1018 x 1416": "PRE011",
            },
            100: {
                "888 x 1128": "PRE012",
                "960 x 1272": "PRE013",
                "1018 x 1416": "PRE014",
            }
        },
        "Enso Novel": {
            "Vol": 20,
            "End": "Munken Pure PUR003",
            70: {
                "888 x 1128": "ENN04",
                "960 x 1272": "ENN05",
            }
        },
        "Munken Print Cream": {
            "Vol": 15,
            "End": "Munken Pure PUR003",
            70: {
                "888 x 1128": "MPC003",
            }
        },
        "PMB Matt": {
            "Vol": 9.7,
            "End": "Inaset INA001",
            90: {
                "888 x 1128": "PMB025",
                "960 x 1272": "PMB005",
                "1018 x 1416": "PMB007",
                "1020 x 1212": "PMB038",
            },
            115: {
                "960 x 1272": "PMB016",
                "1018 x 1416": "PMB017",
                "898 x 1212": "PMB012"
            }
        },
        "Munken Pure": {
            "Vol": 13,
            "End": "Munken Pure PUR003",
            80: {
                "888 x 1128": "PUR019",
                "960 x 1272": "PUR016",
                "1020 x 1212": "PUR014"
            }
        },
        "Pavarotti Silk": {
            "Vol": 9,
            "End": "Unknown",
            90: {
                "1018 x 1416": "PAV003",
                "1020 x 1212": "PAV004"
            }
        }
    }
}

const greyBoardStock = {
    "1.9": {
        "204 x 125": "E19005",
        "222 x 134": "E19009",
        "216 x 144": "E190011",
        "234 x 148": "E190013",
        "235 x 152": "E190013 - Remove 1mm From Head Trim",
        "240 x 152": "E190014",
        "252 x 185": "E190017",
        "222 x 131": "E190018",
        "250 x 166": "E190019",
        "259 x 173": "E190020",
        "303 x 206": "E190028",
        "252 x 170": "S190020",
        "240 x 150": "S190070",
    },
    "2.5": {
        "222 x 134": "E250018",
        "240 x 152": "E250019",
    },
    "2.75": {
        "240 x 152": "E27506"
    }
}

//Chosen Customer//
let chosenCustomerIndex;
let chosenCustomer;
let customerOptions = ["none", "Cambridge", "Oxford", "Faber"]
customer.addEventListener("click", (e) => {
    chosenCustomerIndex = e.target.options.selectedIndex;
    chosenCustomer = customerOptions[chosenCustomerIndex];
})


updatePaper = () => {
    if (printMethod === "none") {
        let newOption = document.createElement("option")
        newOption.value = "Paper Type"
        newOption.innerHTML = "Paper Type"
        paperType.appendChild(newOption)
    }
    else if (printMethod === "litho") {
        for (let types of papers.lithoPapers) {
            if (papers.lithoPapers.indexOf(types) % 2 === 0) {
                let newOption = document.createElement("option")
                newOption.value = types
                newOption.innerHTML = types
                paperType.appendChild(newOption)
            }
        }
    }
    else if (printMethod === "digital") {
        for (let types of papers.digitalPapers) {
            if (papers.digitalPapers.indexOf(types) % 2 === 0) {
                let newOption = document.createElement("option")
                newOption.value = types
                newOption.innerHTML = types
                paperType.appendChild(newOption)
            }
        }
    }
    else if (printMethod === "IXSingle") {
        for (let types of papers.IXSinglePapers) {
            if (papers.IXSinglePapers.indexOf(types) % 2 === 0) {
                let newOption = document.createElement("option")
                newOption.value = types
                newOption.innerHTML = types
                paperType.appendChild(newOption)
            }
        }
    }
    else if (printMethod === "IXMixed") {
        for (let types of papers.IXMixedPapers) {
            if (papers.IXMixedPapers.indexOf(types) % 2 === 0) {
                let newOption = document.createElement("option")
                newOption.value = types
                newOption.innerHTML = types
                paperType.appendChild(newOption)
            }
        }
    }
}

updateGrammage = (gram) => {
    if (printMethod === "none") {
        let newOption = document.createElement("option")
        newOption.value = "Paper Grammage"
        newOption.innerHTML = "Paper Grammage"
        grammageSelect.appendChild(newOption)
    }
    else if (printMethod === "litho") {
        for (let item of papers.lithoPapers[gram]) {
            let newOption = document.createElement("option")
            newOption.value = item
            newOption.innerHTML = item
            grammageSelect.appendChild(newOption)
        }
    }
    else if (printMethod === "digital") {
        for (let item of papers.digitalPapers[gram]) {
            let newOption = document.createElement("option")
            newOption.value = item
            newOption.innerHTML = item
            grammageSelect.appendChild(newOption)
        }
    }
    else if (printMethod === "IXSingle") {
        for (let item of papers.IXSinglePapers[gram]) {
            let newOption = document.createElement("option")
            newOption.value = item
            newOption.innerHTML = item
            grammageSelect.appendChild(newOption)
        }
    }
    else if (printMethod === "IXMixed") {
        for (let item of papers.IXMixedPapers[gram]) {
            let newOption = document.createElement("option")
            newOption.value = item
            newOption.innerHTML = item
            grammageSelect.appendChild(newOption)
        }
    }
}

// Chosen Print Method //    
let chosenPrintIndex;
let printMethod;
let printOptions = ["none", "litho", "digital", "IXSingle", "IXMixed"]
print.addEventListener("click", (e) => {
    chosenPrintIndex = e.target.options.selectedIndex;
    printMethod = printOptions[chosenPrintIndex]
    paperType.innerHTML = ""
    grammageSelect.innerHTML = ""
    updatePaper()
})


//Choose Paper Type//
let chosenPaperIndex;
let chosenPaper;
let grammageIndex;
paperType.addEventListener("click", (e) => {
    chosenPaperIndex = e.target.options.selectedIndex
    chosenPaper = e.target.children[chosenPaperIndex].value
    grammageIndex = chosenPaperIndex * 2 + 1
    grammageSelect.innerHTML = ""
    updateGrammage(grammageIndex)
})

//Choose Grammage //
let chosenGrammageIndex;
let chosenGrammage;
grammageSelect.addEventListener("click", (e) => {
    chosenGrammageIndex = e.target.options.selectedIndex
    chosenGrammage = e.target.children[chosenGrammageIndex].value
})

//Enter Extent//
let totalExtent;
extent.addEventListener("change", (e) => {
    if (isNaN(e.target.value) || e.target.value == 0) {
        extent.style.borderColor = "red"
        extent.style.borderWidth = "0.4rem"
    }
    else {
        extent.style.borderColor = "none"
        extent.style.borderWidth = "0rem"
        totalExtent = e.target.value
    }
})

//Enter Trim Height//
let height;
trimHeight.addEventListener("change", (e) => {
    if (isNaN(e.target.value) || e.target.value == 0) {
        trimHeight.style.borderColor = "red"
        trimHeight.style.borderWidth = "0.4rem"
    }
    else {
        trimHeight.style.borderColor = "none"
        trimHeight.style.borderWidth = "0rem"
        height = e.target.value
    }
})

//Enter Trim Width//
let width;
trimWidth.addEventListener("change", (e) => {
    if (isNaN(e.target.value) || e.target.value == 0) {
        trimWidth.style.borderColor = "red"
        trimWidth.style.borderWidth = "0.4rem"
    }
    else {
        trimWidth.style.borderColor = "none"
        trimWidth.style.borderWidth = "0rem"
        width = e.target.value
    }
})

//Enter Quantity //
let finalQty;
qty.addEventListener("change", (e) => {
    if (isNaN(e.target.value) || e.target.value == 0) {
        extent.style.borderColor = "red"
        extent.style.borderWidth = "0.4rem"
    }
    else {
        extent.style.borderColor = "none"
        extent.style.borderWidth = "0rem"
        finalQty = e.target.value
    }
})

//Select Colour //
let colour;
colourSelect.addEventListener("change", (e) => {
    colour = e.target.value
})

//Select Cover //
let cover;
coverSelect.addEventListener("change", (e) => {
    cover = e.target.value
})


//Select Binding Method //
let bind;
bindSelect.addEventListener("change", (e) => {
    bind = e.target.value
})

// Submit //
let sigQty;
let missingItem;
const results = document.querySelector("#results")
submit.addEventListener("click", () => {
    results.innerHTML = ""
    checkPrintMethod()
    checkCover(cover)
    checkCustomer()
    for (let i = 1; i <= results.children.length; i += 2) {
        results.children[i].classList.add("teal")
    }
}
)
//Add Customer Account Notes
const checkCustomer = () => {
    let result42 = document.createElement("div")
    result42.innerHTML = `Customer Cut and Pastes: ${custNotes[chosenCustomerIndex]}`
    results.appendChild(result42)
}

// Run Calculations Based On Print Method
const checkPrintMethod = () => {
    if (printMethod === "digital") {
        reelCalcs(width)
        checkPag(totalExtent)
        sigQty = newEx / pag
        digitalSheetQty(height)
        let result1 = document.createElement("div")
        let result2 = document.createElement("div")
        let result3 = document.createElement("div")
        let result4 = document.createElement("div")
        let result5 = document.createElement("div")
        result1.innerHTML = `Final Reel Size: ${reelSize} x ${drop}`
        result2.innerHTML = `Printing in ${pag}pp sections`
        result3.innerHTML = `Paper Type: ${chosenPaper}     Code: ${stock.digital[chosenPaper][chosenGrammage][reelSize]}`
        result4.innerHTML = `Final Extent: ${newEx}  (${sigQty} x ${pag}pp)     Add ${newEx - totalExtent} blanks`
        result5.innerHTML = `Qty of Sheets: ${sheetQty}`
        results.appendChild(result1)
        results.appendChild(result2)
        results.appendChild(result3)
        results.appendChild(result4)
        results.appendChild(result5)
    }
    else if (printMethod === "litho") {
        calcFlatSize()
        checkPagLitho(totalExtent)
        let result6 = document.createElement("div")
        let result7 = document.createElement("div")
        let result8 = document.createElement("div")
        let result9 = document.createElement("div")
        let result10 = document.createElement("div")
        let result41 = document.createElement("div")
        result6.innerHTML = `Flat Size: ${flatHeight} x ${flatWidth}`
        result7.innerHTML = `Sheet Size to Use: ${idealSheet}`
        result41.innerHTML = `Paper Type: ${chosenPaper}         Code: ${stock.litho[chosenPaper][chosenGrammage][idealSheet]}`
        result8.innerHTML = `Imposition: ${imp}`
        result9.innerHTML = `Extent: ${newEx}       Add ${newEx - totalExtent} blanks`
        result10.innerHTML = `Section Breakdown: ${finalPag}`
        results.appendChild(result6)
        results.appendChild(result7)
        results.appendChild(result41)
        results.appendChild(result8)
        results.appendChild(result9)
        results.appendChild(result10)
        if (qty32) {
            let result11 = document.createElement("div")
            result11.innerHTML = `No. of Sheets for 32pp Sigs: ${qty32}`
            results.appendChild(result11)
        }
        if (qty24) {
            let result12 = document.createElement("div")
            result12.innerHTML = `No. of Sheets for 24pp Sigs: ${qty24}`
            results.appendChild(result12)
        }
        if (qty16) {
            let result13 = document.createElement("div")
            result13.innerHTML = `No. of Sheets for 16pp Sigs: ${qty16}`
            results.appendChild(result13)
        }
        if (qty8) {
            let result14 = document.createElement("div")
            result14.innerHTML = `No. of Sheets for 8pp Sigs: ${qty8}`
            results.appendChild(result14)
        }
    }
    else if (printMethod === "IXSingle") {
        console.log("need to calculate Single Sheet")
    }
    else if (printMethod === "IXMixed") {
        console.log("need to calculate Mixed Media")
    }
}

//Calculate Reel Size (and whether it is stocked)
let reelSize;
let pag;
const reelCalcs = (w) => {
    if (w <= 127 && stock.digital[chosenPaper][chosenGrammage][402]) {
        reelSize = 402
        pag = 6
    }

    else if (w <= 143 && stock.digital[chosenPaper][chosenGrammage][480]) {
        reelSize = 480
        pag = 6
    }

    else if (w <= 156 && stock.digital[chosenPaper][chosenGrammage][503]) {
        reelSize = 503
        pag = 6
    }
    else if (w <= 156 && stock.digital[chosenPaper][chosenGrammage][336]) {
        reelSize = 336
        pag = 4
    }

    else if (w <= 185 && stock.digital[chosenPaper][chosenGrammage][402]) {
        reelSize = 402
        pag = 4
    }

    else if (w <= 224 && stock.digital[chosenPaper][chosenGrammage][480]) {
        reelSize = 480
        pag = 4
    }

    else if (w <= 235 && stock.digital[chosenPaper][chosenGrammage][503]) {
        reelSize = 503
        pag = 4
    }
    else {
        let note = document.createElement("span")
        note.innerHTML = "Width Too Large for Digital Reels"
        container.appendChild(note)
    }
}

//Check Pagination Works for Extent Digital- Calculate Blanks if Not
let newEx;
const checkPag = (ex) => {
    if (ex % pag === 0) {
        newEx = ex;
    } else {
        let diff = pag - (ex % pag)
        newEx = Number(ex) + Number(diff)
    }
}

//Calculate Text Paper Quantity for Digital
let drop;
let sheetQty;
const digitalSheetQty = (h) => {
    drop = Number(h) + 12
    sheetQty = Math.round(drop / 1000 * Number(sigQty) * Number(finalQty))
}


//Calculate Sheet Size for Litho and Check Stocks
let flatHeight;
let flatWidth;
let idealSheet;
let imp;
let div;
const calcFlatSize = () => {
    if (colour === "mono") {
        if (height <= 198 && width <= 129 && stock.litho[chosenPaper][chosenGrammage]["816 x 1080"]) {
            idealSheet = "816 x 1080"
            pag = 64
            imp = "O IMP"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 8
            div = 32

        }
        else if (height <= 216 && width <= 138 && stock.litho[chosenPaper][chosenGrammage]["888 x 1128"]) {
            idealSheet = "888 x 1128"
            pag = 64
            imp = "O IMP"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 8
            div = 32
        }
        else if (height <= 234 && width <= 156 && stock.litho[chosenPaper][chosenGrammage]["960 x 1272"]) {
            idealSheet = "960 x 1272"
            pag = 64
            imp = "O IMP"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 8
            div = 32
        }
        else if (height <= 246 && width <= 174 && stock.litho[chosenPaper][chosenGrammage]["1018 x 1416"]) {
            idealSheet = "1018 x 1416"
            pag = 64
            imp = "O IMP"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 8
            div = 32
        }
        else if (height <= 246 && width <= 189 && stock.litho[chosenPaper][chosenGrammage]["1020 x 1212"]) {
            idealSheet = "1020 x 1212"
            pag = 48
            imp = "48s"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 6
            div = 24
        }
        else if (height <= 276 && width <= 216 && stock.litho[chosenPaper][chosenGrammage]["901 x 1140"]) {
            idealSheet = "901 x 1140"
            pag = 32
            imp = "SINGLE 32s"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 4
            div = 32
        }
        else if (height <= 276 && width <= 216 && stock.litho[chosenPaper][chosenGrammage]["898 x 1212"]) {
            idealSheet = "898 x 1212"
            pag = 32
            imp = "SINGLE 32s"
            flatHeight = (Number(height) + 6) * 4
            flatWidth = (Number(width) + 3) * 4
            div = 32
        }
        else if (height <= 297 && width <= 210 && stock.litho[chosenPaper][chosenGrammage]["888 x 1212"]) {
            idealSheet = "888 x 1212"
            pag = 16
            imp = "SINGLE 16s"
            flatHeight = (Number(height) + 6) * 2
            flatWidth = (Number(height) + 3) * 4
            div = 16
        } else {
            newNoteOne = document.createElement("div")
            newNoteOne.innerHTML = "No Suitable Sheet Size- Trim Size Too Large"
            container.appendChild(newNoteOne)
        }
    }
}

//Calculate if Pagination Works for Litho, and Calculate Sheet Qty
let qty32;
let qty24;
let qty16;
let qty8;

let finalPag;
const checkPagLitho = (ex) => {
    if (div === 32) {
        if (ex % 8 === 0) {
            newEx = ex
        }
        else {
            let diff = 8 - (ex % 8)
            newEx = Number(ex) + Number(diff)
        }
        if (newEx % 32 === 0) {
            finalPag = `${newEx / 32} x 32pp`
            qty32 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 32)) / 2)
        } else if (newEx % 32 === 24) {
            finalPag = `${parseInt(newEx / 32)} x 32pp, 1 x 16pp, 1 x 8pp`
            qty32 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 32)) / 2)
            qty16 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 4)
            qty8 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 8)
        } else if (newEx % 32 === 16) {
            finalPag = `${parseInt(newEx / 32)} x 32pp, 1 x 16pp`
            qty32 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 32)) / 2)
            qty16 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 4)
        } else if (newEx % 32 === 8) {
            finalPag = `${parseInt(newEx / 32)} x 32pp, 1 x 8pp`
            qty32 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 32)) / 2)
            qty8 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 8)
        }
    } else if (div === 24) {
        if (ex % 8 === 0) {
            newEx = ex
        }
        else {
            let diff = 8 - (ex % 8)
            let newNoteOne = document.createElement("div")
            newNoteOne.innerHTML = `Add ${diff} blanks`
            notes.appendChild(newNoteOne)
            newEx = Number(ex) + Number(diff)
            let newNoteTwo = document.createElement("div")
            newNoteTwo.innerHTML = `New Extent: ${newEx}`
            notes.appendChild(newNoteTwo)
        }
        if (newEx % 24 === 0) {
            finalPag = `${newEx / 24} x 24pp`
            qty24 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 24)) / 2)
        } else if (newEx % 24 === 16) {
            finalPag = `${parseInt(newEx / 24)} x 24pp, 1 x 16pp`
            qty24 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 24)) / 2)
            qty16 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 3)
        } else if (newEx % 24 === 8) {
            finalPag = `${parseInt(newEx / 24)} x 24pp, 1 x 8pp`
            qty24 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 24)) / 2)
            qty8 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 6)
        }
    } else if (div === 16) {
        if (ex % 8 === 0) {
            newEx = ex
        } else {
            let diff = 8 - (ex % 8)
            let newNoteOne = document.createElement("div")
            newNoteOne.innerHTML = `Add ${diff} blanks`
            notes.appendChild(newNoteOne)
            newEx = Number(ex) + Number(diff)
            let newNoteTwo = document.createElement("div")
            newNoteTwo.innerHTML = `New Extent: ${newEx}`
            notes.appendChild(newNoteTwo)
        }
        if (newEx % 16 === 0) {
            finalPag = `${newEx / 16} x 16pp`
            qty16 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 16)))
        } else if (newEx % 16 === 8) {
            finalPag = `${parseInt(newEx / 16)} x 16pp, 1 x 8pp`
            qty16 = parseInt(((((finalQty * 1.05) * 1.04) + 100) * parseInt(newEx / 16)))
            qty8 = parseInt((((finalQty * 1.05) * 1.04) + 100) / 2)
        }
    }
}



//Remember to take into account colours, and bleeds. KBA3 biggest sheet is 1020 x 720


//IX - If not sewn, 8pp fold, then 4pp fold, then cut and stack (2pp sections however many up)
//If 8pp can be on certain sheet sizes, if 4pp then can be on others. 
//If 115gsm paper, add a warning that high ink coverage may ripple
//Anything above 130gsm can't be folded either- add note that explains too thick to be folded so cut and stack.
//If sewn, needs to be nested and always 4pp sections. Can't be cut and stack. Depends on grammage for how many pp sections it can be in - need to add thing for the paper folding at different lengths sinchage??
//If sewn, can't be over a certain width as folder will only reach so far. 
//Consider calculations for bleeds, and perfect bound.
//If notched, add a warning that an entire book notched with 8/4pp sections may not be securely bound.


//Calculations for Litho, and both IX need adding here!!
let spineWidth;
let coverHeight;
let coverWidth;
let coverSize;
let coverCode;
let coverSheetQty;
let jacketSize;
let jacketQty;
let greyboardHeight;
let greyboardWidth;
let greyboardSize;
let greyboardCode = [];
let greyboardQty;
let endPHeight;
let endPWidth;
let endPSize;
let endPMaterial;
let endPQty;
let endPCode;
let vol;

const checkCover = (c) => {
    if (c === "limp4") {
        vol = stock[printMethod][chosenPaper]["Vol"]
        if (Math.round((newEx * vol * chosenGrammage) / 20000) > 60) {
            let resultError = document.createElement("div")
            resultError.innerHTML = "ERROR: BOOK BLOCK SPINE LARGER THAN 60MM"
            results.appendChild(resultError)
            return
        }
        spineWidth = Math.round((newEx * vol * chosenGrammage) / 20000)
        coverHeight = Number(height) + 14
        coverWidth = (Number(width) * 2) + spineWidth + 6
        coverSize = `${coverHeight} x ${coverWidth}`
        coverCode = `Diva Silk DIV002`
        coverSheetQty = parseInt(Number(finalQty) * 1.1)
        let result15 = document.createElement("div")
        let result16 = document.createElement("div")
        let result17 = document.createElement("div")
        let result18 = document.createElement("div")
        result15.innerHTML = `Spine Width: ${spineWidth}mm`
        result16.innerHTML = `Cover Size: ${coverSize}`
        result17.innerHTML = `Cover Material: ${coverCode}`
        result18.innerHTML = `Sheet Quantity Cover: ${coverSheetQty}`
        results.appendChild(result15)
        results.appendChild(result16)
        results.appendChild(result17)
        results.appendChild(result18)

    }
    else if (c === "limp8") {
        vol = stock[printMethod][chosenPaper]["Vol"]
        if (Math.round((newEx * vol * chosenGrammage) / 20000) > 60) {
            let resultError = document.createElement("div")
            resultError.innerHTML = "ERROR: BOOK BLOCK SPINE LARGER THAN 60MM"
            results.appendChild(resultError)
            return
        }
        console.log("need to calculate")
        //cover size
        //paper code
        //number of sheets
        //Need to work out calculations for size of flaps etc, what is too big to be printed in house

    }
    else if (c === "cloth") {
        vol = stock[printMethod][chosenPaper]["Vol"]
        if (Math.round((newEx * vol * chosenGrammage) / 20000) > 60) {
            let resultError = document.createElement("div")
            resultError.innerHTML = "ERROR: BOOK BLOCK SPINE LARGER THAN 60MM"
            results.appendChild(resultError)
            return
        }
        spineWidth = Math.round(((newEx * vol * chosenGrammage) / 20000) + 4)
        coverHeight = Number(height) + 38
        coverWidth = (Number(width) * 2) + 40 + spineWidth
        coverSize = `${coverHeight} x ${coverWidth}`
        coverSheetQty = Math.round((finalQty * 1.05) / (parseInt(1020 / coverWidth) * parseInt(720 / coverHeight)))
        jacketSize = `${Number(height) + 18} x ${(Number(width) * 2) + spineWidth + 180 + 12}`
        greyboardHeight = Number(height) + 6
        greyboardWidth = Number(width) - 4
        greyboardSize = `${greyboardHeight} x ${greyboardWidth}`
        endPHeight = Number(height) + 6
        endPWidth = (Number(width) * 2) + 6
        endPSize = `${endPHeight} x ${endPWidth}`
        endPMaterial = stock[printMethod][chosenPaper]["End"]
        endPQty = Math.round((finalQty / (parseInt(1020 / endPWidth) * parseInt(720 / endPHeight))) * 2)
        let result19 = document.createElement("div")
        let result20 = document.createElement("div")
        let result21 = document.createElement("div")
        let result22 = document.createElement("div")
        let result23 = document.createElement("div")
        let result28 = document.createElement("div")
        let result29 = document.createElement("div")
        let result30 = document.createElement("div")
        let result31 = document.createElement("div")
        result19.innerHTML = `Spine Width: ${spineWidth}mm`
        result20.innerHTML = `Jacket Size: ${jacketSize}`
        result21.innerHTML = `Cloth Size: ${coverSize}`
        result22.innerHTML = `Average Cloth FlatSheet Quantity: ${coverSheetQty}`
        results.appendChild(result19)
        results.appendChild(result20)
        results.appendChild(result21)
        results.appendChild(result22)

        checkGreyBoard(greyboardSize)
        if (gBCut === false) {
            greyboardQty = finalQty * 2
        } else if (gBCut === true) {
            greyboardQty = parseInt((finalQty / (parseInt(1020 / greyboardHeight) * parseInt(760 / greyboardWidth))) * 2)
        }
        result23.innerHTML = `GreyBoard Size: ${greyboardSize}`
        result28.innerHTML = `GreyBoard Sheets Quantity: ${greyboardQty}`
        result29.innerHTML = `Endpaper Size: ${endPSize}`
        result30.innerHTML = `Endpaper Material: ${endPMaterial}`
        result31.innerHTML = `Endpaper Quantity: ${endPQty}`
        results.appendChild(result23)
        results.appendChild(result28)
        results.appendChild(result29)
        results.appendChild(result30)
        results.appendChild(result31)

    }
    else if (c === "ppc") {
        vol = stock[printMethod][chosenPaper]["Vol"]
        if (Math.round((newEx * vol * chosenGrammage) / 20000) > 60) {
            let resultError = document.createElement("div")
            resultError.innerHTML = "ERROR: BOOK BLOCK SPINE LARGER THAN 60MM"
            results.appendChild(resultError)
            return
        }
        spineWidth = Math.round(((newEx * vol * chosenGrammage) / 20000) + 4)
        coverHeight = Number(height) + 38
        coverWidth = (Number(width) * 2) + 40 + spineWidth
        coverSize = `${coverHeight} x ${coverWidth}`
        if (coverHeight > 320) {
            coverCode = "PPC too large for Ricohs- Print on IX instead (350 x 508)"
        }
        if (coverWidth <= 432) {
            coverCode = `Pro Digital    320 x 450   PR001`
        } else if (coverWidth > 432 && coverWidth <= 542) {
            coverCode = `Maiden Silk    320 x 560   DMA013`
        } else if (coverWidth > 542 && coverWidth <= 642) {
            coverCode = `Maiden Silk    320 x 660`
        }
        coverSheetQty = parseInt(finalQty * 1.1)
        greyboardHeight = Number(height) + 6
        greyboardWidth = Number(width) - 4
        greyboardSize = `${greyboardHeight} x ${greyboardWidth}`

        let result32 = document.createElement("div")
        let result33 = document.createElement("div")
        let result34 = document.createElement("div")
        let result35 = document.createElement("div")
        result32.innerHTML = `Spine Width: ${spineWidth}mm`
        result33.innerHTML = `PPC Size: ${coverSize}`
        result34.innerHTML = `PPC Material: ${coverCode}`
        result35.innerHTML = `PPC Sheet Quantity: ${coverSheetQty}`
        results.appendChild(result32)
        results.appendChild(result33)
        results.appendChild(result34)
        results.appendChild(result35)

        checkGreyBoard(greyboardSize)
        if (gBCut === false) {
            greyboardQty = finalQty * 2
        } else if (gBCut === true) {
            greyboardQty = parseInt((finalQty / (parseInt(1020 / greyboardHeight) * parseInt(760 / greyboardWidth))) * 2)
        }
        endPHeight = Number(height) + 6
        endPWidth = (Number(width) * 2) + 6
        endPSize = `${endPHeight} x ${endPWidth}`
        endPMaterial = stock[printMethod][chosenPaper]["End"]
        endPQty = Math.round((finalQty / (parseInt(1020 / endPWidth) * parseInt(720 / endPHeight))) * 2)

        let result36 = document.createElement("div")
        let result37 = document.createElement("div")
        let result38 = document.createElement("div")
        let result39 = document.createElement("div")
        let result40 = document.createElement("div")
        result36.innerHTML = `GreyBoard Size: ${greyboardSize}`
        result37.innerHTML = `Endpaper Size: ${endPSize}`
        result38.innerHTML = `Endpaper Material: ${endPMaterial}`
        result39.innerHTML = `Endpaper Quantity: ${endPQty}`
        result40.innerHTML = `GreyBoard Sheets Quantity: ${greyboardQty}`
        results.appendChild(result36)
        results.appendChild(result37)
        results.appendChild(result38)
        results.appendChild(result39)
        results.appendChild(result40)

    }
}

let gBCut;
const checkGreyBoard = (gb) => {
    if (!greyBoardStock["1.9"][gb] && !greyBoardStock["2.5"][gb] && !greyBoardStock["2.75"][gb]) {
        gBCut = true;
        let result24 = document.createElement("div")
        result24.innerHTML = `No Pre-cut GreyBoard Sheets Available. Options to Choose From: <br>
        2mm:    1020 x 760  E200029 <br>
        2.25mm: 1020 x 760  E225029 <br>
        2.5mm:  1020 x 760  E250016 <br>
        2.75mm: 1020 x 760  E275010`
        results.appendChild(result24)
    }
    else {
        if (greyBoardStock["1.9"][gb]) {
            let result25 = document.createElement("div")
            result25.innerHTML = `GreyBoard Thickness:1.9mm  Code:${greyBoardStock["1.9"][gb]}`
            results.appendChild(result25)
            gBCut = false;
        }
        if (greyBoardStock["2.5"][gb]) {
            let result26 = document.createElement("div")
            result26.innerHTML = `GreyBoard Thickness:2.5mm  Code:${greyBoardStock["2.5"][gb]}`
            results.appendChild(result26)
            gBCut = false;
        }
        if (greyBoardStock["2.75"][gb]) {
            let result27 = document.createElement("div")
            result27.innerHTML = `GreyBoard Thickness:2.75mm  Code:${greyBoardStock["2.75"][gb]}`
            results.appendChild(result27)
            gBCut = false;
        }
    }
}



//Need to work out what difference a sewn book makes- adds more on to the spine firsty. May also affect paper sizes, especially if a lap is neeeded for sewing
//integrate into already existing functions, if sewn, run these..., else run as normal
//Need to add:
//8pp cover calcs
//IX Single Sheet and Mixed Media
//Bleeds?
//Sewn
//Customer Notes