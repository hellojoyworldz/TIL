# 이벤트의 3단계 흐름

1. 캡처링 단계 - 이벤트가 하위 요소로 전파되는 단계
2. 타깃 단계 - 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계 - 이벤트가 상위 요소로 전파되는 단계

# Event Capturing

제일 상단에 있는 요소에서 아래로 이벤트가 내려오는 것

```
<div class="event-bubbling">
    <form>FORM
        <div>DIV
            <p>P</p>
        </div>
    </form>
</div>
<script>
    for(let element of document.querySelectorAll('*')){
        // 캡처링 확인
        element.addEventListener('click' ,(e) => console.log(`캡쳐링 : ${element.tagName}`), true)
        // 버블링 확인
        element.addEventListener('click' ,(e) => console.log(`버블링 : ${element.tagName}`))
    }
</script>
```

# Event Bubbling

가장 깊게 중첩된 요소에 이벤트가 발생했을 때 이벤트가 위로 전달되는 것

```
// p를 클릭했을 때 p -> div -> form 순서로 onclick 이벤트 발생
<div class="event-bubbling">
    <form onclick="alert('form')">FORM
        <div onclick="alert('div')">DIV
            <p onclick="alert('p')">P</p>
        </div>
    </form>
</div>

// p를 클릭해도 form onclick 이벤트 발생
<div class="event-bubbling2">
    <form onclick="alert('form')">FORM
        <div>DIV
            <p>P</p>
        </div>
    </form>
</div>
```

# Event Delegation

하위 요소의 이벤트를 상위 요소로 위임하는 것
