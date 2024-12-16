
/*1. localSttorag에 배열정보 불러오기 함수*/
function getBoardList(){

    let boardList = localStorage.getItem('boardList')//1. localStorage 배열정보 요청
    if(boardList == null){ // 2. 만약에 localStorage 비어있으면
         boardList = []; // 3. 빈배열 대입해주고
    }else{ // 있으면
         boardList = Json.pars(boardList); //4. JSON(js객체)러 변환해서 대입
    }
    return boardList; // 5. 현재 함수를 호출했던곳으로 게시물 배열을 반환/준다.
 } // f end


 /* 2. localStorage에 게시물 배열정보 저장함수 */
 function setBoardList(boardList){
    localStorage.setItem('boardList' , JSON.stringify(boardList));
 }


 /* 3, localStorage에 특정한 게시물 불러오기 함수 */
 function getBoard( bno ){
     //조회할 게시물번호를 매개변수로 지정
     
     //1 1. 게시물 배열 요청
     let boardList = getBoardList();

     //2. 조회할 게시물 번호 찾기
     for( let index = 0; index <= boardList.length-1; index++){
          if(boardList[index].bno == bno){
               //만약에 index번째의 게시물의 번호와 조회할 번호와 같으면
               return boardList[index]; //찾은 게시물 객체 반환
          }
     } //for end
     return null; // 조회할 게시물번호와 일치한 게시물 객체를 못찾을경우 
 }






 /* 4. localStorage에 특정한 게시물 1개 삭제 함수 */

 function deleteBoard( bno ){ // 매개변수 , 위에 이미 html에서 매개변수 설정을 해서 누를시 실행되도록 해놓음
     //1. 삭제할 bno의 인덱스를 찾기
     let boardList = getBoardList();
 
     //2. 게시물 목록에서 삭제할 번호의 인덱스 찾기
     for(let index = 0 ; index <= boardList.length-1; index++){
         if( boardList[index].bno == bno){
             deleteIndex = index;
             break;
         }
     }
 
     //3. 삭제할 번호의 게시물 인덱스를 게시물 목록에서 삭제
     boardList.slice(deleteIndex , 1);
 
     //4. localStorage 업데이트
     setBoardList(boardList);

}