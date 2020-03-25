const statsHtmlRep = (state, positive, negative, pending, hospitalized, death, total, lastUpdateEt, checkTimeEt, percentPositive, percentDeathPositive, statePopulation, percentPopulationTested, percentPopulationPositive) => {
    return `
    <th class="state" id="th--${state}">
    <th class="positive" id="th--${positive}">
    <th class="negative" id="th--${negative}">
    <th class="pending" id="th--${pending}">
    <th class="hospitalized" id="th--${hospitalized}">
    <th class="death" id="th--${death}">
    <th class="total" id="th--${total}">
    <th class="lastUpdateEt" id="th--${lastUpdateEt}">
    <th class="checkTimeEt" id="th--${checkTimeEt}">
    <th class="percentPositive" id="th--${percentPositive}">
    <th class="statePopulation" id="th--${statePopulation}">
    <th class="percentPopulationTestedteStat" id="th--${percentPopulationTested}">
    <th class="percentPopulationPositive" id="th--${percentPopulationPositive}">
    </th>
    `
  }