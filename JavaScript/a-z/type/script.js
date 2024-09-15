/**
 * 원시타입: 고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당.
 * 참조타입: 데이터 크기가 정해지지 않고 Call Stack 메모리에 저장. 데이터의 값이 heap에 저장되며 변수에 heap 메모리의 주소값이 할당.
 * 
 * 자바스크립트 타입
 * 원시타입(Primitive Types): Boolean, String, Number, null, undefined, Symbole
 * 참조타입(Object Types): function, classes, Object, Array
 */

/** 
* 자바스크립트는 동적 타입
* 느슨한 타입(loosely typed)의 동적(dynamic) 언어
* 자바스크립트 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 및 재할당이 가능
* - 같은 변수가 여러개의 타입을 가질 수 있음
* - 타입을 명시하지 않아도 됨
* - 대부분의 다른 언어는 정적(Static)타입의 언어
*/
let foo = 42
foo = 'bar'
foo = true
foo = {a:'1'}
foo = [1,2,3]
console.log(foo)

// 배열인지 확인
// typeof로 확인하면 object가 나옴. isArray로 확인
const hobbies = ['Walking', 'books']
const address = {
    province: '경기도',
    city: '성남시'
}
console.log(typeof hobbies) //object
console.log(Array.isArray(hobbies)) // true