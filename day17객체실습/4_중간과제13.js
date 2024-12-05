/*
    주제 : TODOLIST 구현 하기.

    개발순서
        1. 구현할 화면을 스케치(프로토타입) 구성 작성  
            2. 구성한 화면을 HTML과 CSS로 샘플 작성하기.

        3. (JS) 배열타입 과 객체타입 를 이용한 메모리 구성 
            할일코드	할일내용	    할일상태   
            1	        수업듣기	    false        
            2	        밥먹기	        true

            - 할일코드 : 할일내용과 할일상태는 중복이 존재하므로 식별자 역할 못한다.
                - 식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별 되어야한다.
            
            - 할일상태 : 할일상태는 '완료'=1/true 또는 '미완료'=0/false 로 표현할 생각
                - true에 '완료' 의미 부여 , false에 '미완료' 의미 부여 
                    --> 1. if 간소화 2. '완료'단어보다 true리터럴이 메모리가 더 적다. 3. 부정연산자
            - 객체와 배열 샘플 구성 ( 표/테이블=배열1개 , 가로/행1개 = 객체1개)
        
        4. (JS) 기능/이벤트 구성 : 1.필요한 함수/기능 들을 파악 2.각 함수들이 실행되는조건 3. 각 함수들의 매개변수/리턴값 
            - 1.등록함수 : 실행조건 : [등록]버튼 클릭시 onclick                     , 매개변수 : x / 리턴값 : x  
            - 2.출력함수 : 실행조건 : 1.js실행될때 2.등록/수정/삭제가 성공했을때      , 매개변수 : x / 리턴값 : x 
            - 3.수정함수 : 실행조건 : [수정]버튼 클릭시 onclick                     , 매개변수 : x / 리턴값 : x   
            - 4.삭제함수 : 실행조건 : [삭제]버튼 클릭시 onclick                     , 매개변수 : x / 리턴값 : x 
            
            function 함수명( 매개변수1 , 매개변수2 ){
                return 리턴값  
            }

            매개변수        과일믹서기      리턴값 
            과일,물            처리          과일쥬스
        
        5. (JS) 함수별 로직 구현/만들기 , 구현된 함수는 실행조건에 맞추어 함수 실행 
            
*/
//[1]
let 할일목록 = [
    {할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false },
    {할일코드 : 2 , 할일내용 : "밥먹기"   , 할일상태 : true  }
]

let 식별번호 = 3;

//[2] 등록함수, 실행조건 : [등록]버튼 클릭시 onclick                     , 매개변수 : x / 리턴값 : x  
function 등록함수(){ // 등록함수 start 
    // 1. [입력] HTML로 부터 ( 할일내용 ) 입력받은 값(value)를 js로 가져온다.
    let content = document.querySelector('.contentInput').value //[value호출]
    // 2. [처리] 객체 생성 --> 배열에 저장push
    let 할일 = {
        할일코드 : 식별번호 , // '식별번호' 변수값을 대입 
        할일내용 : content , // 입력받은 'content' 변수값을 대입 
        할일상태 : false    // 초기값을 false(미완료 의미) 대입 
    }
    할일목록.push( 할일 );  // 생성한 객체를 배열에 저장/대입 
    식별번호++;             // 다음 할일이 등록할때 식별코드가 1씩 증가 하기 위해서 
    // 3. [출력]
    console.log( 할일목록 ) // 테스트/확인 
    전체출력함수();

    // + 부가 코드 
    alert('[할일 등록 했습니다.]')
    document.querySelector('.contentInput').value = ``; //[value수정]
    return; // 함수종료 , 리턴 값이 없는 생략 가능 
} // 등록함수 end 


//[3] 전체출력함수,  실행조건 : 1.js실행될때 2.등록/수정/삭제가 성공했을때      , 매개변수 : x / 리턴값 : x 
전체출력함수(); 
function 전체출력함수(){ 
    // 1. 어디에 , #todoBottom , document.querySelector
    let todoBottom = document.querySelector('#todoBottom');
    // 2. 무엇을 
    let html = ``
        for( let index = 0 ; index<=할일목록.length-1 ; index++ ){  // index는 0부터 할일목록내 마지막인덱스까지 1씩증가반복 
            let info = 할일목록[index]; // index번째의 객체(할일)꺼내기 
            // 객체정보를 HTML로 구성하기 , 삼항연산자를 이용한 값에 따른 class 넣기/빼기 
            // 만약에 index번째의 할일객체내 할일상태가 true이면 'success' 클래스명 를 넣어주고 아니면 ''공백를 넣는다. 
            html += `<div class="contentBox ${ info.할일상태 == true ? 'success' : '' }">  
                        <div class="content"> ${ info.할일내용 } </div>
                        <div class="contentBtns">
                            <button onclick="수정함수( ${ info.할일코드 })" class="updateBtn">수정</button>
                            <button onclick="삭제함수( ${ info.할일코드 } )" class="deleteBtn">삭제</button> 
                        </div>
                    </div>`
        } // for end 
    // 3. html출력 , innerHTML
    todoBottom.innerHTML = html;
    return; // 함수종료 , 리턴 값이 없는 생략 가능 
} // 출력 함수 end 

//[5] 삭제함수 , [삭제]버튼 클릭시 onclick                     , 매개변수 : 할일코드 / 리턴값 : x 
function 삭제함수( 삭제할일코드 ){ 
    // 1. 배열내 삭제할 요소(객체)를 찾기/조회/검색 등등
    for( let index = 0 ; index <= 할일목록.length-1 ; index++ ){
        if( 할일목록[index].할일코드 == 삭제할일코드 ){
            // 만약에 index번째의 할일객체내 할일코드와 삭제할할일코드와 같으면 
            // 2. 배열내 요소(객체) 삭제,  .splice( 삭제할인덱스 , 개수 ) , 인덱스 필요.
            할일목록.splice( index , 1 ); //현재 찾은 index 요소를 삭제한다.
            break; // 삭제 성공했을때 [다른 객체를 조회할 필요없이] 가장 가까운 반복문 종료.
        } // if end 
    } // for end 
    전체출력함수();
    return ; 
} // 삭제 함수 end 

//[4] 상태 수정 함수, ( p:할일코드 , r:x )
function 수정함수( 수정할일코드 ){ 
    // 1. 배열내 수정할 객체/요소 를 찾는다. 
    for( let index = 0 ; index <= 할일목록.length-1 ; index++ ){
        if( 할일목록[index].할일코드 == 수정할일코드 ){
            //만약에 index번째 할일객체내 할일코드가 수정할일코드와 같다면 
            let 할일상태 = 할일목록[index].할일상태 // 할일상태를 호출
            할일목록[index].할일상태 = !할일상태 // 할일상태를 부정후 다시 할일상태에 대입  false -> true , true -> false 
            break; // 수정했다면 다음 객체 조회는 할 필요 없이 반복문 종료 
        } // if end 
    } // for end 
    전체출력함수();
    return; 
}