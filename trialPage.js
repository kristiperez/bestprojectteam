let url = "http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.CUSTOMERS.AL-RES.M"
console.log(fetchEiaData(url))

fetchEiaData(url).then(json => {
    let dataValues = json.series[0].data
    console.log(dataValues)
})

setTimeout(() => {
    let states = document.getElementsByTagName("text")
        for(let i = 0; i < states.length; i++){
            stateClass = states[i].className.animVal
            let sm_state = [].slice.call(document.getElementsByClassName(stateClass))
            let stateAbbr = stateClass.slice(-2)
            sm_state.forEach(element => {  
                element.addEventListener('click', e => {
                    let stateJson = allStatesInfo.filter(stateInfo => {
                        return stateInfo.Abbreviation == stateAbbr
                    })[0]
                    stateSelected.innerHTML = `
                        <div>
                            State Name: ${stateJson.State}
                            Population: ${stateJson.Population}
                            Square Miles: ${stateJson["Sq.Miles"]}
                        </div>`
                    let elecSalesStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.SALES.${stateAbbr}-RES.A`
    
                    let elecPriceStateURL = `http://api.eia.gov/series/?api_key=e54459a328bb4d1b3ede8dc26cf085d9&series_id=ELEC.PRICE.${stateAbbr}-RES.A`
        
                    displayStateData(elecSalesStateURL)
        
                    displayPriceData(elecPriceStateURL)
                })
    
            })
        }}, 1000)