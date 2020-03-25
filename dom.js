const putStatsInDom = (htmlString) => {
    statsResultsContainer.innerHTML += htmlString
    }
    
    const stateStat = document.querySelector("stateStat")
    
    const AddStateStat = (htmlString) => {
    stateStat.innerHTML = `State: ${htmlString}`
    
    }