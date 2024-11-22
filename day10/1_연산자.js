// 개발자도구(f12) [console]탭 출력함수, console.log()
// html에서 알람창으로 input[입력] 함수,  prompt() 
//      - HTML 알람창에서 입력받은(문자- String) 값 반환 함수


/* 
연산자 : 연산 할때 사용되는 기호
    1. 산술연산자 : 결과 --> 하나의 연산결과를 값 반환
        + 더하기, - 빼기, *곱하기, / 나누기, % 나머지 , pasrseInt() - 소수점을 버리고 정수로 변환

    2. 연결연산자
        + 연결(문자가 포함되어있으면)

    3. 비교연산자
    4. 관계연산자
    5. 대입연산자
    6. 증감연산자
    7. 삼항연산자


    문자열 -----> 숫자타입 변환하는 방법 prompt로 받으면 문자가 되버림
        1.곱셈연산 이용한 방법, 문자"10" -> 숫자 10으로 변환  
            "10"*1 
        
        2. 변환 함수 Number()
            Number("10")

    숫자 타입 ----> 문자열 변환 방법
        1. 연결연산 이용한 방법, 숫자 10에다가 문자 "10" 으로 변환
        10 + ''  ==? '10'

        2. 문자로 변환 함수 String()
            String(10)  ==> " 10 "

    * 타입변환이 필요한 이유? 프론트엔드 (html/css/js)   <---통신(http)---> 백엔드(java/db)
    * 다형성 : 다양한 형태를 가지는 성질, 데이터가 타입이 변환이 된다.
          
*/

// 1. 산술연산자
console.log(10 + 3) // 더하기 13
console.log(10-3)   // 빼기 7
console.log(10*3)  // 곱하기 30
console.log(10/3)  // 나누기 3.3333
console.log(10%3) //  나머지 1
console.log(parseInt(10/3)) //소수점을 버리고 정수 부분만 반환, 3
console.log( `점수 : ` +10)       //  연결--> '점수 :' 문자와 10 숫자가 연결되면 문자가 된다.



//[지문 1] prompt 함수로 국어, 영어, 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 
//평균을 계산하여 console탭에 출력하시오

// (1) 입력/ 저장 : prompt 함수로 데이터를 입력받아 변수에 저장


let 국어점수 = Number(prompt('국어점수:')) // prompt합수로 데이터를 입력받아 변수에 저장
let 영어점수 = Number(prompt('영어점수:'))
let 수학점수 = Number(prompt('수학점수:'))

console.log( typeof 국어점수) //입력받은 값이 저장된 변수 

// (2) 연상 : 총점 (더하기) , 평균 (더하기/ 나누기)
let 총점 = 국어점수 + 영어점수 + 수학점수
let 평균 = 총점 / 3
//3 (3) 출력 : 
console.log( `[1] 총점 :${총점}, 평균 :${평균}`) /* `백틱 템플릿` : `문자${변수의 값 호출}문자` */






//[지문2] prompt 함수로 반지름을 입력받아서 원넓이 [반지름 * 반지름*3.14]계산하여 console탭에 출력하시오

//[지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.

