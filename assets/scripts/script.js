const input1 = document.querySelector('#weights')
const weightsToChose = document.querySelector('#list-0f-weights')
const evaluateBtn = document.querySelector('#evaluate')
const displayResults = document.querySelector('#display')

evaluateBtn.addEventListener('click', () => {
  if (input1.value.trim() === '') {
    window.alert('Please input two weights to balance')
  } else if (weightsToChose.value.trim() === '') {
    window.alert(
      'Please input optional weights to select from for scale balancing'
    )
  } else {
    const elementoneArr = input1.value.split(',').map(Number)
    const elementtwoArr = weightsToChose.value.split(',').map(Number)

    if (elementoneArr.length !== 2 || elementoneArr[0] === 0) {
      displayResults.innerHTML =
        "<span class='error'>Weight added is less or more than two integers. Only two comma seperated weights can be added</span>"
    } else {
      // the scale balancing is processed by calling the balanceScale function
      displayResults.innerHTML = balanceScale(elementoneArr, elementtwoArr)
    }
  }
})

function balanceScale (elementone, elementtwo) {
  const diff = ((elementone[1] - elementone[0]) ** 2) ** (1 / 2) // equivalence of Math.abs();

  if (diff === 0) return 'scale is already balanced'

  let vall1, vall2, result1, result2
  for (let i = 0; i < elementtwo.length; i++) {
    for (let j = 0; j < elementtwo.length; j++) {
      result1 = parseInt(elementone[0]) + parseInt(elementtwo[i])
      result2 = parseInt(elementone[1]) + parseInt(elementtwo[j])
      if (result1 === result2) {
        vall1 = elementtwo[j]
        vall2 = elementtwo[i]

        if (elementone[0] >= elementone[1]) {
          if (vall1 >= vall2) { return `The balance weight of ${elementone} are : ${vall2} and ${vall1}` } else { return `The balance weight of ${elementone} are : ${vall1} and ${vall2}` }
        } else {
          if (vall1 >= vall2) { return `The balance weight of ${elementone} are : ${vall1} and ${vall2}` } else { return `The balance weight of ${elementone} are : ${vall2} and ${vall1}` }
        }
      }
    }
  }

  return "<span class='error'>Scale Imbalanced</span>"
}
