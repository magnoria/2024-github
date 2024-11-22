/* 
    조건문 : 조건문 문법
        - 조건의 결과값 : true  / false
        - 삼항연산자 : 간단한 조건문 
        1. if 조건문 : 조건문을 표현 가능한 문법
            - 조건에 true/ false , 비교연산 또는 관계연산
        
        2. if 형태
         1. if( 조건 ) 참일경우코드;
         2. if( 조건 ) {참일경우코드; 참일경우코드;}
         3. if( 조건 ) {참일경우코드}
            else { 거짓일경우코드; }
        4. if(조건) {참일경우코드;}
            else if(조건2){ 참2일경우코드;}
            else if(조건3){ 참3일경우코드;}
            else if(조건4){ 참4일경우코드;}
            else if{거짓일경우 코드}
        
        5. if중첩
            if (조건){
            if(조건){}
                else{}
            } else{}

    - 주의할점 : if (조건) {} 사이에 ; (세미콜론)는 없이 작성
*/

//[1] if(조건) 바로 뒤에 ;(세미콜론) 넣지말자.
if(10 > 3) console.log('1. T 10>3') // T -> 출력0
if(10 > 20) console.log( '2 T 10>20') // F -> 출력x
/* if(10 > 20); console.log('3 T 10>20') */ // f -> 출력 0

// [2] 참일경우코드의 명령어 2개 이상이면 {} 묶어주자.   다만 조건이 하나일때도 헷갈릴 수있기에 중가로를 넣자 넣어도 상관없다.
if( 10 > 20) console.log( '4-1 10>20 '); 
console.log('4-2 10 > 20');

if( 10 > 20) { /* if start */
     console.log( '5-1 10>20');
     console.log( '5-2 10>20');

    } //if end
if( 10 > 3) {
    console.log('6-1 10 > 3');
    console.log('6-2 10 > 3');
}//if end

// [3] if ~ else , 참일때 거짓일때
if( 10 > 3) { console.log ('7. T 10 > 3'); } //출력 0
else { console.log('7. F 10 > 3'); } // 출력 x

//[4] if else if ~ else if ~else , 조건이 다수일때
if(10 >= 20 ) {console.log ('8. T1 10>= 20');}              //출력x
else if(10 >= 15) { console.log('8. T2 10>= 15');}          //출력x
else if(10 >= 10) { console.log('8. T3 10>= 10');}          //출력0
else{ console.log('8.F 그외')}  /* 지금 게속 '' 빼먹어서 안나올때가 있음 주의하기 */

//[5] if 중첩
let 성별 = '남'; let 점수 = 80;
if( 성별 == '남') { // - 만약에 '성별' 변수값이 '남'이면--if stat
    if( 점수 >= 90 ) {console.log('남자우수');} // - 성별이 남자 이면서 90 점 이상이면            /*  주석처리시 주의하기 주석이 인식되서 엉킬떄가 있음 */
}// --if end
else { // - 아니면 --else start  
    if( 점수 >= 90 ) { console.log('여자우수');}
    
} // else end
