/*
1. 등록함수
    - input value값 받기
    - .push로 배열 추가
    - 출력함수 호출
2. 출력함수
    - 시작시 출력
    - for문 배열 순회
    - html로 `` 출력
    (- 유효성검사 )

    
3. 수정함수
    - alert(prompt) 로 값 받기(3개)
    - 출력함수
4. 삭제함수
    - splice
    - 배열 내 객체 삭제

재고 등록함수시 매개변수 사용

 */


let 독서 = [
    { 도서코드 : 1 , 도서명 : "비행운" , 출판사 : "민음사" , 위치 : 1 },
    { 도서코드 : 2 , 도서명 : "천사와 악마" , 출판사 : "문학수첩" , 위치 : 2 },
    { 도서코드 : 3 , 도서명 : "종이여자" , 출판사 : "문학비행" , 위치 : 3 }
]
let 재고 = [
    { 도서코드 : 1 , 상태 : '출고' , 정가 : 6500 , 입고날짜 : "2024-12-4" },
    { 도서코드 : 2 , 상태 : '입고' , 정가 : 16500 , 입고날짜 : "2024-12-5" },
    { 도서코드 : 3 , 상태 : '출고', 정가 : 15000 , 입고날짜 : "2024-12-6" }
]







/* 3. 수정함수 */




function 수정함수( 수정도서코드 ) {

       // console.log(독서코드);
    let 도서 = prompt('변경 도서명을 입력해주세요 : ');    
    let 출판 = prompt('변경 출판사를 입력해주세요 : ');    
    let 위 = prompt('변경 위치를를 입력해주세요 : ');    

    let info = { 도서코드 : 수정도서코드 , 도서명 : 도서 , 출판사 : 출판 , 위치 : 위}
       // console.log(info);  /* 이거 조금만 더  */
    /*
    if (독서[0].도서코드 == 수정도서코드  ) {
        console.log( `찾았다. ${ 독서[0].도서명 }` )
        독서[0] = info;
    }
    else if (독서[1].도서코드 == 수정도서코드  ) {
        console.log( `찾았다. ${ 독서[1].도서명 }` )
        독서[1] = info;
    }
    else if (독서[2].도서코드 == 수정도서코드  ) {
        console.log( `찾았다. ${ 독서[2].도서명 }` )
        독서[2] = info;
    }
    */

    // 반복되는 코드 : 
    // 반복되지 않는 코드 : 0 1 2 --> 패턴 : 0부터 2까지 1씩증가 --> for( let index = 0 ; index<=2 ; index++ ){}
    for( let index = 0 ; index <= 독서.length-1 ; index++ ){
        if (독서[ index ].도서코드 == 수정도서코드  ) {
            //console.log( `찾았다. ${ 독서[index].도서명 }` )
            독서[ index ] = info;
            break;
        }   
    }

    /* let div = document.querySelector('.tbody1');

    let html = `<tr>  <td>${info.도서코드}</td>    <td>${info.도서명}</td>  <td>${info.출판사}</td>  <td>${info.위치}</td> <td>
                                <button onclick="수정함수(1)" type="button">수정</button>
                                <button onclick="" type="button">삭제</button>
                            </td>
                        </tr> `

    div.innerHTML = html */
 출력함수();
}

