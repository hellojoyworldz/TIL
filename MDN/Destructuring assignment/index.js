var a,b,rest;

{
    [a,b] = [10,20]
    console.log(a)
}

{
    [a,b,,...rest] = [10,20,30,40,50]
    console.log(a)
    console.log(rest)
    console.log(rest[0])
}

{
    ({a,b,...rest} = {a:10, b:20, c:20,d :40})
    console.log(b)
    console.log(rest)
    console.log(rest.d)
}


var foo = ["one","two","three"];
var [red, yellow, green, blue='four', white] = foo
console.log(foo)
console.log(red)
console.log(blue)
console.log(white)