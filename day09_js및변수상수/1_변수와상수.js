
/* 
   [JS 리터럴 데이터]
   Number(숫자) : 10, 3.14
   String(문자열) : "", '' , 
   Boolean(논리) : true, false  
   undefined : 값이 없다는 뜻 

   [변수] : 하나의 자료/데이터 저장하는 메모리 공간
       1.let   : 변수를 선언하기 위한 키워드
       2.변수명  : 메모리 공간의 상징적인 이름
       3.=  : 오른쪽 항을 왼쪽 항에 대입/넣는다.
       4.데이터 : 리터럴, 변수에 저장할 테이터

    [상수] : 하나의 자료/데이터 저장하는 메모리 공간 (선언 이후에 수정 불가능)
        1. const : 상수를 선언하기 위한 키워드
        2. 상수명 : 메모리 공간의 상징적인 이름
        3. =     : 오른쪽 항을 왼쪽 항에 대입/넣는다
        4. 데이터 : 변수에 저장할 데이터
*/
//데이터를 다루는 방법은 만든사람이 만들어서 그대로 따라가야함

let name = "유재석"  /*  */// [1] 변수 선언

name            // [2] 변수가 갖는 (데이터) 반환    변수만 쓰면 데이터를 반환함

name = "강호동"  /*  */// [3] 변수의 데이터 변경

let name2 = name + 10;  //[4]변ㅅ수가 갖는 데이터와 다른 데이터와 연산/계산 가능

const age = 40;         // [1] 상수선언

age                 // [2] 상수가 갖는 (데이터)반환

age = 100       //[3] 상수의 데이터 변경, 코드에서는 문제 없지만, 실행 결과 오류가 출력된다.
// Asssignment to constana variavle. :상수가 갖는 데이터는 변경할 수 없다.

let age2 = age + 20;    //[4] 상수가 갖는 데이터와 다른 데이터와 연산가능


//오류시 번역이나 구글링으로 찾아보기



//[생각해보기] 아래 코드에서 변수의 개수와 리터럴의 개수를 파악하시오
let point1 = 50         //변수는 point1         , 리터럴/값/데이터  : 50
let point2 = 100        //변수는 pint3          , 리터럴/값/데이터  : 100
let point3 = point1 + point2  // 변수는 : pint3 , 리터럴/값/데이터 :
    //동시에 2개이상 연산을 불가능하다.
    //let point3 = point1 + point2  (연산순서)
    // [1] = 대입연산자 기준으로 오른쪽 코드 우선,
    // [2] 변수의 값 호출 , 50
    // [3] 변수의 값 호출 , 100
    // [4] + 연산자, 50 + 100 => (값자기 만들어진 값이 아님! 유니코드나 아스카 코드를 이용해서 알고 있는 리터럴 값을 꺼내온것) 150
    // [5] + 연산 결과를 왼쪽 항에 대입, let point3 = 150

//변수 3개, 데이터 3개   50과 100 2개의 리터럴... 150은 갑자기 나온것이 아니기에 리터럴 이라고 하는듯?

// [생각해보기2] 함수/연산 이란? 하나의 결과를 내는 작업

//[생각해보기3] 변수명이 왜 필요한지? 중복값 배제하기 위해서 컴퓨터는 리터럴 10 10 2개를 그냥 같은거로 인식하기 떄문

