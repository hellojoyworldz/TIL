const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word, index, array) => word.length > 6);
console.log(result)
console.log(words)

//배열의 모든 소수 찾기
const ary = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const res = ary.filter((num) => {
    console.log(num)
    for(let i=2; num > i; i++){
        if(num % i === 0) {  
            return false;
        }
    }
    return num > 1
})

console.log(res)

// JSON에서 유효하지 않은 항목 걸러내기
// 다음 예제는 filter()를 사용하여 모든 요소의 id가 0이 아닌 숫자인 필터링된 JSON을 생성합니다
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
let invalidEntries = 0;
const arrById = arr.filter((item) => {
    console.log(Number.isFinite(item.id))
    if(Number.isFinite(item.id) && item.id !== 0){
        return true
    }
    invalidEntries ++
    return false
})
console.log(arrById)
console.log(invalidEntries)

//희소 배열에 filter() 사용
//filter()는 빈 슬롯을 건너뜁니다.
console.log([1,'', , undefined].filter((x) => x === undefined))
console.log([1,'', , undefined].filter((x) => x !== 2))

// true 반환
console.log([0, 1,true, false, '', , null, undefined].filter((x) => x ))

// 배열이 아닌 객체에서 filter() 호출하기
// filter() 메서드는 this의 length 속성을 읽은 다음, 키가 length보다 작은 음수가 아닌 정수 키의 각 속성에 모두 접근합니다.
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "a", // length가 3이므로 filter에 의해 무시됩니다.
}
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));

// 초기 배열에 영향주기(수정, 추가, 삭제)
// 각 단어 수정 - 영향 O
let words2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const modifiedWords = words2.filter((word, index, arr) => {
    arr[index + 1] += " extra";
    console.log(arr)
    return word.length < 6;
});

console.log(modifiedWords);
console.log(words2)
// 길이 6 아래에 세 단어가 있지만, 수정되었으므로 한 단어가 반환됩니다.
// ["spray"]

// 새 단어 추가 - 영향 X
words2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words2.filter((word, index, arr) => {
    arr.push("new");
    console.log(index)
    console.log(arr)
    console.log(word)
    return words.length < 6;
});
console.log(appendedWords)
console.log(words2)
// 이제 `words` 자체에는 문자 길이가 6자 미만인 단어가 훨씬 더 많음에도 불구하고 조건에 맞는 단어는 3개뿐입니다.
// ["spray" ,"limit" ,"elite"]

// 단어 삭제 - 영향O
words2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words2.filter((word, index, arr) => {
    console.log(index)
    console.log(word)
    arr.pop();
    return word.length < 6;
});

console.log(deleteWords);
// filter가 'elite'에 도달하기도 전에 'words'가 pop되기 때문에 'elite'는 표시되지 않습니다.
// ["spray" ,"limit"]