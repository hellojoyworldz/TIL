# 1. 데이터 자료형

## C언어 데이터 종류
정수형 (Integer Types)  
• short: 작은 정수 (출력 형식 지정자: %d 또는 %hd)  
• int: 정수 (출력 형식 지정자: %d)  
• long: 큰 정수 (출력 형식 지정자: %ld)

문자형 (Character Type)  
• char: 문자 (출력 형식 지정자: %c)

실수형 (Floating-Point Types)  
• float: 단정밀도 부동 소수점 (출력 형식 지정자: %f)  
• double: 배정밀도 부동 소수점 (출력 형식 지정자: %lf)

기타 자료형  
• void: 값을 반환하지 않는 함수의 반환 타입 또는 범용 포인터

```c
#include <stdio.h>  

int main() {  
    char c = 'A';  
    char str[] = "Hello, World!";  

    printf("Character: %c\n", c);  
    printf("String: %s\n", str);  

    short s = -1024;  
    int i = 65536;  
    long l = 123456789L;  

    printf("Short integer: %hd\n", s);  
    printf("Integer: %d\n", i);  
    printf("Long integer: %ld\n", l);  

    float f = 3.14f;  
    double d = 2.71828;  

    printf("Float: %.2f\n", f);  
    printf("Double: %.5lf\n", d);  
}

```

## C언어에서의 문자열
문자열 배열로 할당  
```c
char str1[] = "Hello" ;
``` 

문자열 포인터로 할당  
```c
char *str2 = "Hello" ;
```  

문자열 배열로 할당 

```c
char str3[] = {'H', 'e', 'l', 'l', 'o', '\0'};
```  

문자열 배열 할당 후 개별 문자 할당  
```c
char str4[6];  
str4[0] = 'H';  
str4[1] = 'e';  
str4[2] = 'l';  
str4[3] = 'l';  
str4[4] = 'o';  
str4[5] = '\0';
```

## C언어의 참 거짓
0: 거짓, 0 이외의 숫자: 참
```c
#include <stdio.h>

int main(){
	int a = 5;
	int b = 0;

	if(a){
		printf("a는참입니다.\n");
	}else{
		printf("a는거짓입니다.\n");
	}
	
	if(b){
		printf("b는참입니다.\n");
	}else{
		printf("b는거짓입니다.\n");
	}
}
```

`#include <stdbool.h>`를 붙여야  true, false 사용할 수 있다.
```c
#include <stdbool.h> // bool, true, false가 정의된 헤더파일

int main(){
	bool flag1 = true;
	bool flag2 = false;
	if(flag1){ 
		printf("flag1는참입니다.\n"); 
	}else{ 
		printf("flag1는거짓입니다.\n"); 
	} 
	
	if(flag2){ 
		printf("flag2는참입니다.\n"); 
	}else{ 
		printf("flag2는거짓입니다.\n"); 
	}
}
```

## C언어 자료형 암기할 것 요약
1. 숫자형, 문자형, 배열은 시험에서 단골
2. 0: 거짓, 그 외의 값: 참

# 2. 배열과 문자열
## 배열 
같은 형태의 데이터를 하나의 변수에 여러개 넣는 것
`{c} (데이터형태) (변수명) = {데이터 여러개}`

```c
// 정수 배열  
int intArray[] = {1, 2, 3, 4, 5};   // 크기를 정하지 않음
int intArray[5] = {1, 2, 3, 4, 5};  // 5개만 가능

// 문자 배열  
char charArray[] = {'a', 'b', 'c', 'd', 'e'};  
char charArray[5] = {'a', 'b', 'c', 'd', 'e'};  

// 실수 배열  
float floatArray[] = {1.2, 3.4, 5.6, 7.8, 9.0};  
float floatArray[9] = {1.2, 3.4, 5.6, 7.8, 9.0, 1.2, 3.4, 5.6, 7.8};  

// 문자열 배열  
char *stringArray[] = {"apple", "banana", "cherry", "date", "elderberry"};  
char stringArray[20] = {"apple", "banana", "cherry", "date", "elderberry"};
```

## 문자열
문자가 여러 개 합쳐진 것
### 문자열 선언
`{c} char str[] = "Hello"`
`{c} char str2[10] = "Hello"`
`{c} char *str3 = "Hello"`
`{c} char str4[] = {'H','e','l','l','o'}`

```c
#include <stdio.h>

int main() {
	// 문자열 선언
	char str1[] = "Hello, World!";  
	printf("%s\n", str1);  
	
	char str2[20] = "Hello, World!";  
	printf("%s\n", str2);  
	
	// 문자열 포인트함수로 선언
	char *str3 = "Hello, World!";  
	printf("%s\n", str3);  

	// 문자열 배열 선언
	char str4[] = {'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'};  
	printf("%s\n", str4);  
	
	char *str5 = "Hello, ""World!";  
	printf("%s\n", str5);  
}
```

```c

#include <stdio.h>
#include <string.h>  

int main() {  
    char str1[] = "Hello, World!";  
    char str2[20];  
    strcpy(str2, str1);  // strcpy: 복사해서 넣어둔다
    printf("%s\n", str2);  
    return 0;  
}  

```

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h> 

int main() {  
    char *str1 = "Hello, World!";  
    char *str2 = (char *)malloc(strlen(str1) + 1);  // str + 1만큼 공간을 할당받는 것
    strcpy(str2, str1);  
    printf("%s\n", str2);  
    free(str2);  // 없애는 것
    return 0;  
}
```


### 문자열 출력
`{c} printf("%s", "Hello")`
`{c} printf("%c", "H")`
```c
#include <stdio.h>  
#include <string.h>  

int main() {  
    char str[] = "Hello, World!"; // 문자열 선언  

    // 1. %s 형식 지정자로 출력  
    printf("1. %s\n", str);  

    // 2. puts 함수로 출력 (자동 개행)  
    puts("2. ");  
    puts(str);  

    // 3. 인덱스로 문자 하나씩 출력  
    printf("3. ");  
    for (int i = 0; str[i] != '\0'; i++) {  
        printf("%c ", str[i]);  
    }  

	puts(""); 

    // 4. 포인터 연산으로 문자 하나씩 출력  
    printf("4. ");  
    char *ptr = str;  
    while (*ptr != '\0') {  
        printf("%c", *ptr);  
        ptr++;  
    }  
    
	puts("");

    // 5. strlen 함수를 사용하여 문자 하나씩 출력  
    printf("5. ");  
    int len = strlen(str);  // 문자열 길이 가져옴
    for (int i = 0; i < len; i++) {  
        printf("%c", str[i]);  // 문자는 %c로 출력
    }  
}
```

## 배열과 문자열 출력
```c
#include <stdio.h>  
#include <string.h>  

int main() {  
    char str[] = "Hello, World!"; // 문자열 선언  
    char arr[] = {'A', 'B', 'C', 'D', 'E', '\0'}; // 문자 배열 선언  

    printf("String: %s\n", str);  

    printf("Array (Pointer Arithmetic): ");  
    char *ptr = arr;  
    while (*ptr != '\0') {  
        printf("%c", *ptr);  
        ptr++;  
    }  
    printf("\n");  

    printf("Array (Index): ");  
    for (int i = 0; i < strlen(arr); i++) {  
        printf("%c", arr[i]);  
    }  
    printf("\n");  

    printf("Array (%%s): %s\n", arr);  
    return 0;  
}
```

## 배열과 문자열 요약

1. 배열은 인덱스 0부터 시작한다. 변수명[0]부터 시작하고, 인덱스를 기준으로 반복문을 많이 구성한다.  

2. C언어에서 문자와 문자열은 거의 차이가 없다. 문자를 여러 개 묶어 놓은 것 뿐이며 맨 끝에 '\0' 문자가 들어간다.  

3. 문자열을 변수로 할당하는 방식은 다양하다. [], [0], * 등 다양한 방식으로 선언할 수 있다.  

1. 출력할 때는 %c로 반복하며 출력하거나, %s로 한번에 출력할 수 있다.

# 3. 포인터의 개념과 활용
c언어는 메모리에 접근할 수 있다.
`&` (ampersand, 앰퍼샌드) 이 변수의 **메모리 상의 주소**가 무엇이니?  
`*` (asterisk, 애스터리스크) 그 주소(addr)가 가리키고 있는 값(value)을 가져와라  

c언어에서는 주소를 저장할 수 있는 변수를 포인터 변수라고 부름
포인터 변수는 변수 앞에 `*` 를 붙여서 만들어주고, 값을 주소로 줘야함


```c
#include <stdio.h>
#include <string.h>

int main(){
	int answer1 = 42; //  정수가 들어갈 수 있는 answer 변수에 42 값을 넣어라.
	int answer2 = answer1;
	printf("%d\n", answer1); // answer 변수를 “십진수\n” 형태로 출력하라. (%d의 d는 decimal)  
	printf("%d\n", &answer1);// answer 변수가 저장되어있는 메모리 주소를 출력하라.
	printf("%d\n", &answer2);

	int n = 42;
	int *p = &n;
	printf("%d\n", p);
	printf("%d\n", &n);
}
```

## 포인터 변수
```c
#include <stdio.h>

int main(){
	int n = 50;
	int *p = &n; // 변수일 때 포인터 변수(주소가 가르키고 있는 값)
	printf("%d\n", n); 
	printf("%d\n", *p);// 호출할 때 주소의 내용물(실제 값 )
}
```
