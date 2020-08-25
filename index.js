// Code your solutions in this file

function writeCards(arrayNames, eventName){
    const thankYous = []
    for(let i = 0; i < arrayNames.length; i++){
        thankYous.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYous
}

function countDown(number){
    while (number > 0){
        console.log(number)
        number --
    }
    console.log(number)
}