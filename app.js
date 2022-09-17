var a = +prompt('Enter first value')
var b = +prompt('Enter second value')
var c = prompt('Enter your sign')

if(c === '+'){
    document.write(a+b)
}
else if(c === '-'){
    document.write(a-b)
}

else if(c === '*'){
    document.write(a*b)
}

else if(c === '/'){
    document.write(a/b)
}

else{
    document.write('sharafat k dairey main kaam karo')
}