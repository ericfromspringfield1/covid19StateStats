//If we use... ${feature} allows refactoring of code due to four features - this allows for one line of code versus many
/*const remoteURL = "https://localhost:8081"
const getStateStats = feature => {
        return fetch(`${remoteURL}/stats`).then(result => result.json())
}*/

/*const getStateStats = feature => {
  return fetch(
    `https://covidtracking.com/api/states`  
  ).then(response => response.json())
  
};
console.log(getStateStats())*/


const dataURL = `https://covidtracking.com/api/states`;

fetch(dataURL)
.then(function(resp) {
  return resp.json();
})
.then(function(data) {
  console.log(data)
  
  const percentPositive0 = data[0].positive / data[0].negative * 100
  const percentPositive1 = data[1].positive / data[1].negative * 100
  const percentPositive2 = data[2].positive / data[2].negative * 100
  const percentPositive3 = data[3].positive / data[3].negative * 100
  const percentPositive4 = data[4].positive / data[4].negative * 100
  const percentPositive5 = data[5].positive / data[5].negative * 100
  const percentPositive6 = data[6].positive / data[6].negative * 100
  const percentPositive7 = data[7].positive / data[7].negative * 100
  const percentPositive8 = data[8].positive / data[8].negative * 100
  const percentPositive9 = data[9].positive / data[9].negative * 100
  const percentPositive10 = data[10].positive / data[10].negative * 100
  const percentPositive11 = data[11].positive / data[11].negative * 100
  const percentPositive12 = data[12].positive / data[12].negative * 100
  const percentPositive13 = data[13].positive / data[13].negative * 100
  const percentPositive14 = data[14].positive / data[14].negative * 100
  const percentPositive15 = data[15].positive / data[15].negative * 100
  const percentPositive16 = data[16].positive / data[16].negative * 100
  const percentPositive17 = data[17].positive / data[17].negative * 100
  const percentPositive18 = data[18].positive / data[18].negative * 100
  const percentPositive19 = data[19].positive / data[19].negative * 100
  const percentPositive20 = data[20].positive / data[20].negative * 100
  const percentPositive21 = data[21].positive / data[21].negative * 100
  const percentPositive22 = data[22].positive / data[22].negative * 100
  const percentPositive23 = data[23].positive / data[23].negative * 100
  const percentPositive24 = data[24].positive / data[24].negative * 100
  const percentPositive25 = data[25].positive / data[25].negative * 100
  const percentPositive26 = data[26].positive / data[26].negative * 100
  const percentPositive27 = data[27].positive / data[27].negative * 100
  const percentPositive28 = data[28].positive / data[28].negative * 100
  const percentPositive29 = data[29].positive / data[29].negative * 100
  const percentPositive30 = data[30].positive / data[30].negative * 100
  const percentPositive31 = data[31].positive / data[31].negative * 100
  const percentPositive32 = data[32].positive / data[32].negative * 100
  const percentPositive33 = data[33].positive / data[33].negative * 100
  const percentPositive34 = data[34].positive / data[34].negative * 100
  const percentPositive35 = data[35].positive / data[35].negative * 100
  const percentPositive36 = data[36].positive / data[36].negative * 100
  const percentPositive37 = data[37].positive / data[37].negative * 100
  const percentPositive38 = data[38].positive / data[38].negative * 100
  const percentPositive39 = data[39].positive / data[39].negative * 100
  const percentPositive40 = data[40].positive / data[40].negative * 100
  const percentPositive41 = data[41].positive / data[41].negative * 100
  const percentPositive42 = data[42].positive / data[42].negative * 100
  const percentPositive43 = data[43].positive / data[43].negative * 100
  const percentPositive44 = data[44].positive / data[44].negative * 100
  const percentPositive45 = data[45].positive / data[45].negative * 100
  const percentPositive46 = data[46].positive / data[46].negative * 100
  const percentPositive47 = data[47].positive / data[47].negative * 100
  const percentPositive48 = data[48].positive / data[48].negative * 100
  const percentPositive49 = data[49].positive / data[49].negative * 100
  const percentPositive50 = data[50].positive / data[50].negative * 100
  /*const percentPositive51 = data[51].positive / data[51].negative
  const percentPositive52 = data[52].positive / data[52].negative
  const percentPositive53 = data[53].positive / data[53].negative
  const percentPositive54 = data[54].positive / data[54].negative
  const percentPositive55 = data[55].positive / data[55].negative
  const percentPositive56 = data[56].positive / data[56].negative*/

  document.getElementById("stateData0").textContent = `${data[0].state}`
  document.getElementById("positiveData0").textContent = `${data[0].positive}`
  document.getElementById("negativeData0").textContent = `${data[0].negative}`
  document.getElementById("totalTestResultsData0").textContent = `${data[0].totalTestResults}`
  document.getElementById("deathData0").textContent = `${data[0].death}`
  document.getElementById("percentPositive0").textContent = percentPositive0

  document.getElementById("stateData1").textContent = `${data[1].state}`
  document.getElementById("positiveData1").textContent = `${data[1].positive}`
  document.getElementById("negativeData1").textContent = `${data[1].negative}`
  document.getElementById("totalTestResultsData1").textContent = `${data[1].totalTestResults}`
  document.getElementById("deathData1").textContent = `${data[1].death}`
  document.getElementById("percentPositive1").textContent = percentPositive1

  document.getElementById("stateData2").textContent = `${data[2].state}`
  document.getElementById("positiveData2").textContent = `${data[2].positive}`
  document.getElementById("negativeData2").textContent = `${data[2].negative}`
  document.getElementById("totalTestResultsData2").textContent = `${data[2].totalTestResults}`
  document.getElementById("deathData2").textContent = `${data[2].death}`
  document.getElementById("percentPositive2").textContent = percentPositive2

  document.getElementById("stateData3").textContent = `${data[3].state}`
  document.getElementById("positiveData3").textContent = `${data[3].positive}`
  document.getElementById("negativeData3").textContent = `${data[3].negative}`
  document.getElementById("totalTestResultsData3").textContent = `${data[3].totalTestResults}`
  document.getElementById("deathData3").textContent = `${data[3].death}`
  document.getElementById("percentPositive3").textContent = percentPositive3

  document.getElementById("stateData4").textContent = `${data[4].state}`
  document.getElementById("positiveData4").textContent = `${data[4].positive}`
  document.getElementById("negativeData4").textContent = `${data[4].negative}`
  document.getElementById("totalTestResultsData4").textContent = `${data[4].totalTestResults}`
  document.getElementById("deathData4").textContent = `${data[4].death}`
  document.getElementById("percentPositive4").textContent = percentPositive4

  document.getElementById("stateData5").textContent = `${data[5].state}`
  document.getElementById("positiveData5").textContent = `${data[5].positive}`
  document.getElementById("negativeData5").textContent = `${data[5].negative}`
  document.getElementById("totalTestResultsData5").textContent = `${data[5].totalTestResults}`
  document.getElementById("deathData5").textContent = `${data[5].death}`
  document.getElementById("percentPositive5").textContent = percentPositive5

  document.getElementById("stateData6").textContent = `${data[6].state}`
  document.getElementById("positiveData6").textContent = `${data[6].positive}`
  document.getElementById("negativeData6").textContent = `${data[6].negative}`
  document.getElementById("totalTestResultsData6").textContent = `${data[6].totalTestResults}`
  document.getElementById("deathData6").textContent = `${data[6].death}`
  document.getElementById("percentPositive6").textContent = percentPositive6

  document.getElementById("stateData7").textContent = `${data[7].state}`
  document.getElementById("positiveData7").textContent = `${data[7].positive}`
  document.getElementById("negativeData7").textContent = `${data[7].negative}`
  document.getElementById("totalTestResultsData7").textContent = `${data[7].totalTestResults}`
  document.getElementById("deathData7").textContent = `${data[7].death}`
  document.getElementById("percentPositive7").textContent = percentPositive7

  document.getElementById("stateData8").textContent = `${data[8].state}`
  document.getElementById("positiveData8").textContent = `${data[8].positive}`
  document.getElementById("negativeData8").textContent = `${data[8].negative}`
  document.getElementById("totalTestResultsData8").textContent = `${data[8].totalTestResults}`
  document.getElementById("deathData8").textContent = `${data[8].death}`
  document.getElementById("percentPositive8").textContent = percentPositive8

  document.getElementById("stateData9").textContent = `${data[9].state}`
  document.getElementById("positiveData9").textContent = `${data[9].positive}`
  document.getElementById("negativeData9").textContent = `${data[9].negative}`
  document.getElementById("totalTestResultsData9").textContent = `${data[9].totalTestResults}`
  document.getElementById("deathData9").textContent = `${data[9].death}`
  document.getElementById("percentPositive9").textContent = percentPositive9

  document.getElementById("stateData10").textContent = `${data[10].state}`
  document.getElementById("positiveData10").textContent = `${data[10].positive}`
  document.getElementById("negativeData10").textContent = `${data[10].negative}`
  document.getElementById("totalTestResultsData10").textContent = `${data[10].totalTestResults}`
  document.getElementById("deathData10").textContent = `${data[10].death}`
  document.getElementById("percentPositive10").textContent = percentPositive10

  document.getElementById("stateData11").textContent = `${data[11].state}`
  document.getElementById("positiveData11").textContent = `${data[11].positive}`
  document.getElementById("negativeData11").textContent = `${data[11].negative}`
  document.getElementById("totalTestResultsData11").textContent = `${data[11].totalTestResults}`
  document.getElementById("deathData11").textContent = `${data[11].death}`
  document.getElementById("percentPositive11").textContent = percentPositive11

  document.getElementById("stateData12").textContent = `${data[12].state}`
  document.getElementById("positiveData12").textContent = `${data[12].positive}`
  document.getElementById("negativeData12").textContent = `${data[12].negative}`
  document.getElementById("totalTestResultsData12").textContent = `${data[12].totalTestResults}`
  document.getElementById("deathData12").textContent = `${data[12].death}`
  document.getElementById("percentPositive12").textContent = percentPositive12

  document.getElementById("stateData13").textContent = `${data[13].state}`
  document.getElementById("positiveData13").textContent = `${data[13].positive}`
  document.getElementById("negativeData13").textContent = `${data[13].negative}`
  document.getElementById("totalTestResultsData13").textContent = `${data[13].totalTestResults}`
  document.getElementById("deathData13").textContent = `${data[13].death}`
  document.getElementById("percentPositive13").textContent = percentPositive13

  document.getElementById("stateData14").textContent = `${data[14].state}`
  document.getElementById("positiveData14").textContent = `${data[14].positive}`
  document.getElementById("negativeData14").textContent = `${data[14].negative}`
  document.getElementById("totalTestResultsData14").textContent = `${data[14].totalTestResults}`
  document.getElementById("deathData14").textContent = `${data[14].death}`
  document.getElementById("percentPositive14").textContent = percentPositive14

  document.getElementById("stateData15").textContent = `${data[15].state}`
  document.getElementById("positiveData15").textContent = `${data[15].positive}`
  document.getElementById("negativeData15").textContent = `${data[15].negative}`
  document.getElementById("totalTestResultsData15").textContent = `${data[15].totalTestResults}`
  document.getElementById("deathData15").textContent = `${data[15].death}`
  document.getElementById("percentPositive15").textContent = percentPositive15

  document.getElementById("stateData16").textContent = `${data[16].state}`
  document.getElementById("positiveData16").textContent = `${data[16].positive}`
  document.getElementById("negativeData16").textContent = `${data[16].negative}`
  document.getElementById("totalTestResultsData16").textContent = `${data[16].totalTestResults}`
  document.getElementById("deathData16").textContent = `${data[16].death}`
  document.getElementById("percentPositive16").textContent = percentPositive16

  document.getElementById("stateData17").textContent = `${data[17].state}`
  document.getElementById("positiveData17").textContent = `${data[17].positive}`
  document.getElementById("negativeData17").textContent = `${data[17].negative}`
  document.getElementById("totalTestResultsData17").textContent = `${data[17].totalTestResults}`
  document.getElementById("deathData17").textContent = `${data[17].death}`
  document.getElementById("percentPositive17").textContent = percentPositive17

  document.getElementById("stateData18").textContent = `${data[18].state}`
  document.getElementById("positiveData18").textContent = `${data[18].positive}`
  document.getElementById("negativeData18").textContent = `${data[18].negative}`
  document.getElementById("totalTestResultsData18").textContent = `${data[18].totalTestResults}`
  document.getElementById("deathData18").textContent = `${data[18].death}`
  document.getElementById("percentPositive18").textContent = percentPositive18

  document.getElementById("stateData19").textContent = `${data[19].state}`
  document.getElementById("positiveData19").textContent = `${data[19].positive}`
  document.getElementById("negativeData19").textContent = `${data[19].negative}`
  document.getElementById("totalTestResultsData19").textContent = `${data[19].totalTestResults}`
  document.getElementById("deathData19").textContent = `${data[19].death}`
  document.getElementById("percentPositive19").textContent = percentPositive19
  
  document.getElementById("stateData20").textContent = `${data[20].state}`
  document.getElementById("positiveData20").textContent = `${data[20].positive}`
  document.getElementById("negativeData20").textContent = `${data[20].negative}`
  document.getElementById("totalTestResultsData20").textContent = `${data[20].totalTestResults}`
  document.getElementById("deathData20").textContent = `${data[20].death}`
  document.getElementById("percentPositive20").textContent = percentPositive20
  
  document.getElementById("stateData21").textContent = `${data[21].state}`
  document.getElementById("positiveData21").textContent = `${data[21].positive}`
  document.getElementById("negativeData21").textContent = `${data[21].negative}`
  document.getElementById("totalTestResultsData21").textContent = `${data[21].totalTestResults}`
  document.getElementById("deathData21").textContent = `${data[21].death}`
  document.getElementById("percentPositive21").textContent = percentPositive21

  document.getElementById("stateData22").textContent = `${data[22].state}`
  document.getElementById("positiveData22").textContent = `${data[22].positive}`
  document.getElementById("negativeData22").textContent = `${data[22].negative}`
  document.getElementById("totalTestResultsData22").textContent = `${data[22].totalTestResults}`
  document.getElementById("deathData22").textContent = `${data[22].death}`
  document.getElementById("percentPositive22").textContent = percentPositive22
  
  document.getElementById("stateData23").textContent = `${data[23].state}`
  document.getElementById("positiveData23").textContent = `${data[23].positive}`
  document.getElementById("negativeData23").textContent = `${data[23].negative}`
  document.getElementById("totalTestResultsData23").textContent = `${data[23].totalTestResults}`
  document.getElementById("deathData23").textContent = `${data[23].death}`
  document.getElementById("percentPositive23").textContent = percentPositive23
  
  document.getElementById("stateData24").textContent = `${data[24].state}`
  document.getElementById("positiveData24").textContent = `${data[24].positive}`
  document.getElementById("negativeData24").textContent = `${data[24].negative}`
  document.getElementById("totalTestResultsData24").textContent = `${data[24].totalTestResults}`
  document.getElementById("deathData24").textContent = `${data[24].death}`
  document.getElementById("percentPositive24").textContent = percentPositive24
  
  document.getElementById("stateData25").textContent = `${data[25].state}`
  document.getElementById("positiveData25").textContent = `${data[25].positive}`
  document.getElementById("negativeData25").textContent = `${data[25].negative}`
  document.getElementById("totalTestResultsData25").textContent = `${data[25].totalTestResults}`
  document.getElementById("deathData25").textContent = `${data[25].death}`
  document.getElementById("percentPositive25").textContent = percentPositive25
  
  document.getElementById("stateData26").textContent = `${data[26].state}`
  document.getElementById("positiveData26").textContent = `${data[26].positive}`
  document.getElementById("negativeData26").textContent = `${data[26].negative}`
  document.getElementById("totalTestResultsData26").textContent = `${data[26].totalTestResults}`
  document.getElementById("deathData26").textContent = `${data[26].death}`
  document.getElementById("percentPositive26").textContent = percentPositive26

  document.getElementById("stateData27").textContent = `${data[27].state}`
  document.getElementById("positiveData27").textContent = `${data[27].positive}`
  document.getElementById("negativeData27").textContent = `${data[27].negative}`
  document.getElementById("totalTestResultsData27").textContent = `${data[27].totalTestResults}`
  document.getElementById("deathData27").textContent = `${data[27].death}`
  document.getElementById("percentPositive27").textContent = percentPositive27

  document.getElementById("stateData28").textContent = `${data[28].state}`
  document.getElementById("positiveData28").textContent = `${data[28].positive}`
  document.getElementById("negativeData28").textContent = `${data[28].negative}`
  document.getElementById("totalTestResultsData28").textContent = `${data[28].totalTestResults}`
  document.getElementById("deathData28").textContent = `${data[28].death}`
  document.getElementById("percentPositive28").textContent = percentPositive28

  document.getElementById("stateData29").textContent = `${data[29].state}`
  document.getElementById("positiveData29").textContent = `${data[29].positive}`
  document.getElementById("negativeData29").textContent = `${data[29].negative}`
  document.getElementById("totalTestResultsData29").textContent = `${data[29].totalTestResults}`
  document.getElementById("deathData29").textContent = `${data[29].death}`
  document.getElementById("percentPositive29").textContent = percentPositive29

  document.getElementById("stateData30").textContent = `${data[30].state}`
  document.getElementById("positiveData30").textContent = `${data[30].positive}`
  document.getElementById("negativeData30").textContent = `${data[30].negative}`
  document.getElementById("totalTestResultsData30").textContent = `${data[30].totalTestResults}`
  document.getElementById("deathData30").textContent = `${data[30].death}`
  document.getElementById("percentPositive30").textContent = percentPositive30

  document.getElementById("stateData31").textContent = `${data[31].state}`
  document.getElementById("positiveData31").textContent = `${data[31].positive}`
  document.getElementById("negativeData31").textContent = `${data[31].negative}`
  document.getElementById("totalTestResultsData31").textContent = `${data[31].totalTestResults}`
  document.getElementById("deathData31").textContent = `${data[31].death}`
  document.getElementById("percentPositive31").textContent = percentPositive31

  document.getElementById("stateData32").textContent = `${data[32].state}`
  document.getElementById("positiveData32").textContent = `${data[32].positive}`
  document.getElementById("negativeData32").textContent = `${data[32].negative}`
  document.getElementById("totalTestResultsData32").textContent = `${data[32].totalTestResults}`
  document.getElementById("deathData32").textContent = `${data[32].death}`
  document.getElementById("percentPositive32").textContent = percentPositive32

  document.getElementById("stateData33").textContent = `${data[33].state}`
  document.getElementById("positiveData33").textContent = `${data[33].positive}`
  document.getElementById("negativeData33").textContent = `${data[33].negative}`
  document.getElementById("totalTestResultsData33").textContent = `${data[33].totalTestResults}`
  document.getElementById("deathData33").textContent = `${data[33].death}`
  document.getElementById("percentPositive33").textContent = percentPositive33

  document.getElementById("stateData34").textContent = `${data[34].state}`
  document.getElementById("positiveData34").textContent = `${data[34].positive}`
  document.getElementById("negativeData34").textContent = `${data[34].negative}`
  document.getElementById("totalTestResultsData34").textContent = `${data[34].totalTestResults}`
  document.getElementById("deathData34").textContent = `${data[34].death}`
  document.getElementById("percentPositive34").textContent = percentPositive34

  document.getElementById("stateData35").textContent = `${data[35].state}`
  document.getElementById("positiveData35").textContent = `${data[35].positive}`
  document.getElementById("negativeData35").textContent = `${data[35].negative}`
  document.getElementById("totalTestResultsData35").textContent = `${data[35].totalTestResults}`
  document.getElementById("deathData35").textContent = `${data[35].death}`
  document.getElementById("percentPositive35").textContent = percentPositive35

  document.getElementById("stateData36").textContent = `${data[36].state}`
  document.getElementById("positiveData36").textContent = `${data[36].positive}`
  document.getElementById("negativeData36").textContent = `${data[36].negative}`
  document.getElementById("totalTestResultsData36").textContent = `${data[36].totalTestResults}`
  document.getElementById("deathData36").textContent = `${data[36].death}`
  document.getElementById("percentPositive36").textContent = percentPositive36

  document.getElementById("stateData37").textContent = `${data[37].state}`
  document.getElementById("positiveData37").textContent = `${data[37].positive}`
  document.getElementById("negativeData37").textContent = `${data[37].negative}`
  document.getElementById("totalTestResultsData37").textContent = `${data[37].totalTestResults}`
  document.getElementById("deathData37").textContent = `${data[37].death}`
  document.getElementById("percentPositive37").textContent = percentPositive37

  document.getElementById("stateData38").textContent = `${data[38].state}`
  document.getElementById("positiveData38").textContent = `${data[38].positive}`
  document.getElementById("negativeData38").textContent = `${data[38].negative}`
  document.getElementById("totalTestResultsData38").textContent = `${data[38].totalTestResults}`
  document.getElementById("deathData38").textContent = `${data[38].death}`
  document.getElementById("percentPositive38").textContent = percentPositive38

  document.getElementById("stateData39").textContent = `${data[39].state}`
  document.getElementById("positiveData39").textContent = `${data[39].positive}`
  document.getElementById("negativeData39").textContent = `${data[39].negative}`
  document.getElementById("totalTestResultsData39").textContent = `${data[39].totalTestResults}`
  document.getElementById("deathData39").textContent = `${data[39].death}`
  document.getElementById("percentPositive39").textContent = percentPositive39

  document.getElementById("stateData40").textContent = `${data[40].state}`
  document.getElementById("positiveData40").textContent = `${data[40].positive}`
  document.getElementById("negativeData40").textContent = `${data[40].negative}`
  document.getElementById("totalTestResultsData40").textContent = `${data[40].totalTestResults}`
  document.getElementById("deathData40").textContent = `${data[40].death}`
  document.getElementById("percentPositive40").textContent = percentPositive40

  document.getElementById("stateData41").textContent = `${data[41].state}`
  document.getElementById("positiveData41").textContent = `${data[41].positive}`
  document.getElementById("negativeData41").textContent = `${data[41].negative}`
  document.getElementById("totalTestResultsData41").textContent = `${data[41].totalTestResults}`
  document.getElementById("deathData41").textContent = `${data[41].death}`
  document.getElementById("percentPositive41").textContent = percentPositive41

  document.getElementById("stateData42").textContent = `${data[42].state}`
  document.getElementById("positiveData42").textContent = `${data[42].positive}`
  document.getElementById("negativeData42").textContent = `${data[42].negative}`
  document.getElementById("totalTestResultsData42").textContent = `${data[42].totalTestResults}`
  document.getElementById("deathData42").textContent = `${data[42].death}`
  document.getElementById("percentPositive42").textContent = percentPositive42

  document.getElementById("stateData43").textContent = `${data[43].state}`
  document.getElementById("positiveData43").textContent = `${data[43].positive}`
  document.getElementById("negativeData43").textContent = `${data[43].negative}`
  document.getElementById("totalTestResultsData43").textContent = `${data[43].totalTestResults}`
  document.getElementById("deathData43").textContent = `${data[43].death}`
  document.getElementById("percentPositive43").textContent = percentPositive43

  document.getElementById("stateData44").textContent = `${data[44].state}`
  document.getElementById("positiveData44").textContent = `${data[44].positive}`
  document.getElementById("negativeData44").textContent = `${data[44].negative}`
  document.getElementById("totalTestResultsData44").textContent = `${data[44].totalTestResults}`
  document.getElementById("deathData44").textContent = `${data[44].death}`
  document.getElementById("percentPositive44").textContent = percentPositive44

  document.getElementById("stateData45").textContent = `${data[45].state}`
  document.getElementById("positiveData45").textContent = `${data[45].positive}`
  document.getElementById("negativeData45").textContent = `${data[45].negative}`
  document.getElementById("totalTestResultsData45").textContent = `${data[45].totalTestResults}`
  document.getElementById("deathData45").textContent = `${data[45].death}`
  document.getElementById("percentPositive45").textContent = percentPositive45

  document.getElementById("stateData46").textContent = `${data[46].state}`
  document.getElementById("positiveData46").textContent = `${data[46].positive}`
  document.getElementById("negativeData46").textContent = `${data[46].negative}`
  document.getElementById("totalTestResultsData46").textContent = `${data[46].totalTestResults}`
  document.getElementById("deathData46").textContent = `${data[46].death}`
  document.getElementById("percentPositive46").textContent = percentPositive46

  document.getElementById("stateData47").textContent = `${data[47].state}`
  document.getElementById("positiveData47").textContent = `${data[47].positive}`
  document.getElementById("negativeData47").textContent = `${data[47].negative}`
  document.getElementById("totalTestResultsData47").textContent = `${data[47].totalTestResults}`
  document.getElementById("deathData47").textContent = `${data[47].death}`
  document.getElementById("percentPositive47").textContent = percentPositive47

  document.getElementById("stateData48").textContent = `${data[48].state}`
  document.getElementById("positiveData48").textContent = `${data[48].positive}`
  document.getElementById("negativeData48").textContent = `${data[48].negative}`
  document.getElementById("totalTestResultsData48").textContent = `${data[48].totalTestResults}`
  document.getElementById("deathData48").textContent = `${data[48].death}`
  document.getElementById("percentPositive48").textContent = percentPositive48

  document.getElementById("stateData49").textContent = `${data[49].state}`
  document.getElementById("positiveData49").textContent = `${data[49].positive}`
  document.getElementById("negativeData49").textContent = `${data[49].negative}`
  document.getElementById("totalTestResultsData49").textContent = `${data[49].totalTestResults}`
  document.getElementById("deathData49").textContent = `${data[49].death}`
  document.getElementById("percentPositive49").textContent = percentPositive49

  document.getElementById("stateData50").textContent = `${data[50].state}`
  document.getElementById("positiveData50").textContent = `${data[50].positive}`
  document.getElementById("negativeData50").textContent = `${data[50].negative}`
  document.getElementById("totalTestResultsData50").textContent = `${data[50].totalTestResults}`
  document.getElementById("deathData50").textContent = `${data[50].death}`
  document.getElementById("percentPositive50").textContent = percentPositive50
})

