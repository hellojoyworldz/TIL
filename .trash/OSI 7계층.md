# 클라이언트-서버모델, OSI 7계층 소개

네트워크 기본적 구조  
클라이언트: 서버에 요청을 보냄  -> 요청을 보내는 곳
서버: 클라이언트에 응답 보냄  -> 응답을 보내는 곳

요청과 응답을 받을 때 데이터가 전송이 되는데, 데이터가 어떤식으로 만들어 지느냐 에서 OSI 7계층이 나온다.  

| OSI 7계층                 |
| ----------------------- |
| 응용 계층<br>표현 계층<br>세션 계층 |
| 전송 계층                   |
| 네트워크 계층                 |
| 데이터 링크 계층               |
| 물리 계층                   |

# 물리계층(L1, Physical)

컴퓨터는 0,1(비트)로 신호를 받는다.    
랜선을 통해 전기신호로 데이터가 왔다갔다 한다.   
![[images/84f3260955f165d71dcf181c801edc4f.jpg]]


이를 컴퓨터가 0과 1로 바꾼다. 이 역할을 하는게 랜카드   

랜카드가 0,1 <-> 전기신호로 바꿔준다.  
의도했던 전기신호와 다르게 올 수 있으니 검증을 한다. (패리티 비트)  
  
> 물리 계층
> 전기신호를 0,1로 바꿔주는 것  


# 데이터 링크 계층(L2, Data Link)

데이터가 어디로 가는지, 누구한테 가는지 나타내야 한다.  

| 프레임 | 0101   | 1001 | 0011 | 0011           | 00               |
| --- | ------ | ---- | ---- | -------------- | ---------------- |
|     | 목적지    | 출발지  | 유형   | 데이터            | 트레일러             |
|     | (데이터링크 | 계층의  | 데이터) | (네트워크 계층의 데이터) | (데이터링크 계층의 트레일러) |

목적지, 출발지, 유형, 데이터 등등 각자 역할이 있다.  
MAC주소: 48bit의 랜카드의 ID  
내 컴퓨터의 MAC 주소와 목적지의 MAC 주소가 있어 어디에서 어디로 갈 수 있는지 알 수 있다.  

목적지의 MAC 주소는 어떻게 알 수 있냐?    
옆사람한테 물어본다. 너가 받아서 다시 물어보고, 다른사람한테 물어보고, 쭉 가서 목적지를 알 수 있게된다.  
여기서 옆사람은 스위치나 허브 주소이다.  

![[images/12981677_1.jpg]]

데이터 링크에서 왔다갔다 하는 데이터를 프레임 이라고 한다.  
이더넷: 이더넷이라는 프로토콜을 통해 의미가 부여된다.   
WIFI: 무선으로 하면 와이파이.  
프로토콜: 약속. 이런식으로 해석하자는 약속임.  


>  데이터 링크  
>  0,1만 있으면 의미가 없으므로, 이를 이더넷이라는 프로토콜을 통해 의미가 부여된다.


# 네트워크 계층(L3, Network)

IP가 전부다.
IP: 기계들이 모여있는 네트워크 주소
공인IP: 다른사람과 소통 가능
사설IP: 10, 172.16 ~ 192.168(공유기 중 하나일 가능성이 높다) 
공유기: 192.168.0.1
브로드케스트(방송): 192.168.0.255 =>  네트워크 전부한테 전송
Loopback(localhost): 127.0.0.1 => 내 컴퓨터를 가르키는 특수IP

| IP   | 비트    |               |
| ---- | ----- | ------------- |
| IPv4 | 32비트  | 135.182.15.17 |
| IPv6 | 128비트 |               |

네트워크에는 대표 주소인 IP가 있으나, 개수 한정으로 내부 네트워크는 사설 IP를 사용한다.  

라우터: 스위치를 모아 네트워크를 구성한다.  
네트워크 데이터: 목적지IP+ 출발IP + 전송계층 데이터 => 네트워크 패킷

![[images/acx7100-48l-hero-1.avif]]
![[images/image.png]]

# 전송 계층(L4, Transport)