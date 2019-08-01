
let dataDiv = document.getElementById("dataDiv")
let searchButton = document.getElementById("searchButton")
let priceDiv = document.getElementById("priceDiv")
let dropDownState = document.getElementById("dropDownState")
let dropDownFreq = document.getElementById("dropDownFreq")

async function fetchEiaData(URL) {
    let response = await fetch(URL)
    let json = await response.json()
    return json
}

function displayStateData(url) {
    fetchEiaData(url).then(json => {
        // console.log(json)
        let dataValues = json.series[0].data
        let graphObjectArray = dataValues.map(reading => {
            return {
                y: reading[1],
                label: reading[0]
            }
        })
        displayKwGraph(graphObjectArray)
    })

}

function displayPriceData(url) {
    fetchEiaData(url).then(json => {
        let dataValues = json.series[0].data
        let graphObjectArray = dataValues.map(reading => {
            return {
                y: reading[1],
                label: reading[0]
            }
        })
        displayPriceGraph(graphObjectArray)
    })
}

let stateSelected = document.getElementById("stateSelected")
setTimeout(() => {
    let states = document.getElementsByTagName("path")
    for(let i = 0; i < states.length; i++){
        stateClass = states[i].className.animVal
        let sm_state = [].slice.call(document.getElementsByClassName(stateClass))
        let stateAbbr = stateClass.slice(-2)
        sm_state.forEach(element => {
            element.addEventListener('click', e => {
                dropDownState.value = stateAbbr
                dropDownFreq.value = "A"
                let stateJson = allStatesInfo.filter(stateInfo => {
                    return stateInfo.Abbreviation == stateAbbr
                })[0]
                stateSelected.innerHTML = `
                    <div>
                        State Name: ${stateJson.State}
                        Population: ${stateJson.Population}
                        Square Miles: ${stateJson["Sq.Miles"]}
                        Useage Rank: ${stateJson.ConsumeRank}
                        Residential Accounts: ${stateJson.CustAccts}
                        Total Production: ${stateJson.TotEnergy}
                        Renewable Energy Production: ${stateJson.RenewEnergy}
                    </div>`
                let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${stateAbbr}-RES.A`

                let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${stateAbbr}-RES.A`
    
                displayStateData(elecSalesStateURL)
    
                displayPriceData(elecPriceStateURL)
            })

        })
    }
      

}, 1000)

setTimeout(() => {
    let states = document.getElementsByTagName("text")
    for(let i = 0; i < states.length; i++){
        stateClass = states[i].className.animVal
        let sm_state = [].slice.call(document.getElementsByClassName(stateClass))
        let stateAbbr = stateClass.slice(-2)
        sm_state.forEach(element => {
            element.addEventListener('click', e => {
                dropDownState.value = stateAbbr
                dropDownFreq.value = "A"
                let stateJson = allStatesInfo.filter(stateInfo => {
                    return stateInfo.Abbreviation == stateAbbr
                })[0]
                stateSelected.innerHTML = `
                    <div>
                        State Name: ${stateJson.State}
                        Population: ${stateJson.Population}
                        Square Miles: ${stateJson["Sq.Miles"]}
                        Useage Rank: ${stateJson.ConsumeRank}
                        Residential Accounts: ${stateJson.CustAccts}
                        Total Production: ${stateJson.TotEnergy}
                        Renewable Energy Production: ${stateJson.RenewEnergy}
                    </div>`
                let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${stateAbbr}-RES.A`

                let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${stateAbbr}-RES.A`
    
                displayStateData(elecSalesStateURL)
    
                displayPriceData(elecPriceStateURL)
            })

        })
    }
        

}, 1000)

function menuEvent() {
    dropDownState.addEventListener('change', function() {
        let state = ""
        state = this.value
        
        let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${state}-RES.A`
    
        let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${state}-RES.A`
    
        displayStateData(elecSalesStateURL)
    
        displayPriceData(elecPriceStateURL)
        
    })
}

menuEvent()

function freqEvent() {
    dropDownFreq.addEventListener('change', function() {
        let frequency = ""
        frequency = this.value
        state = dropDownState.value

        let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${state}-RES.${frequency}`
    
        let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${state}-RES.${frequency}`
    
        displayStateData(elecSalesStateURL)
    
        displayPriceData(elecPriceStateURL)


    })
}

freqEvent()

function displayKwGraph (KwArray) {

    var chart = new CanvasJS.Chart("kwContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Retail Sales of Electricity"
        },
        axisY: {
            title: "million kilowatthours"
        },
        data: [{        
            type: "column",  
            showInLegend: false, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: KwArray
        }]
    });
    chart.render();
}
    
function displayPriceGraph (PriceArray) {

    var chart = new CanvasJS.Chart("priceContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Average Retail Price of Electricity"
        },
        axisY: {
            title: "cents per kilowatthour"
        },
        data: [{        
            type: "column",  
            showInLegend: false, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: PriceArray
        }]
    });
    chart.render();
}