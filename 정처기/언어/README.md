
# 0. 시작
C언어와 Java는 main 부터 시작

#  1.  출력
큰 따옴표 안에 `\n`이 있는 경우는 개행(줄바꿈)
## C언어
**printf("%d", 10진수)**. 
**printf("%f", 실수형)**. 
printf("%o", 8진수). 
printf("%x", 16진수). 
**printf("%c", 문자)**. 
**printf("%s", 문자열)**. 

> c언어는`\n` 로 개행을 한다

`printf("%f\n", 실수형)` 기본적으로 소수점 6자리까지 출력
`printf("%.1f\n", b)` 소수점 1자리까지 출력하도록 바꿔줌


```c 
#include <stdio.h>

int a = 31;
char b = 'h';        // 문자는 작은따옴표
char c[] = "hello";  // 문자열은 큰따옴표
int d = 1;
int e = 2;
float f = 3.14;
double g = 3.14;

int main(){
	printf("%d\n", a); 
	printf("%d", a);
	printf("%c\n", b);
	printf("%s\n", c);
	printf("%d\n%d\n", d,e);
	printf("%f\n", f);
	printf("%.2f\n", f);
	printf("%.1lf\n", g);
	printf("%.0f%.1f\n%d", g, g, a);
}

```


## Java
`System.out.println()`  개행 출력
`System.out.print()`  한줄로 출력

> 자바는 `~.println()`으로 개행을 한다


```java
public class Main {

    public static void main(String[] args) {
        int a = 31;
	    char b = 'h';
	    String c = "hello";
	    double d = 3.14326;
	    float e = 3.14f; // 부동소숫점 자료형 - f를 붙여야 한다
	    boolean f = true;
	
        System.out.print(a);
        System.out.println(b);
        System.out.println(c);
        System.out.printf("%s", b);
        System.out.printf("%c", b);
        System.out.printf("%s\n", c);
		System.out.printf("%.3f", d);
        
    }
}
```

## 파이썬
> 파이썬은 기본적으로 개행 
> print(a, end="") 는 개행하지 않음

`print(a)` = `print(a, end="\n")`
`end=""`  아무것도 없는 문자를 넣으면 개행이 되지 않는다

```python 
a = 31
b = 3.24327
print(a)
print(a+a)
print(a, end="\n")
print(a, end="-")
print(a, end="")
print(a)

print(b)
print(f"{b:.3f}")

```


# 2. 자료형 값 주의사항
## C언어

> C언어에서는 소수형을 int에 담으면 소수점 아래를 버린다.

```c
#include <stdio.h>

int a = 3.6;   // 정수 자료형
float b = 3.4; // 실수 자료형

int main(){
	printf("%d\n", a); // 소수점을 버려버린다
	printf("%f\n", b); 
	printf("%.3f\n", b);
	printf("%.8f\n", b);
	printf("%d\n", b); // %d는 정수형을 나타내므로 이상한값 출력
}
```

## Java

> 자바에서는 소수형을 int에 담을 수 없다.
```java
public class main{

	public static void main(String[] args) {
		//int a = 3.4;     // 정수 자료형 - 에러남 int는 소수를 담을 수 없음
		float b = 3.4f;    // 부동소숫점 자료형 - f를 붙여야 한다
		double c = 3.4;

		//System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}
```

# 3. 조건문

## C언어
조건식이 0이되는 경우는 false로 인식, 나머지 숫자는 true
```c
#include <stdio.h> 

int main(){
	if(3-3){
		printf("참\n");
	}else{
		printf("거짓\n");
	}

	if(3){
		printf("참\n");
	}else{
		printf("거짓\n");
	}

	if(3-3 == 0){
		printf("참\n");
	}else{
		printf("거짓\n");
	}

	if(true){
		printf("참\n");
	}

}
```

## Java
조건식에 숫자가 들어가면 오류가 발생
true, false 단어로 가능
```java
public class main{

	public static void main(String[] args) {
		int a = 1;
		if(a == 1){
			System.out.println("참");
		}else{
			System.out.println("거짓");
		}

		if(true){
			System.out.println("참");
		}else{
			System.out.println("거짓");
		}
	}
}
```


## 파이썬
비어있지 않은 객체(리스트, 문자열, 튜플)은 True
0이나 비어있는 객체는 False
True, False로 표기
```python
age = 8

if age <= 5:         # 조건식
	print("애기")
elif age >= 19:      # 다른 조건식 (if문에서 걸러저 온 것을 거르는 역할)
	print("성인")
else:                # 그 외
	print("미성년자")


num = 0
if num:
	print("참")
else:
	print("거짓")

ary = []
if ary:
	print("참")
else:
	print("거짓")


if True:
	print("참")
else:
	print("거짓")

```


# 4.  반복문
- for는 초기식과 조건식 잘 확인
- while은 조건식과 break 잘 봐야함
- do..while은 처음에 무조건 한 번 실행됨

> 몇번을 반복하는지 정확하게!
> 언제 빠져나가는지 잘 확인해야함!
## for
```c
#include <stdio.h>


int main(){
	// 초기식이 없는 경우
	int i = 0;
	for(; i<= 9; i++){
		printf("%d", i);
	}

	printf("\n");

	// 조건식이 없는 경우
	for(int j=0; ; j++){ // 무한루프
		printf("%d", j);
		if(j >= 9){  // 조건을 통해 빠져나옴
			break;   // 속해있는 블럭을 탈출
		}
	}
	
	printf("\n");

	// 증감식이 없는 경우
	for(int k=0; k <=9;){
		printf("%d", k);
		k++; // 증감
	}
}
```

##  while, do..while
```c
#include <stdio.h>

int main(){
	// while의 조건이 참이든 거짓이든
	// do는 한번 실행
	int i=10;
	do{
		printf("do..while: %d", i);
		i++;
	}while(i<10);

	int j=10;
	while(j<10){
		printf("while: %d",j);
		i++;
	}
}
```

## 5. 비교연산자와 반복문+조건문 문제풀이

### Q1.

```c
#include <stdio.h>  

int main() {  
    int a = 1, b = 1;  
    int sum = 0;  

	printf("%d%d%d\n", a,b,sum);

    while (a <= 5) {  
        if (b % 2 == 0) {  
            sum += b;  
        } else {  
            sum -= b;  
        }  
        a++;  
        b += 2;  
	    printf("%d%d%d\n", a,b,sum);
    }  

    printf("%d\n", sum);  
    return 0;  
}
```

### Q2
i가 2의 배수일 때 count_i++ , count_i가 5일 때 value_i=i
j가 3의 배수일 때 count_j++, count_j가 7일 때 value_j=i
value_i와 value_j가 0이 아닐 때 빠져나옴

```c
#include <stdio.h>

int main() {  
    int i = 1, j = 1;  
    int count_i = 0, count_j = 0;  
    int value_i = 0, value_j = 0;  

    while (i <= 50 && j <= 50) {  
        if (i % 2 == 0) {  
            count_i++;  
            if (count_i == 5) {  
                value_i = i;  
            }  
        }  
        if (j % 3 == 0) {  
            count_j++;  
            if (count_j == 7) {  
                value_j = j;  
            }  
        }  
        if (value_i != 0 && value_j != 0) {  
            printf("i: %d, j: %d\n", value_i, value_j);  
            break;  
        }  
        i++;  
        j++;

		printf("%d %d %d %d %d %d\n", i, j, count_i, count_j, value_i, value_j);
    }  
}
```

## 7. 함수(메서드) 선언과 호출
함수는 특정작업을 수행하기 위해 독립적으로 작성하는 블록 코드
입력값을 받고 결과값을 반환

정의와 호출: 함수에게 이름을 지어주고 기능을 붙여준다
입력값(파라미터): 함수에 던저주는 값. 함수(a,b,c)
리턴값: 함수가 기능을 모두 마치고 돌려주는 반환 값

**c언어 함수**
- 함수 앞에 리턴값 자료형이 있다
- main 이라고 적힌 함수부터 코드 시작

**자바 메서드**
- 메서드 앞에 뭔가 용어가 많다
- c언어와 같이 리턴값에 대한 자료형이 있다
- c언어와 같이 main 함수부터 코드가 시작
- 소문자 함수, class 대문자

**파이썬**
- 함수를 만들 때 def라는 키워드를 쓴다
- 자료형에 대한 힌트가 없다
- 함수 내용은 괄호가 아닌 들여쓰기


```python
def subtract(a,b):
 return a-b

result = subtract(10,3)
print("Result:", result)

```

```python
def square_elements(elements):  
    squared = [e ** 2 for e in elements]  
    return squared  

my_list = [1, 2, 3, 4]  
result = square_elements(my_list)  
print("Squared List:", result)
```

## 8. 연산자와 기출문제
**c언어의 문자열 붙이는 내장함수**
`strcat(str, " World");`

```c
#include <stdio.h>  
#include <string.h>  

int main() {  
    char str[50] = "Hello";  
    strcat(str, " World"); // str에 " World"를 연결  

    printf("str = %s\n", str);  
    return 0;  
}
```

**연산자 주의사항**
- 몫과 나머지 구분하는 것
- 문자, 문자열은 더하면 붙는다
- c언어는 내장 기능으로 문자열을 붙인다