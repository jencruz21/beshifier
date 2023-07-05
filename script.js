const text = document.getElementById('text')
const beshy = document.getElementById('beshy')
const beshify = document.getElementById('beshify')
const copy = document.getElementById('copy')

beshify.addEventListener('click', () => {
    let value = text.value
    let beshifiedText = ""
    for (let i = 0; i < value.length; i++) {
        if (value[i] === " ") {
            beshifiedText += "🤸‍♀️"
        } else {
            beshifiedText += value[i]
        }
    }

    const rand = Math.floor(Math.random() * (10 - 1) + 1)
    let tumble = ""
    
    for (let i = 0; i < rand; i++) {
        tumble += "🤸‍♀️"
    }
    beshy.value = beshifiedText + tumble 
})

copy.addEventListener('click', () => {
    // beshy.select();
    // beshy.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(beshy.value)
})