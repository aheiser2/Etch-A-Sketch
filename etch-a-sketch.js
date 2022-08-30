// function to create the number of needed square divs in the grid
let viewerNum = 0
let currentColor = "pink"

function askForNumber(){
    let answer = parseInt(prompt("How many squares per side?"))
    console.log(typeof answer)
    if(isNaN(answer)){
        alert("Not a number!")
        askForNumber()
    } else 
    if (answer >100){
        alert("Pick a number 100 or less, please")
        askForNumber()
    } else {
        return viewerNum = parseInt(answer)
    }
}
console.log(viewerNum)

function gridCreator(number){
    askForNumber()
    number = viewerNum
    for(let i=1; i <= (number*number); i++){
        let div = document.createElement('div')
        let textDiv = document.createTextNode("0")
        div.setAttribute('id', `div${i}`)
        div.setAttribute('style', `flex-basis: ${(1/number)*100}%;
        width: ${((1/number)*960)}px; height: ${((1/number)*960)}px`)
        // div.setAttribute('class', 'active')
        div.addEventListener("mouseover", hover)
        div.appendChild(textDiv)
        document.getElementById("gridContainer").appendChild(div)
    }
}
// askForNumber()
// console.log(viewerNum)

gridCreator()


//function to change grid div color when it's passed over (hover)
function hover(event){
    event.target.style.backgroundColor = `${currentColor}`
}


// function that connects to button in HTML that asks user for the 
// number of squares they want along side of grid (set limit to 100)

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    let divsToRemove = document.getElementsByTagName('div')
    for (let i = divsToRemove.length-1; i>= 0; i--){
        divsToRemove[i].remove()
    }
    gridCreator()
})


// extra credit: see if you can make colors change (either on purpose
// or at random), or get darker if passed over multiple times

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    let answer = prompt("What color do you want?")
    currentColor = answer
})