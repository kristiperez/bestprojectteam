
let dataDiv = document.getElementById("dataDiv")
let searchButton = document.getElementById("searchButton")
let priceDiv = document.getElementById("priceDiv")
let dropDownState = document.getElementById("dropDownState")

let elecSales = "http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.AL-RES.A"

async function fetchEiaData(URL) {
    let response = await fetch(URL)
    let json = await response.json()
    return json
}

dropDownState.addEventListener('change', function() {
    let state = this.value
    
    let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${state}-RES.A`

    let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${state}-RES.A`


    function displayStateData() {
        fetchEiaData(elecSalesStateURL).then(json => {
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
    displayStateData()

    function displayPriceData() {
        fetchEiaData(elecPriceStateURL).then(json => {
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
    displayPriceData()

})

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
            showInLegend: true, 
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