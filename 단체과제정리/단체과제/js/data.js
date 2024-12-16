
/* localStorage에 배열정보 불러오기 함수 */
function getBoardList(){

    // 1. localStorage 배열 정보 요청 , key
   let boardList = localStorage.getItem('boardList')
   if (boardList == null){ //2. 만약에 localStrage가 비어있으면
        boardList = []; // 3. 빈배열 대입해주고
   }else { // 있으면면
        boardList = JSON.parse(boardList); // 4. JSON(JS객체)로 변환해서 대입
   }
   console.log(boardList);
   
   return boardList; //5. 현재 함수를 호출했던곳으로 게시물 배열을 반환해준다.

}//f end


//2. locastorage에 게시물 배열정보를 저장하는 함수로 사용
function setBoardList(boardList){
    localStorage.setItem('boardList' , JSON.stringify( boardList));
                    //이거 boadList 로 되있어서 오류뜸 

    //로컬 스토리지에 저장한다(key 'boardList'로 , JSON.stringify-> 문자열로 저장하는 명령어,  가로안은 저장할 value -> ( boardList))
    //로컬스토리지에는 문자열로만 저장할 수 있기때문에 JSON,stringify를 쓴것것
    


}

/* 3. localStorage에 특정한 게시물 1개개 불러오기 함수 */

function getBoard(bno){
     // 조회할 게시물 번호를 매개변수로 지정

     //1. 게시물 배열 요청
     let  boardList = getBoardList();

     //2. 조회할 게시물 번호 찾기
     for (let index = 0; index <= boardList.length; index++) {
          
          if(boardList[index].bno == bno){
               return boardList[index];
          }
          
     }//for end

     return null; //조회할 게시물번호와 일치한 게시물 객체 못찾았을때는 null
}
