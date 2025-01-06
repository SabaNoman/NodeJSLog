function rotateString(mystring, iter){
    console.log(mystring.slice(-iter)+mystring.slice(0,-iter))
}

rotateString("Javascript", 2)