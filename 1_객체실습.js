// - new Date() 현재 시스템(PC) 의 날짜/시간 반환 객체
// - new Date( 연도 , 월 , 일 ) 지정한 연도월일에 해당하는 날짜 객체 
console.log( new Date() ) // Wed Dec 04 2024 10:33:15 GMT+0900 (한국 표준시)
console.log( new Date().getFullYear() ) // 2024
console.log( new Date().getMonth() ) // 11 , 0:1월 11:12월
console.log( new Date().getDate() ) // 4 
console.log( new Date().getDay() ) // 3 , 요일 , 0:일 1:월 2:화 3:수 4:목 5:금 6:토
console.log( new Date( 2023 , 4 , 20 ) ) // Sat May 20 2023 00:00:00 GMT+0900 (한국 표준시)

// 전역변수 : 특정한 { } 안에서 선언되지 않은 변수 , 선언이란? 만들기/정의 , let , const , function 
let today = new Date(); 
let year = today.getFullYear(); // 오늘의 연도 
let month = today.getMonth()+1; // 오늘의 월 , +1 하는이유 : 12월이 11로 반환이 되기 때문에 

// +달력의 일 일정/내용
let contentArray = [
    { cno :1, content : '학원개강', date : '2024-12-4', color : 'red'},
    { cno :2, content : '은행업무', date : '2024-12-10', color : 'blue'},
    { cno :3, content : '친구약속', date : '2024-12-10', color : 'pink'},
    { cno :4, content : '월급받는날', date : '2024-12-15', color : 'gray'}
    
];

/* cno는 그냥 부여 제외
content, date 중복검사(날짜는 같을수 있으니 제외) content는 중복검사,  
color 는 순서로 부여해도 될듯

수정 - 날짜를 보고 있는걸 매칭해서 일정을 넣었음



*/








// [1] 달력 출력함수  , 실행조건 : js가 실행될때 , 월변경될때마다
calPrint(); // js가 실행될때 최초 1번 함수 실행 
function calPrint(){ // 함수의 매개변수 : X , 리턴값 : X
    // (1) 상단의 달력 연도/월 표시 
        // - 어디에
        let h6 = document.querySelector('#calTop > h6 ') 
        // - 무엇을 
        let html = `${year}년 ${month}월`
        // - 출력 
        h6.innerHTML = html;
    // (2) 하단의 현재 연도/월의 일 표시 
        let calBottom = document.querySelector('#calBottom')         // - 어디에 
        let html2 = ``;         // - 무엇을 
        // - 요일 출력 
        html2 += `<div class="week sunday">일</div><div class="week" >월</div>
            <div class="week">화</div><div class="week">수</div>
            <div class="week">목</div><div class="week">금</div>
            <div class="week">토</div>`;

        // - 1일 ~ 마지막 일까지 출력 
            // (1) 현재 날짜의 마지막 일 구하기, 달력은 1부터 마지막 일까지 출력하기 위해서 
            let date = new Date( year , month , 0 ); // 지정한 연도 와 월 에 해당하는 전달 의 말일 날짜
                console.log( date ); // Tue Dec 31 2024
            let endDay = date.getDate(); // 31
            // (2) 현재 날짜의 1일의 요일 , 1일의 시작 위치를 찾기 위해서 
            let date2 = new Date( year , month-1 , 1 ); // -1 하는이유 : 컴퓨터는 0:1월 취급 
                console.log( date2 ); // Sun Dec 01 2024 00:00:00 GMT+0900
            let startWeek = date2.getDay(); // 요일 , 0
            
        // + 각 월의 1일 전까지 공백 출력 
        for( let blank = 1 ; blank <= startWeek ; blank++ ){
            html2 += `<div></div>`
        } // 

        // + 달력의 날짜 출력 + 현재 일정도 같이 출력
        for( let day = 1 ; day<=endDay ; day++ ){
            // day는 1부터 현재날짜의마지막일 까지 1씩 증가 반복 
            

            //일정 출력
                // 1. 현재 보고있는 날짜 형식 구성
            let date3 = `${year}-${month}-${day}`; //현재 반복문이 처리중인 날짜
               // console.log(date3);
                // 2. 현재 날짜와 등록된 일정 날짜와 동일한 일정 찾기/검색 해서 동일하면 일정내용 출력

            let planHtml = ``; //for 밖에 만든 이유: 동일한 날짜의 2개 이상의 일정이 있을수 있으므로 누적
            for( let index = 0 ; index <= contentArray.length-1 ; index++){/* 여기 index++;로 해서 오류 났었음 */
                let plan = contentArray[index];
                if(plan.date == date3){// 만약에 index번째의 일정객체내 일정이 현재 보고 있는 날짜와 같으면
                    planHtml += `<div style = "color : ${plan.color}">${plan.content}</div>`
                }

            }//for end
                

            // 일 출력 + 일정내용 출력
            html2 += `<div> ${ day } ${planHtml}</div>` 
        } //


        calBottom.innerHTML = html2;         // - 출력
        
    return; // [함수 종료] 함수가 종료 되면서 반환되는 값 , 값이 없을경우 return 생략이 가능 
} // f end 

// [2] 월 변경함수 ( 이전달 , 다음달 ) , 실행조건 : [◀]또는[▶] 버튼을 클릭했을때 
function monthChange( changeMonth ){  // 함수의 매개변수 : 이전달/다음달 식별데이터 , 리턴값 
    console.log( changeMonth );
    // 1. 매개변수에 따른 월 수정 
    month += changeMonth;
    // 2. // 만약에 월이 1보다 미만이면 연도를 -1차감 , 월 12 
    if( month < 1 ) {    year--; month = 12;   }
    // 만약에 월이 12보다 초과이면 연도를 +1증가 , 월 1
    if( month > 12 ){   year++; month = 1   }
    // - 날짜 변화에 따른 새로고침(출력함수 재실행 )
    calPrint();  
    return; // [함수 종료] 
} // f end 

