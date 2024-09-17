
# 0. 시작
C언어와 Java는 main 부터 시작

#  1.  출력
큰 따옴표 안에 `\n`이 있는 경우는 개행(줄바꿈)
## C언어
**printf("%d", 10진수)**
**printf("%f", 실수형)**
printf("%o", 8진수)
printf("%x", 16진수)
**printf("%c", 문자)**
**printf("%s", 문자열)**

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