// THIS IS STATE BUTTONS 

let stateSelected = document.getElementById("stateSelected")
let stateID = ""
setTimeout(function() {
    let sm_state_CA = [].slice.call(document.getElementsByClassName("sm_state_CA"))
    console.log(document.getElementsByClassName("sm_state_CA"))
    console.log(sm_state_CA)
    sm_state_CA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "California info goes here"
            console.log(sm_state_CA[0].className.baseVal)
            let stateID = "CA"
            console.log(stateID)

            displayStateData()

            displayPriceData()
        })
    })
    let sm_state_TX = [].slice.call(document.getElementsByClassName("sm_state_TX"))
    sm_state_TX.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Texas info goes here"
        })
    })
    let sm_state_FL = [].slice.call(document.getElementsByClassName("sm_state_FL"))
    sm_state_FL.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Florida info goes here"
        })
    })
    let sm_state_NY = [].slice.call(document.getElementsByClassName("sm_state_NY"))
    sm_state_NY.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "New York info goes here"
        })
    })
    let sm_state_PA = [].slice.call(document.getElementsByClassName("sm_state_PA"))
    sm_state_PA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Pennsylvania info goes here"
        })
    })
    let sm_state_IL = [].slice.call(document.getElementsByClassName("sm_state_IL"))
    sm_state_IL.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Illinois info goes here"
        })
    })
    let sm_state_OH = [].slice.call(document.getElementsByClassName("sm_state_OH"))
    sm_state_OH.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Ohio info goes here"
        })
    })
    let sm_state_GA = [].slice.call(document.getElementsByClassName("sm_state_GA"))
    sm_state_GA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Georgia info goes here"
        })
    })
    let sm_state_NC = [].slice.call(document.getElementsByClassName("sm_state_NC"))
    sm_state_NC.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "North Carolina info goes here"
        })
    })
    let sm_state_MI = [].slice.call(document.getElementsByClassName("sm_state_MI"))
    sm_state_MI.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Michigan info goes here"
        })
    })
    let sm_state_NJ = [].slice.call(document.getElementsByClassName("sm_state_NJ"))
    sm_state_NJ.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "New Jersey info goes here"
        })
    })
    let sm_state_VA = [].slice.call(document.getElementsByClassName("sm_state_VA"))
    sm_state_VA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Virginia info goes here"
        })
    })
    let sm_state_WA = [].slice.call(document.getElementsByClassName("sm_state_WA"))
    sm_state_WA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Washington info goes here"
        })
    })
    let sm_state_AZ = [].slice.call(document.getElementsByClassName("sm_state_AZ"))
    sm_state_AZ.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Arizona info goes here"
        })
    })
    let sm_state_MA = [].slice.call(document.getElementsByClassName("sm_state_MA"))
    sm_state_MA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Massachusetts info goes here"
        })
    })
    let sm_state_TN = [].slice.call(document.getElementsByClassName("sm_state_TN"))
    sm_state_TN.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Tennessee info goes here"
        })
    })
    let sm_state_IN = [].slice.call(document.getElementsByClassName("sm_state_IN"))
    sm_state_IN.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Indiana info goes here"
        })
    })
    let sm_state_MO = [].slice.call(document.getElementsByClassName("sm_state_MO"))
    sm_state_MO.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Missouri info goes here"
        })
    })
    let sm_state_MD = [].slice.call(document.getElementsByClassName("sm_state_MD"))
    sm_state_MD.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Maryland info goes here"
        })
    })
    let sm_state_WI = [].slice.call(document.getElementsByClassName("sm_state_WI"))
    sm_state_WI.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Wisconsin info goes here"
        })
    })
    let sm_state_CO = [].slice.call(document.getElementsByClassName("sm_state_CO"))
    sm_state_CO.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Colorado info goes here"
        })
    })
    let sm_state_MN = [].slice.call(document.getElementsByClassName("sm_state_MN"))
    sm_state_MN.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Minnesota info goes here"
        })
    })
    let sm_state_SC = [].slice.call(document.getElementsByClassName("sm_state_SC"))
    sm_state_SC.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "South Carolina info goes here"
        })
    })
    let sm_state_AL = [].slice.call(document.getElementsByClassName("sm_state_AL"))
    sm_state_AL.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Alabama info goes here"
        })
    })
    let sm_state_LA = [].slice.call(document.getElementsByClassName("sm_state_LA"))
    sm_state_LA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Louisiana info goes here"
        })
    })
    let sm_state_KY = [].slice.call(document.getElementsByClassName("sm_state_KY"))
    sm_state_KY.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Kentucky info goes here"
        })
    })
    let sm_state_OR = [].slice.call(document.getElementsByClassName("sm_state_OR"))
    sm_state_OR.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Oregon info goes here"
        })
    })
    let sm_state_OK = [].slice.call(document.getElementsByClassName("sm_state_OK"))
    sm_state_OK.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Oklahoma info goes here"
        })
    })
    let sm_state_CT = [].slice.call(document.getElementsByClassName("sm_state_CT"))
    sm_state_CT.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Connecticut info goes here"
        })
    })
    let sm_state_IA = [].slice.call(document.getElementsByClassName("sm_state_IA"))
    sm_state_IA.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Iowa info goes here"
        })
    })
    let sm_state_UT = [].slice.call(document.getElementsByClassName("sm_state_UT"))
    sm_state_UT.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Utah info goes here"
        })
    })
    let sm_state_AR = [].slice.call(document.getElementsByClassName("sm_state_AR"))
    sm_state_AR.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Arkansas info goes here"
        })
    })
    let sm_state_NV = [].slice.call(document.getElementsByClassName("sm_state_NV"))
    sm_state_NV.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Nevada info goes here"
        })
    })
    let sm_state_MS = [].slice.call(document.getElementsByClassName("sm_state_MS"))
    sm_state_MS.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Mississippi info goes here"
        })
    })
    let sm_state_KS = [].slice.call(document.getElementsByClassName("sm_state_KS"))
    sm_state_KS.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Kansas info goes here"
        })
    })
    let sm_state_NM = [].slice.call(document.getElementsByClassName("sm_state_NM"))
    sm_state_NM.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "New Mexico info goes here"
        })
    })
    let sm_state_NE = [].slice.call(document.getElementsByClassName("sm_state_NE"))
    sm_state_NE.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Nebraska info goes here"
        })
    })
    let sm_state_WV = [].slice.call(document.getElementsByClassName("sm_state_WV"))
    sm_state_WV.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "West Virginia info goes here"
        })
    })
    let sm_state_ID = [].slice.call(document.getElementsByClassName("sm_state_ID"))
    sm_state_ID.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Idaho info goes here"
        })
    })
    let sm_state_HI = [].slice.call(document.getElementsByClassName("sm_state_HI"))
    sm_state_HI.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Hawaii info goes here"
        })
    })
    let sm_state_NH = [].slice.call(document.getElementsByClassName("sm_state_NH"))
    sm_state_NH.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "New Hampshire info goes here"
        })
    })
    let sm_state_ME = [].slice.call(document.getElementsByClassName("sm_state_ME"))
    sm_state_ME.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Maine info goes here"
        })
    })
    let sm_state_RI = [].slice.call(document.getElementsByClassName("sm_state_RI"))
    sm_state_RI.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Rhode Island info goes here"
        })
    })
    let sm_state_MT = [].slice.call(document.getElementsByClassName("sm_state_MT"))
    sm_state_MT.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Montana info goes here"
        })
    })
    let sm_state_DE = [].slice.call(document.getElementsByClassName("sm_state_DE"))
    sm_state_DE.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Delaware info goes here"
        })
    })
    let sm_state_SD = [].slice.call(document.getElementsByClassName("sm_state_SD"))
    sm_state_SD.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "South Dakota info goes here"
        })
    })
    let sm_state_ND = [].slice.call(document.getElementsByClassName("sm_state_ND"))
    sm_state_ND.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "North Dakota info goes here"
        })
    })
    let sm_state_AK = [].slice.call(document.getElementsByClassName("sm_state_AK"))
    sm_state_AK.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Alaska info goes here"
        })
    })
    let sm_state_VT = [].slice.call(document.getElementsByClassName("sm_state_VT"))
    sm_state_VT.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Vermont info goes here"
        })
    })
    let sm_state_WY = [].slice.call(document.getElementsByClassName("sm_state_WY"))
    sm_state_WY.forEach((element) => {
        element.addEventListener('click', (e) => {
            stateSelected.innerHTML = "Wyoming info goes here"
            console.log("Wyoming button works")
        })
    })

}, 1000)