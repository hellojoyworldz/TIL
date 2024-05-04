var anyString = "Mozilla"

// 만약 indexStart 가 indexEnd보다 큰 경우, substring() 메서드는 마치 두 개의 인자를 바꾼 듯 작동하게 됩니다. 아래 예제를 보세요.
console.log(anyString.substring(3,2))
console.log(anyString.substring(2,3))

// substring()와 의 차이점substr()
//  substr()시작 인덱스와 반환된 문자열에 포함할 문자 수를 나타냅니다.
console.log(anyString.substring(3,2))
console.log(anyString.substr(2,1))

// 음수일 떄 
console.log(anyString.substring(-14,2));
console.log(anyString.substring(-5, -2)); 

console.log(anyString.slice(-5,-4)); // => ""
console.log(anyString.slice(-5, -2)); // => "zil"
console.log(anyString.slice(5,6)); // 