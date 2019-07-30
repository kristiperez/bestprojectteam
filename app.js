
let dataDiv = document.getElementById("dataDiv")
let searchButton = document.getElementById("searchButton")
let priceDiv = document.getElementById("priceDiv")
let dropDownState = document.getElementById("dropDownState")

//let usageURL = "http://api.eia.gov/category/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&category_id=1002"
//let avgPriceURL = "http://api.eia.gov/category/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&category_id=1012"
let elecSales = "http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.AL-RES.A"

async function fetchEiaData(URL) {
    let response = await fetch(URL)
    let json = await response.json()
    return json
}
function displayData() {
    fetchEiaData(elecSales).then(json => {
        console.log(Object.values(json))
        let dataValues = json.series[0].data
        let readings = dataValues.map(reading => {
            //return reading[0] + " : " + reading[1]
            return `<div class="dataValues">
                        <p>${reading[0]} : ${reading[1]}</p>
                    <div>`
        })
        dataDiv.innerHTML=readings.join('')
    })
}
displayData()

dropDownState.addEventListener('change', function() {
    let state = this.value
    
    let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${state}-RES.A`

    let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${state}-RES.A`


    function displayStateData() {
        fetchEiaData(elecSalesStateURL).then(json => {
            let dataValues = json.series[0].data
            let readings = dataValues.map(reading => {
                return `<div class="salesValues">
                            <p>${reading[0]} : ${reading[1]}</p>
                        </div>`
            })
            dataDiv.innerHTML = readings.join('')
        })
    }
    displayStateData()

    function displayPriceData() {
        fetchEiaData(elecPriceStateURL).then(json => {
            let dataValues = json.series[0].data
            let readings = dataValues.map(reading => {
                return `<div class="priceValues">
                            <p>${reading[0]} : ${reading[1]}</p>
                        </div>`
            })
            priceDiv.innerHTML = readings.join('')
        })
    }
    displayPriceData()


})

