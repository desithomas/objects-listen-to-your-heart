//Create a stopwatch object that has four properties and three methods



// let stopwatch = {
//     color: "black", 
//     shape: "round", 
//     brand: "Aquaphor", 
//     buttons: "yes"
// }

// stopwatch.color

let stopwatch = {}

stopwatch.color = "black"
stopwatch.shape = 'round'
stopwatch.brand = "Nike"
stopwatch.seconds = 15 

stopwatch.start = function (){
    console.log('START RUNNING')
}

stopwatch.stop = function(){
    console.log('STOP!!!')
}

stopwatch.reset = function(){
    console.log('BEEEEPP')
}