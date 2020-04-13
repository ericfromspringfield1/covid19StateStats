
    /*document.addEventListener('DOMContentLoaded', ()=>{ 
        
        const getStateStats = feature => {
            return fetch(
              `https://covidtracking.com/api/states`  
            ).then(response => response.json());
          };
          console.log(getStateStats())
        });
        
    function renderStates(data) {
        for (const s of data) {
            
            //Find the container where we attach everything
    const stateHeader = document.querySelector('#state-header');

            //Create all necessary elements (table headers, STATE, POSITIVE, ETC)
      const stateResult = document.createElement('stateResult');

//Grab data and insert it into created elements
        
      
//Append everything to main container  
      
      stateHeader.append(state);
      }
   
//Call the function that will automatically run renderQuote() also 
   
   
        

}

    
   /* const putStatsInDom = (htmlString) => {
        statsResultsContainer.innerHTML += htmlString
        }*/

    /*const stateStat = document.querySelector("stateStat")
    
    const AddStateStat = (htmlString) => {
    stateStat.innerHTML = `State: ${htmlString}`
    
    }*/