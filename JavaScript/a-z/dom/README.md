# window 객체

브라우저에서 제공하는 객체

```
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
```

# CRP(Critical Rendering Path)

웹 페이지 빌드 과정  
돔 조작할 때 마다 이 과정이 반복  
HTML -> DOM -> Render Tree -> Layout -> Print

# DOM(Documnet Object Model)

트리구조로 만든 객체 모델  
문서 객체 모델은 메모리에 웹 페이지 문서 구조를 트리구조로 표현해서 웹 브라우저가 HTML 페이지를 인식하게 해줌

```
window.document;
```

# BOM (Browser Object Model)

```
window.location;
window.navigator;
window.history;
window.screen;
```

# DOM 조작

DOM 트리를 DOM에서 제공해주는 API를 이용해서 조작할 수 있다.
