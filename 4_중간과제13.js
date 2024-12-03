/* 
    주제 : tolist 구현하기.

    1. 시각화
        html로 형태 구상

    2. 입력 정리
        텍스트입력, 등록 , 알림창, 버튼, 삭제버튼,

    3. 기능정리
        
        1.텍스트 입력후 등록시 할일 추가

        2.알림창 확인 출력

        3.변경누를시 css 변경

        4.삭제시 출력한거 사라짐

    4. 상세 기능 정리 
         html - 제목
         텍스트 상자 등록버튼

        div 글씨 출력 버튼 두개

         css - 제목 텍스트 두깨 두껍게
                텍스트 상자 쉐도우
                html div칸 -핑크 및 클릭시 줄가로 블랙 변경

        js-  텍스트 값 가져오기
            등록값 배열저장후 꺼내와서 출력


    개발순서 (참고하기)
        1. 구현할 화면을 스케치(프토타입)작성
        2. 구성한 화면을 HTML과 CSS로 샘플 작성하기.
        3. (JS)배열타입과 객체타입을 이용한 메모리 구성
        할일코드    할일내용    할일상태
        1           수업듣기    true
        2           밥먹기      false
            -할일코드 :할일내용과 할실상태는 중복이 존재하므로 식별자 역할 못한다.
                - 식별자가 필요한 이유는 수정/삭제할 대상이 식별되어야한다.


            -할일상태 : 할일상태는 완료 또는 미완료로 표현할 생각
                -true에 '완료' 의미부여, False에 '미완료' 의미부여
                --> if 간소화 2. '완료' 단어보다 true리터럴이 메모리가 더 적다.
            - 객체와 배열 샘플 구성 (표/테이블 = 배열 , 가로/행1개 = 객체1개)
        4. (JS)기능/이벤트 구성 : 1. 필요한 함수/기능파악 2. 함수들이 실행되는 조건
            3. 각 함수들의 매개변수/리턴값
            - 1.등록함수 : 실행조건 : [등록]버튼 클릭시 onclick
            - 2.출력함수 : 실행조건 : 1.js실행될때 2. 등록/수정/삭제가 성공했을때
            - 3.수정함수 : 실행조건 : [수정]버튼 클릭시 onclick
            - 4.삭제함수

        5. (js)함수별 로직 구현 / 만들기 , 구현된 함수는 실행조건에 맞추어 함수 실행

*/

/* let 할일1 = {할일코드 : 1 , 할일내용 :"수업듣기", 할일상태 :false}
let 할일2 = {할일코드 : 2 , 할일내용 :"밥먹기", 할일상태 :true}

let 할일목록 = []
할일목록.push(할일1);
할일목록.push(할일2); */


//[1]
let 할일목록 = [
    {할일코드 : 1 , 할일내용 :"수업듣기", 할일상태 :false},
    {할일코드 : 2 , 할일내용 :"밥먹기", 할일상태 :true}
]

/* 저장방법은 위아래 둘다 가능 */

let 식별번호 = 3;

//[2]등록함수, ()
function 등록함수(){ 
    
    //1.HTML로 부터 입력받은 값(value)를 js로 가져온다.
    let content = document.querySelector('.contentInput').value; //[value호출]

    //2.객체 생성 ----> 배열에 저장push
    let 할일 = {
        할일코드 : 3 , //'식별번호' 변수값을 대입
        할일내용 : content ,// 입력받은 'content'변수값을 대입
        할일상태 : false // 초기값을 false(미완료의미) 대입
    }
    할일목록.push(할일);
    식별번호++;

    //3. 출력
    console.log(할일목록);
    전체출력함수(); 
    
    // + 부가코드
    alert('[할일 등록했습니다.]')

    document.querySelector('.contentInput').value =``; //[value수정] 인풋박스를 공백으로 수정함
        return;}


//[3]전체출력함수, 실행조건 : 1.js실행될때 2.등록/수정/삭제가 성공했을때

전체출력함수(); 
function 전체출력함수(){ 
       // 1. 어디에
       document.querySelector('#todoBottom');

    
        // 2. 무엇을
        let html = ``
            for(let index = 0 ; index <=할일목록.length-1 ; index++){
                    // index는 0 부터 할일목록내 마지막 인덱스까지 1씩증가 반복

                    let info = 할일목록[index]; // idex번째의 객체(할일)꺼내기

                    // 객체정보를 HTML로 구성하기 , 삼항연산자를 이용한 값에 따른 class 넣기/빼기
                    //${ info.할일상태 ? 'success' : ''}도 가능
                    //만약에 index번째의 할일객체내 할일상태가 true이면 'success'클래스명을 넣어주고 아니면 '' 공백을 넣는다.
                    html += `<div class="contentBox" ${ info.할일상태 == true ? 'success' : ''}>       
                    <div class="content"> ${ info.할일내용} </div>
                    <div class="contentBtns">
                    <button onclick="수정함수(${info.할일코드})" class="updateBtn" >수정</button>
                    <button onclick="삭제함수(${info.할일코드})" class="deleteBtn" >삭제</button> 
                </div>
            </div>`
            }//for end

        // 3. 출력
        todoBottom.innerHTML = html;

        return; // 함수종료 , 리턴 값이 없는 생략 가능
}





//[5]삭제함수
function 삭제함수( 삭제할일코드 ){ 


    //1. 배체내 삭제할 요소(객체)를 찾기 / 조회/ 검색 등등 -------- for문을 이용해서 찾는수밖에 없음
   for( let index= 0; index <= 할일목록.length-1; index++){
    if( 할일목록[index].할일코드 == 삭제할일코드){
        // 만약에 index번째의 할일객체내 할일코드와 삭제할 할일코드와 같으면
        //2. 배열내 요소(객체) 삭제, .splice(삭제할인덱스, 개수) , 인덱스 필요.
        
        할일목록.splice(index,1); //현재 찾은 index요소를 삭제한다.
        break; //삭제 성공했을때 가장 가까운 반복문 종료
    }// if end

   }//fo end

    //3. 출력
    
    전체출력함수(); 

    return;

}//fu end


//[4]수정함수
function 수정함수(수정할일코드){
    
    // 1. 배열내 수정할 객체를 찾는다. 
    for(let index = 0; index <= 할일목록.length-1 ; index++) {
        if(할일목록[index].할일코드 == 수정할일코드){
            //만약 idndex번째 할일객체내 할일코드가 수정할일코드와 같다면
            할일목록[index].할일상태 = !할일목록[index].할일상태 // false -> true, true - > false
                // - (1) 할일목록[index].할일상태 = > true/false
                // - (2)!ture/false

               /*  let 할일상태 = 할일목록[index].할일상태 할일상태를 호출
                할일목록[index].할일상태 = !할일상태   할일상태를 부정후 다시 할일상태에 대입 */

            
            break;// 수정했다면 다음 객체 조회는 할 필요없이 반복문 종료
        }
    }
    
    
    전체출력함수(); 
    return;
}


