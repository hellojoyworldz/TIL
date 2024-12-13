# Python

## 출력
 `"`, `'`,`"""`, `'''`을 사용한다.

### 한줄 출력
```python
print("Hello World");
print('Hello World');
print("""Hello World""");
print('''Hello World''');

```

### 두줄 출력
`\n`을 사용한다.
```python
print("Hello\nWorld");
print('Hello\nWorld');
print("""Hello
World""");
print('''Hello 
World''');
```

### 공백 사이에 두고 출력
`,` 를 사이에 두고 값을 넣는다.
```python
print(1,2)
```

### sep
구분자로 사용할 값을 지정한다.  
sep 설정이 따로 없을 때는 자동으로 공백으로 설정된다.
```python
print("name","Jun", sep=":")
```

### end

end라는 값에 \n문자가 기본으로 들어가있어 자동으로 개행이 된다.
```python
print("name", end=" : ");
print("Jun");

```
