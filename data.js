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
  
  const percentPositive0 = data[0].positive / data[0].totalTestResults * 100
  const percentPositive1 = data[1].positive / data[1].totalTestResults * 100
  const percentPositive2 = data[2].positive / data[2].totalTestResults * 100
  const percentPositive3 = data[3].positive / data[3].totalTestResults * 100
  const percentPositive4 = data[4].positive / data[4].totalTestResults * 100
  const percentPositive5 = data[5].positive / data[5].totalTestResults * 100
  const percentPositive6 = data[6].positive / data[6].totalTestResults * 100
  const percentPositive7 = data[7].positive / data[7].totalTestResults * 100
  const percentPositive8 = data[8].positive / data[8].totalTestResults * 100
  const percentPositive9 = data[9].positive / data[9].totalTestResults * 100
  const percentPositive10 = data[10].positive / data[10].totalTestResults * 100
  const percentPositive11 = data[11].positive / data[11].totalTestResults * 100
  const percentPositive12 = data[12].positive / data[12].totalTestResults * 100
  const percentPositive13 = data[13].positive / data[13].totalTestResults * 100
  const percentPositive14 = data[14].positive / data[14].totalTestResults * 100
  const percentPositive15 = data[15].positive / data[15].totalTestResults * 100
  const percentPositive16 = data[16].positive / data[16].totalTestResults * 100
  const percentPositive17 = data[17].positive / data[17].totalTestResults * 100
  const percentPositive18 = data[18].positive / data[18].totalTestResults * 100
  const percentPositive19 = data[19].positive / data[19].totalTestResults * 100
  const percentPositive20 = data[20].positive / data[20].totalTestResults * 100
  const percentPositive21 = data[21].positive / data[21].totalTestResults * 100
  const percentPositive22 = data[22].positive / data[22].totalTestResults * 100
  const percentPositive23 = data[23].positive / data[23].totalTestResults * 100
  const percentPositive24 = data[24].positive / data[24].totalTestResults * 100
  const percentPositive25 = data[25].positive / data[25].totalTestResults * 100
  const percentPositive26 = data[26].positive / data[26].totalTestResults * 100
  const percentPositive27 = data[27].positive / data[27].totalTestResults * 100
  const percentPositive28 = data[28].positive / data[28].totalTestResults * 100
  const percentPositive29 = data[29].positive / data[29].totalTestResults * 100
  const percentPositive30 = data[30].positive / data[30].totalTestResults * 100
  const percentPositive31 = data[31].positive / data[31].totalTestResults * 100
  const percentPositive32 = data[32].positive / data[32].totalTestResults * 100
  const percentPositive33 = data[33].positive / data[33].totalTestResults * 100
  const percentPositive34 = data[34].positive / data[34].totalTestResults * 100
  const percentPositive35 = data[35].positive / data[35].totalTestResults * 100
  const percentPositive36 = data[36].positive / data[36].totalTestResults * 100
  const percentPositive37 = data[37].positive / data[37].totalTestResults * 100
  const percentPositive38 = data[38].positive / data[38].totalTestResults * 100
  const percentPositive39 = data[39].positive / data[39].totalTestResults * 100
  const percentPositive40 = data[40].positive / data[40].totalTestResults * 100
  const percentPositive41 = data[41].positive / data[41].totalTestResults * 100
  const percentPositive42 = data[42].positive / data[42].totalTestResults * 100
  const percentPositive43 = data[43].positive / data[43].totalTestResults * 100
  const percentPositive44 = data[44].positive / data[44].totalTestResults * 100
  const percentPositive45 = data[45].positive / data[45].totalTestResults * 100
  const percentPositive46 = data[46].positive / data[46].totalTestResults * 100
  const percentPositive47 = data[47].positive / data[47].totalTestResults * 100
  const percentPositive48 = data[48].positive / data[48].totalTestResults * 100
  const percentPositive49 = data[49].positive / data[49].totalTestResults * 100
  const percentPositive50 = data[50].positive / data[50].totalTestResults * 100
  /*const percentPositive51 = data[51].positive / data[51].totalTestResults
  const percentPositive52 = data[52].positive / data[52].totalTestResults
  const percentPositive53 = data[53].positive / data[53].totalTestResults
  const percentPositive54 = data[54].positive / data[54].totalTestResults
  const percentPositive55 = data[55].positive / data[55].totalTestResults
  const percentPositive56 = data[56].positive / data[56].totalTestResults*/

  const percentDeathOfPositive0 = data[0].death / data[0].positive * 100
  const percentDeathOfPositive1 = data[1].death / data[1].positive * 100
  const percentDeathOfPositive2 = data[2].death / data[2].positive * 100
  const percentDeathOfPositive3 = data[3].death / data[3].positive * 100
  const percentDeathOfPositive4 = data[4].death/ data[4].positive * 100
  const percentDeathOfPositive5 = data[5].death / data[5].positive * 100
  const percentDeathOfPositive6 = data[6].death / data[6].positive * 100
  const percentDeathOfPositive7 = data[7].death / data[7].positive * 100
  const percentDeathOfPositive8 = data[8].death / data[8].positive * 100
  const percentDeathOfPositive9 = data[9].death / data[9].positive * 100
  const percentDeathOfPositive10 = data[10].death / data[10].positive * 100
  const percentDeathOfPositive11 = data[11].death / data[11].positive * 100
  const percentDeathOfPositive12 = data[12].death / data[12].positive * 100
  const percentDeathOfPositive13 = data[13].death / data[13].positive * 100
  const percentDeathOfPositive14 = data[14].death / data[14].positive * 100
  const percentDeathOfPositive15 = data[15].death / data[15].positive * 100
  const percentDeathOfPositive16 = data[16].death / data[16].positive * 100
  const percentDeathOfPositive17 = data[17].death / data[17].positive * 100
  const percentDeathOfPositive18 = data[18].death / data[18].positive * 100
  const percentDeathOfPositive19 = data[19].death / data[19].positive * 100
  const percentDeathOfPositive20 = data[20].death / data[20].positive * 100
  const percentDeathOfPositive21 = data[21].death / data[21].positive * 100
  const percentDeathOfPositive22 = data[22].death / data[22].positive * 100
  const percentDeathOfPositive23 = data[23].death / data[23].positive * 100
  const percentDeathOfPositive24 = data[24].death / data[24].positive * 100
  const percentDeathOfPositive25 = data[25].death / data[25].positive * 100
  const percentDeathOfPositive26 = data[26].death / data[26].positive * 100
  const percentDeathOfPositive27 = data[27].death / data[27].positive * 100
  const percentDeathOfPositive28 = data[28].death / data[28].positive * 100
  const percentDeathOfPositive29 = data[29].death / data[29].positive * 100
  const percentDeathOfPositive30 = data[30].death / data[30].positive * 100
  const percentDeathOfPositive31 = data[31].death / data[31].positive * 100
  const percentDeathOfPositive32 = data[32].death / data[32].positive * 100
  const percentDeathOfPositive33 = data[33].death / data[33].positive * 100
  const percentDeathOfPositive34 = data[34].death / data[34].positive * 100
  const percentDeathOfPositive35 = data[35].death / data[35].positive * 100
  const percentDeathOfPositive36 = data[36].death / data[36].positive * 100
  const percentDeathOfPositive37 = data[37].death / data[37].positive * 100
  const percentDeathOfPositive38 = data[38].death / data[38].positive * 100
  const percentDeathOfPositive39 = data[39].death / data[39].positive * 100
  const percentDeathOfPositive40 = data[40].death / data[40].positive * 100
  const percentDeathOfPositive41 = data[41].death / data[41].positive * 100
  const percentDeathOfPositive42 = data[42].death / data[42].positive * 100
  const percentDeathOfPositive43 = data[43].death / data[43].positive * 100
  const percentDeathOfPositive44 = data[44].death / data[44].positive * 100
  const percentDeathOfPositive45 = data[45].death / data[45].positive * 100
  const percentDeathOfPositive46 = data[46].death / data[46].positive * 100
  const percentDeathOfPositive47 = data[47].death / data[47].positive * 100
  const percentDeathOfPositive48 = data[48].death / data[48].positive * 100
  const percentDeathOfPositive49 = data[49].death / data[49].positive * 100
  const percentDeathOfPositive50 = data[50].death / data[50].positive * 100

  document.getElementById("stateData0").innerHTML = `${data[0].state}`
  document.getElementById("positiveData0").innerHTML = `${data[0].positive}`
  document.getElementById("negativeData0").innerHTML = `${data[0].negative}`
  document.getElementById("totalTestResultsData0").innerHTML = `${data[0].totalTestResults}`
  document.getElementById("deathData0").innerHTML = `${data[0].death}`
  document.getElementById("percentPositive0").innerHTML = percentPositive0
  document.getElementById("percentDeathOfPositive0").innerHTML = percentDeathOfPositive0

  document.getElementById("stateData1").innerHTML = `${data[1].state}`
  document.getElementById("positiveData1").innerHTML = `${data[1].positive}`
  document.getElementById("negativeData1").innerHTML = `${data[1].negative}`
  document.getElementById("totalTestResultsData1").innerHTML = `${data[1].totalTestResults}`
  document.getElementById("deathData1").innerHTML = `${data[1].death}`
  document.getElementById("percentPositive1").innerHTML = percentPositive1
  document.getElementById("percentDeathOfPositive1").innerHTML = percentDeathOfPositive1

  document.getElementById("stateData2").innerHTML = `${data[2].state}`
  document.getElementById("positiveData2").innerHTML = `${data[2].positive}`
  document.getElementById("negativeData2").innerHTML = `${data[2].negative}`
  document.getElementById("totalTestResultsData2").innerHTML = `${data[2].totalTestResults}`
  document.getElementById("deathData2").innerHTML = `${data[2].death}`
  document.getElementById("percentPositive2").innerHTML = percentPositive2
  document.getElementById("percentDeathOfPositive2").innerHTML = percentDeathOfPositive2

  document.getElementById("stateData3").innerHTML = `${data[3].state}`
  document.getElementById("positiveData3").innerHTML = `${data[3].positive}`
  document.getElementById("negativeData3").innerHTML = `${data[3].negative}`
  document.getElementById("totalTestResultsData3").innerHTML = `${data[3].totalTestResults}`
  document.getElementById("deathData3").innerHTML = `${data[3].death}`
  document.getElementById("percentPositive3").innerHTML = percentPositive3
  document.getElementById("percentDeathOfPositive3").innerHTML = percentDeathOfPositive3


  document.getElementById("stateData4").innerHTML = `${data[4].state}`
  document.getElementById("positiveData4").innerHTML = `${data[4].positive}`
  document.getElementById("negativeData4").innerHTML = `${data[4].negative}`
  document.getElementById("totalTestResultsData4").innerHTML = `${data[4].totalTestResults}`
  document.getElementById("deathData4").innerHTML = `${data[4].death}`
  document.getElementById("percentPositive4").innerHTML = percentPositive4
  document.getElementById("percentDeathOfPositive4").innerHTML = percentDeathOfPositive4

  document.getElementById("stateData5").innerHTML = `${data[5].state}`
  document.getElementById("positiveData5").innerHTML = `${data[5].positive}`
  document.getElementById("negativeData5").innerHTML = `${data[5].negative}`
  document.getElementById("totalTestResultsData5").innerHTML = `${data[5].totalTestResults}`
  document.getElementById("deathData5").innerHTML = `${data[5].death}`
  document.getElementById("percentPositive5").innerHTML = percentPositive5
  document.getElementById("percentDeathOfPositive5").innerHTML = percentDeathOfPositive5

  document.getElementById("stateData6").innerHTML = `${data[6].state}`
  document.getElementById("positiveData6").innerHTML = `${data[6].positive}`
  document.getElementById("negativeData6").innerHTML = `${data[6].negative}`
  document.getElementById("totalTestResultsData6").innerHTML = `${data[6].totalTestResults}`
  document.getElementById("deathData6").innerHTML = `${data[6].death}`
  document.getElementById("percentPositive6").innerHTML = percentPositive6
  document.getElementById("percentDeathOfPositive6").innerHTML = percentDeathOfPositive6

  document.getElementById("stateData7").innerHTML = `${data[7].state}`
  document.getElementById("positiveData7").innerHTML = `${data[7].positive}`
  document.getElementById("negativeData7").innerHTML = `${data[7].negative}`
  document.getElementById("totalTestResultsData7").innerHTML = `${data[7].totalTestResults}`
  document.getElementById("deathData7").innerHTML = `${data[7].death}`
  document.getElementById("percentPositive7").innerHTML = percentPositive7
  document.getElementById("percentDeathOfPositive7").innerHTML = percentDeathOfPositive7

  document.getElementById("stateData8").innerHTML = `${data[8].state}`
  document.getElementById("positiveData8").innerHTML = `${data[8].positive}`
  document.getElementById("negativeData8").innerHTML = `${data[8].negative}`
  document.getElementById("totalTestResultsData8").innerHTML = `${data[8].totalTestResults}`
  document.getElementById("deathData8").innerHTML = `${data[8].death}`
  document.getElementById("percentPositive8").innerHTML = percentPositive8
  document.getElementById("percentDeathOfPositive8").innerHTML = percentDeathOfPositive8

  document.getElementById("stateData9").innerHTML = `${data[9].state}`
  document.getElementById("positiveData9").innerHTML = `${data[9].positive}`
  document.getElementById("negativeData9").innerHTML = `${data[9].negative}`
  document.getElementById("totalTestResultsData9").innerHTML = `${data[9].totalTestResults}`
  document.getElementById("deathData9").innerHTML = `${data[9].death}`
  document.getElementById("percentPositive9").innerHTML = percentPositive9
  document.getElementById("percentDeathOfPositive9").innerHTML = percentDeathOfPositive9

  document.getElementById("stateData10").innerHTML = `${data[10].state}`
  document.getElementById("positiveData10").innerHTML = `${data[10].positive}`
  document.getElementById("negativeData10").innerHTML = `${data[10].negative}`
  document.getElementById("totalTestResultsData10").innerHTML = `${data[10].totalTestResults}`
  document.getElementById("deathData10").innerHTML = `${data[10].death}`
  document.getElementById("percentPositive10").innerHTML = percentPositive10
  document.getElementById("percentDeathOfPositive10").innerHTML = percentDeathOfPositive10

  document.getElementById("stateData11").innerHTML = `${data[11].state}`
  document.getElementById("positiveData11").innerHTML = `${data[11].positive}`
  document.getElementById("negativeData11").innerHTML = `${data[11].negative}`
  document.getElementById("totalTestResultsData11").innerHTML = `${data[11].totalTestResults}`
  document.getElementById("deathData11").innerHTML = `${data[11].death}`
  document.getElementById("percentPositive11").innerHTML = percentPositive11
  document.getElementById("percentDeathOfPositive11").innerHTML = percentDeathOfPositive11

  document.getElementById("stateData12").innerHTML = `${data[12].state}`
  document.getElementById("positiveData12").innerHTML = `${data[12].positive}`
  document.getElementById("negativeData12").innerHTML = `${data[12].negative}`
  document.getElementById("totalTestResultsData12").innerHTML = `${data[12].totalTestResults}`
  document.getElementById("deathData12").innerHTML = `${data[12].death}`
  document.getElementById("percentPositive12").innerHTML = percentPositive12
  document.getElementById("percentDeathOfPositive12").innerHTML = percentDeathOfPositive12

  document.getElementById("stateData13").innerHTML = `${data[13].state}`
  document.getElementById("positiveData13").innerHTML = `${data[13].positive}`
  document.getElementById("negativeData13").innerHTML = `${data[13].negative}`
  document.getElementById("totalTestResultsData13").innerHTML = `${data[13].totalTestResults}`
  document.getElementById("deathData13").innerHTML = `${data[13].death}`
  document.getElementById("percentPositive13").innerHTML = percentPositive13
  document.getElementById("percentDeathOfPositive13").innerHTML = percentDeathOfPositive13

  document.getElementById("stateData14").innerHTML = `${data[14].state}`
  document.getElementById("positiveData14").innerHTML = `${data[14].positive}`
  document.getElementById("negativeData14").innerHTML = `${data[14].negative}`
  document.getElementById("totalTestResultsData14").innerHTML = `${data[14].totalTestResults}`
  document.getElementById("deathData14").innerHTML = `${data[14].death}`
  document.getElementById("percentPositive14").innerHTML = percentPositive14
  document.getElementById("percentDeathOfPositive14").innerHTML = percentDeathOfPositive14

  document.getElementById("stateData15").innerHTML = `${data[15].state}`
  document.getElementById("positiveData15").innerHTML = `${data[15].positive}`
  document.getElementById("negativeData15").innerHTML = `${data[15].negative}`
  document.getElementById("totalTestResultsData15").innerHTML = `${data[15].totalTestResults}`
  document.getElementById("deathData15").innerHTML = `${data[15].death}`
  document.getElementById("percentPositive15").innerHTML = percentPositive15
  document.getElementById("percentDeathOfPositive15").innerHTML = percentDeathOfPositive15

  document.getElementById("stateData16").innerHTML = `${data[16].state}`
  document.getElementById("positiveData16").innerHTML = `${data[16].positive}`
  document.getElementById("negativeData16").innerHTML = `${data[16].negative}`
  document.getElementById("totalTestResultsData16").innerHTML = `${data[16].totalTestResults}`
  document.getElementById("deathData16").innerHTML = `${data[16].death}`
  document.getElementById("percentPositive16").innerHTML = percentPositive16
  document.getElementById("percentDeathOfPositive16").innerHTML = percentDeathOfPositive16

  document.getElementById("stateData17").innerHTML = `${data[17].state}`
  document.getElementById("positiveData17").innerHTML = `${data[17].positive}`
  document.getElementById("negativeData17").innerHTML = `${data[17].negative}`
  document.getElementById("totalTestResultsData17").innerHTML = `${data[17].totalTestResults}`
  document.getElementById("deathData17").innerHTML = `${data[17].death}`
  document.getElementById("percentPositive17").innerHTML = percentPositive17
  document.getElementById("percentDeathOfPositive17").innerHTML = percentDeathOfPositive17

  document.getElementById("stateData18").innerHTML = `${data[18].state}`
  document.getElementById("positiveData18").innerHTML = `${data[18].positive}`
  document.getElementById("negativeData18").innerHTML = `${data[18].negative}`
  document.getElementById("totalTestResultsData18").innerHTML = `${data[18].totalTestResults}`
  document.getElementById("deathData18").innerHTML = `${data[18].death}`
  document.getElementById("percentPositive18").innerHTML = percentPositive18
  document.getElementById("percentDeathOfPositive18").innerHTML = percentDeathOfPositive18

  document.getElementById("stateData19").innerHTML = `${data[19].state}`
  document.getElementById("positiveData19").innerHTML = `${data[19].positive}`
  document.getElementById("negativeData19").innerHTML = `${data[19].negative}`
  document.getElementById("totalTestResultsData19").innerHTML = `${data[19].totalTestResults}`
  document.getElementById("deathData19").innerHTML = `${data[19].death}`
  document.getElementById("percentPositive19").innerHTML = percentPositive19
  document.getElementById("percentDeathOfPositive19").innerHTML = percentDeathOfPositive19
  
  document.getElementById("stateData20").innerHTML = `${data[20].state}`
  document.getElementById("positiveData20").innerHTML = `${data[20].positive}`
  document.getElementById("negativeData20").innerHTML = `${data[20].negative}`
  document.getElementById("totalTestResultsData20").innerHTML = `${data[20].totalTestResults}`
  document.getElementById("deathData20").innerHTML = `${data[20].death}`
  document.getElementById("percentPositive20").innerHTML = percentPositive20
  document.getElementById("percentDeathOfPositive20").innerHTML = percentDeathOfPositive20
  
  document.getElementById("stateData21").innerHTML = `${data[21].state}`
  document.getElementById("positiveData21").innerHTML = `${data[21].positive}`
  document.getElementById("negativeData21").innerHTML = `${data[21].negative}`
  document.getElementById("totalTestResultsData21").innerHTML = `${data[21].totalTestResults}`
  document.getElementById("deathData21").innerHTML = `${data[21].death}`
  document.getElementById("percentPositive21").innerHTML = percentPositive21
  document.getElementById("percentDeathOfPositive21").innerHTML = percentDeathOfPositive21

  document.getElementById("stateData22").innerHTML = `${data[22].state}`
  document.getElementById("positiveData22").innerHTML = `${data[22].positive}`
  document.getElementById("negativeData22").innerHTML = `${data[22].negative}`
  document.getElementById("totalTestResultsData22").innerHTML = `${data[22].totalTestResults}`
  document.getElementById("deathData22").innerHTML = `${data[22].death}`
  document.getElementById("percentPositive22").innerHTML = percentPositive22
  document.getElementById("percentDeathOfPositive22").innerHTML = percentDeathOfPositive22
  
  document.getElementById("stateData23").innerHTML = `${data[23].state}`
  document.getElementById("positiveData23").innerHTML = `${data[23].positive}`
  document.getElementById("negativeData23").innerHTML = `${data[23].negative}`
  document.getElementById("totalTestResultsData23").innerHTML = `${data[23].totalTestResults}`
  document.getElementById("deathData23").innerHTML = `${data[23].death}`
  document.getElementById("percentPositive23").innerHTML = percentPositive23
  document.getElementById("percentDeathOfPositive23").innerHTML = percentDeathOfPositive23
  
  document.getElementById("stateData24").innerHTML = `${data[24].state}`
  document.getElementById("positiveData24").innerHTML = `${data[24].positive}`
  document.getElementById("negativeData24").innerHTML = `${data[24].negative}`
  document.getElementById("totalTestResultsData24").innerHTML = `${data[24].totalTestResults}`
  document.getElementById("deathData24").innerHTML = `${data[24].death}`
  document.getElementById("percentPositive24").innerHTML = percentPositive24
  document.getElementById("percentDeathOfPositive24").innerHTML = percentDeathOfPositive24
  
  document.getElementById("stateData25").innerHTML = `${data[25].state}`
  document.getElementById("positiveData25").innerHTML = `${data[25].positive}`
  document.getElementById("negativeData25").innerHTML = `${data[25].negative}`
  document.getElementById("totalTestResultsData25").innerHTML = `${data[25].totalTestResults}`
  document.getElementById("deathData25").innerHTML = `${data[25].death}`
  document.getElementById("percentPositive25").innerHTML = percentPositive25
  document.getElementById("percentDeathOfPositive25").innerHTML = percentDeathOfPositive25
  
  document.getElementById("stateData26").innerHTML = `${data[26].state}`
  document.getElementById("positiveData26").innerHTML = `${data[26].positive}`
  document.getElementById("negativeData26").innerHTML = `${data[26].negative}`
  document.getElementById("totalTestResultsData26").innerHTML = `${data[26].totalTestResults}`
  document.getElementById("deathData26").innerHTML = `${data[26].death}`
  document.getElementById("percentPositive26").innerHTML = percentPositive26
  document.getElementById("percentDeathOfPositive26").innerHTML = percentDeathOfPositive26

  document.getElementById("stateData27").innerHTML = `${data[27].state}`
  document.getElementById("positiveData27").innerHTML = `${data[27].positive}`
  document.getElementById("negativeData27").innerHTML = `${data[27].negative}`
  document.getElementById("totalTestResultsData27").innerHTML = `${data[27].totalTestResults}`
  document.getElementById("deathData27").innerHTML = `${data[27].death}`
  document.getElementById("percentPositive27").innerHTML = percentPositive27
  document.getElementById("percentDeathOfPositive27").innerHTML = percentDeathOfPositive27

  document.getElementById("stateData28").innerHTML = `${data[28].state}`
  document.getElementById("positiveData28").innerHTML = `${data[28].positive}`
  document.getElementById("negativeData28").innerHTML = `${data[28].negative}`
  document.getElementById("totalTestResultsData28").innerHTML = `${data[28].totalTestResults}`
  document.getElementById("deathData28").innerHTML = `${data[28].death}`
  document.getElementById("percentPositive28").innerHTML = percentPositive28
  document.getElementById("percentDeathOfPositive28").innerHTML = percentDeathOfPositive28

  document.getElementById("stateData29").innerHTML = `${data[29].state}`
  document.getElementById("positiveData29").innerHTML = `${data[29].positive}`
  document.getElementById("negativeData29").innerHTML = `${data[29].negative}`
  document.getElementById("totalTestResultsData29").innerHTML = `${data[29].totalTestResults}`
  document.getElementById("deathData29").innerHTML = `${data[29].death}`
  document.getElementById("percentPositive29").innerHTML = percentPositive29
  document.getElementById("percentDeathOfPositive29").innerHTML = percentDeathOfPositive29

  document.getElementById("stateData30").innerHTML = `${data[30].state}`
  document.getElementById("positiveData30").innerHTML = `${data[30].positive}`
  document.getElementById("negativeData30").innerHTML = `${data[30].negative}`
  document.getElementById("totalTestResultsData30").innerHTML = `${data[30].totalTestResults}`
  document.getElementById("deathData30").innerHTML = `${data[30].death}`
  document.getElementById("percentPositive30").innerHTML = percentPositive30
  document.getElementById("percentDeathOfPositive30").innerHTML = percentDeathOfPositive30

  document.getElementById("stateData31").innerHTML = `${data[31].state}`
  document.getElementById("positiveData31").innerHTML = `${data[31].positive}`
  document.getElementById("negativeData31").innerHTML = `${data[31].negative}`
  document.getElementById("totalTestResultsData31").innerHTML = `${data[31].totalTestResults}`
  document.getElementById("deathData31").innerHTML = `${data[31].death}`
  document.getElementById("percentPositive31").innerHTML = percentPositive31
  document.getElementById("percentDeathOfPositive31").innerHTML = percentDeathOfPositive31

  document.getElementById("stateData32").innerHTML = `${data[32].state}`
  document.getElementById("positiveData32").innerHTML = `${data[32].positive}`
  document.getElementById("negativeData32").innerHTML = `${data[32].negative}`
  document.getElementById("totalTestResultsData32").innerHTML = `${data[32].totalTestResults}`
  document.getElementById("deathData32").innerHTML = `${data[32].death}`
  document.getElementById("percentPositive32").innerHTML = percentPositive32
  document.getElementById("percentDeathOfPositive32").innerHTML = percentDeathOfPositive32

  document.getElementById("stateData33").innerHTML = `${data[33].state}`
  document.getElementById("positiveData33").innerHTML = `${data[33].positive}`
  document.getElementById("negativeData33").innerHTML = `${data[33].negative}`
  document.getElementById("totalTestResultsData33").innerHTML = `${data[33].totalTestResults}`
  document.getElementById("deathData33").innerHTML = `${data[33].death}`
  document.getElementById("percentPositive33").innerHTML = percentPositive33
  document.getElementById("percentDeathOfPositive33").innerHTML = percentDeathOfPositive33

  document.getElementById("stateData34").innerHTML = `${data[34].state}`
  document.getElementById("positiveData34").innerHTML = `${data[34].positive}`
  document.getElementById("negativeData34").innerHTML = `${data[34].negative}`
  document.getElementById("totalTestResultsData34").innerHTML = `${data[34].totalTestResults}`
  document.getElementById("deathData34").innerHTML = `${data[34].death}`
  document.getElementById("percentPositive34").innerHTML = percentPositive34
  document.getElementById("percentDeathOfPositive34").innerHTML = percentDeathOfPositive34

  document.getElementById("stateData35").innerHTML = `${data[35].state}`
  document.getElementById("positiveData35").innerHTML = `${data[35].positive}`
  document.getElementById("negativeData35").innerHTML = `${data[35].negative}`
  document.getElementById("totalTestResultsData35").innerHTML = `${data[35].totalTestResults}`
  document.getElementById("deathData35").innerHTML = `${data[35].death}`
  document.getElementById("percentPositive35").innerHTML = percentPositive35
  document.getElementById("percentDeathOfPositive35").innerHTML = percentDeathOfPositive35

  document.getElementById("stateData36").innerHTML = `${data[36].state}`
  document.getElementById("positiveData36").innerHTML = `${data[36].positive}`
  document.getElementById("negativeData36").innerHTML = `${data[36].negative}`
  document.getElementById("totalTestResultsData36").innerHTML = `${data[36].totalTestResults}`
  document.getElementById("deathData36").innerHTML = `${data[36].death}`
  document.getElementById("percentPositive36").innerHTML = percentPositive36
  document.getElementById("percentDeathOfPositive36").innerHTML = percentDeathOfPositive36

  document.getElementById("stateData37").innerHTML = `${data[37].state}`
  document.getElementById("positiveData37").innerHTML = `${data[37].positive}`
  document.getElementById("negativeData37").innerHTML = `${data[37].negative}`
  document.getElementById("totalTestResultsData37").innerHTML = `${data[37].totalTestResults}`
  document.getElementById("deathData37").innerHTML = `${data[37].death}`
  document.getElementById("percentPositive37").innerHTML = percentPositive37
  document.getElementById("percentDeathOfPositive37").innerHTML = percentDeathOfPositive37

  document.getElementById("stateData38").innerHTML = `${data[38].state}`
  document.getElementById("positiveData38").innerHTML = `${data[38].positive}`
  document.getElementById("negativeData38").innerHTML = `${data[38].negative}`
  document.getElementById("totalTestResultsData38").innerHTML = `${data[38].totalTestResults}`
  document.getElementById("deathData38").innerHTML = `${data[38].death}`
  document.getElementById("percentPositive38").innerHTML = percentPositive38
  document.getElementById("percentDeathOfPositive38").innerHTML = percentDeathOfPositive38

  document.getElementById("stateData39").innerHTML = `${data[39].state}`
  document.getElementById("positiveData39").innerHTML = `${data[39].positive}`
  document.getElementById("negativeData39").innerHTML = `${data[39].negative}`
  document.getElementById("totalTestResultsData39").innerHTML = `${data[39].totalTestResults}`
  document.getElementById("deathData39").innerHTML = `${data[39].death}`
  document.getElementById("percentPositive39").innerHTML = percentPositive39
  document.getElementById("percentDeathOfPositive39").innerHTML = percentDeathOfPositive39

  document.getElementById("stateData40").innerHTML = `${data[40].state}`
  document.getElementById("positiveData40").innerHTML = `${data[40].positive}`
  document.getElementById("negativeData40").innerHTML = `${data[40].negative}`
  document.getElementById("totalTestResultsData40").innerHTML = `${data[40].totalTestResults}`
  document.getElementById("deathData40").innerHTML = `${data[40].death}`
  document.getElementById("percentPositive40").innerHTML = percentPositive40
  document.getElementById("percentDeathOfPositive40").innerHTML = percentDeathOfPositive40

  document.getElementById("stateData41").innerHTML = `${data[41].state}`
  document.getElementById("positiveData41").innerHTML = `${data[41].positive}`
  document.getElementById("negativeData41").innerHTML = `${data[41].negative}`
  document.getElementById("totalTestResultsData41").innerHTML = `${data[41].totalTestResults}`
  document.getElementById("deathData41").innerHTML = `${data[41].death}`
  document.getElementById("percentPositive41").innerHTML = percentPositive41
  document.getElementById("percentDeathOfPositive41").innerHTML = percentDeathOfPositive41

  document.getElementById("stateData42").innerHTML = `${data[42].state}`
  document.getElementById("positiveData42").innerHTML = `${data[42].positive}`
  document.getElementById("negativeData42").innerHTML = `${data[42].negative}`
  document.getElementById("totalTestResultsData42").innerHTML = `${data[42].totalTestResults}`
  document.getElementById("deathData42").innerHTML = `${data[42].death}`
  document.getElementById("percentPositive42").innerHTML = percentPositive42
  document.getElementById("percentDeathOfPositive42").innerHTML = percentDeathOfPositive42

  document.getElementById("stateData43").innerHTML = `${data[43].state}`
  document.getElementById("positiveData43").innerHTML = `${data[43].positive}`
  document.getElementById("negativeData43").innerHTML = `${data[43].negative}`
  document.getElementById("totalTestResultsData43").innerHTML = `${data[43].totalTestResults}`
  document.getElementById("deathData43").innerHTML = `${data[43].death}`
  document.getElementById("percentPositive43").innerHTML = percentPositive43
  document.getElementById("percentDeathOfPositive43").innerHTML = percentDeathOfPositive43

  document.getElementById("stateData44").innerHTML = `${data[44].state}`
  document.getElementById("positiveData44").innerHTML = `${data[44].positive}`
  document.getElementById("negativeData44").innerHTML = `${data[44].negative}`
  document.getElementById("totalTestResultsData44").innerHTML = `${data[44].totalTestResults}`
  document.getElementById("deathData44").innerHTML = `${data[44].death}`
  document.getElementById("percentPositive44").innerHTML = percentPositive44
  document.getElementById("percentDeathOfPositive44").innerHTML = percentDeathOfPositive44

  document.getElementById("stateData45").innerHTML = `${data[45].state}`
  document.getElementById("positiveData45").innerHTML = `${data[45].positive}`
  document.getElementById("negativeData45").innerHTML = `${data[45].negative}`
  document.getElementById("totalTestResultsData45").innerHTML = `${data[45].totalTestResults}`
  document.getElementById("deathData45").innerHTML = `${data[45].death}`
  document.getElementById("percentPositive45").innerHTML = percentPositive45
  document.getElementById("percentDeathOfPositive45").innerHTML = percentDeathOfPositive45

  document.getElementById("stateData46").innerHTML = `${data[46].state}`
  document.getElementById("positiveData46").innerHTML = `${data[46].positive}`
  document.getElementById("negativeData46").innerHTML = `${data[46].negative}`
  document.getElementById("totalTestResultsData46").innerHTML = `${data[46].totalTestResults}`
  document.getElementById("deathData46").innerHTML = `${data[46].death}`
  document.getElementById("percentPositive46").innerHTML = percentPositive46
  document.getElementById("percentDeathOfPositive46").innerHTML = percentDeathOfPositive46

  document.getElementById("stateData47").innerHTML = `${data[47].state}`
  document.getElementById("positiveData47").innerHTML = `${data[47].positive}`
  document.getElementById("negativeData47").innerHTML = `${data[47].negative}`
  document.getElementById("totalTestResultsData47").innerHTML = `${data[47].totalTestResults}`
  document.getElementById("deathData47").innerHTML = `${data[47].death}`
  document.getElementById("percentPositive47").innerHTML = percentPositive47
  document.getElementById("percentDeathOfPositive47").innerHTML = percentDeathOfPositive47

  document.getElementById("stateData48").innerHTML = `${data[48].state}`
  document.getElementById("positiveData48").innerHTML = `${data[48].positive}`
  document.getElementById("negativeData48").innerHTML = `${data[48].negative}`
  document.getElementById("totalTestResultsData48").innerHTML = `${data[48].totalTestResults}`
  document.getElementById("deathData48").innerHTML = `${data[48].death}`
  document.getElementById("percentPositive48").innerHTML = percentPositive48
  document.getElementById("percentDeathOfPositive48").innerHTML = percentDeathOfPositive48

  document.getElementById("stateData49").innerHTML = `${data[49].state}`
  document.getElementById("positiveData49").innerHTML = `${data[49].positive}`
  document.getElementById("negativeData49").innerHTML = `${data[49].negative}`
  document.getElementById("totalTestResultsData49").innerHTML = `${data[49].totalTestResults}`
  document.getElementById("deathData49").innerHTML = `${data[49].death}`
  document.getElementById("percentPositive49").innerHTML = percentPositive49
  document.getElementById("percentDeathOfPositive49").innerHTML = percentDeathOfPositive49

  document.getElementById("stateData50").innerHTML = `${data[50].state}`
  document.getElementById("positiveData50").innerHTML = `${data[50].positive}`
  document.getElementById("negativeData50").innerHTML = `${data[50].negative}`
  document.getElementById("totalTestResultsData50").innerHTML = `${data[50].totalTestResults}`
  document.getElementById("deathData50").innerHTML = `${data[50].death}`
  document.getElementById("percentPositive50").innerHTML = percentPositive50
  document.getElementById("percentDeathOfPositive50").innerHTML = percentDeathOfPositive50
})

