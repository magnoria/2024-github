/* 
1. html 테이블로 작성
2. css
3. 입력
        년도 월 좌우 입력버튼
        버튼입력시 월이 올라가야함
        


    저장
        버튼입력
        


    출력
        좌우 버튼시 출력

        버튼 두개 입력함수 
        출력함수

        if문으로 전으로 돌릴수 있나?



        반복문 맨위 월수를 올리기


        html 출력 화면전환 출력

 */

// - new Date() 현재 시스템(pc)의 날짜/시간 반환 객체또는 함수
// - new Date(연도, 월, 일) 지정한 연도 월일에 해당하는 날짜 객체
//1. 
console.log(new Date()); //한국 표준시
console.log(new Date().getFullYear()); //년도
console.log(new Date().getMonth());// 월 - 1월을 0으로 표현하고 11을 12로 표현
console.log(new Date().getDate()); // 요일
console.log(new Date(2023 , 4 , 20)); //Sat May 20 2023 00:00:00 GMT+0900 (한국 표준시)
// date 안에 년  월 일 을 넣으면 지정할수있음
//여기까지 다른 사람이 만든 날짜 객체를 확인한것 js

let today = new Date(); // 지금 시각 및 날짜
//console.log(today);
let year = today.getFullYear(); //연도
//console.log(year);
let month = today.getMonth()+1; //달까지 확인 완료
//console.log(month);


// 달력의 일 일정/내용 넣기
let contentArray = [

]







