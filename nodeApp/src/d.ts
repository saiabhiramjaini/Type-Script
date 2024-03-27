// Adding types to a function

// This function takes another function 'fn' as a parameter
// The type annotation '() => void' indicates that 'fn' is a function that takes no arguments and does not return anything
function runAfter1Sec(fn: () => void){
    setTimeout(fn, 1000);
}

function fn(){
    console.log("hello")
}

runAfter1Sec(fn);