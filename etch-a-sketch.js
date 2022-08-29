// function to create the number of needed square divs in the grid
let viewerNum = 0

function askForNumber(){
    let answer = prompt("How many squares per side?")
    return viewerNum = parseInt(answer)
}

function gridCreator(number){
    number = viewerNum
    for(let i=1; i <= (number*number); i++){
        let div = document.createElement('div')
        let textDiv = document.createTextNode("Water")
        div.setAttribute('id', `div${i}`)
        div.setAttribute('style', `flex-basis: ${(1/number)*100}%;
        width: ${((1/number)*500)}px; height: ${((1/number)*500)}px`)
        div.appendChild(textDiv)
        document.getElementById("gridContainer").appendChild(div)
    }
}
askForNumber()
gridCreator()


//function to change grid div color when it's passed over (hover)


// function that connects to button in HTML that asks user for the 
// number of squares they want along side of grid (set limit to 100)


// extra credit: see if you can make colors change (either on purpose
// or at random), or get darker if passed over multiple times