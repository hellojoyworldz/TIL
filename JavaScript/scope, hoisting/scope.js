// var => 함수 레벨 스코프
function func(){
    if(true){
        var a ="a"
        console.log(a) // a
    }
    console.log(a) // a
}
func()



// let, const => 블록 레벨 스코프
function func2(){
    if(true){
        let b ="b"
        console.log(b) // b
    }
    console.log(b) // b is not a defined
}
func2() // b is not a defined
