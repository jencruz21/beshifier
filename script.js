const text = document.getElementById('text')
const beshy = document.getElementById('beshy')
const beshify = document.getElementById('beshify')

beshify.addEventListener('click', (e) => {
    let value = text.value
    let beshifiedText = ""
    for (let i = 0; i < value.length; i++) {
        if (value[i] === " ") {
            beshifiedText += "🤸‍♀️"
        } else {
            beshifiedText += value[i]
        }
    }
    beshy.value = beshifiedText
})