/* 
    -세션/쿠키 이용한 회원가입/ 로그인 구현

*/

//[1]회원가입 함수 정의
    // - 함수를 언제 사용할껀지? 회원가입 버튼을 클릭했을때
    // - 함수의 인자값(매개변수)? 없이
    // - 함수의 리턴값(반환)? 없이
//let meberList = [] <---- 회원목록을 세션 / 쿠키에 저장

function 회원가입함수() {


    //1. [입력]
    let id = document.querySelector('.signId').value; // 각 INPUT의 value 가져오기
    let pw = document.querySelector('.signPw').value;

    //2.[처리]

    // * 회원목록정보를 전역변수에 선언하지 않고 세션/쿠키 저장 / 왜? 
    //JS외부(브라우저)에 저장하면 JS가 새로고침 / 변화가 있어도 저장을 유지하기 때문에


    let member = { 'id' : id , 'pw' : pw}; //입력받은 값으로 객체 생성

        //- (1)현재 회원정보를 저장하기 위한 회원 정보 목록을 세션 또는 쿠키에서 가져오기
        let memberList = sessionStorage.getItem('memberList');
        //console.log(meberList); //존재하지 않는 'key' 호출하면 null 반환된다
        // - (2) 회원정보 목록이 존재하면 존재하지 않으면
        if(memberList == null){
            //만약에 가져온 세션 데이터가(memberList)가 null이면
            memberList = []; // 빈 배열 생성하여 변수에 대입한다.
        }else{
            //가져온 세션데이터 (memberLIst)가 존재하면
            //문자열 ---> 객체 (JSON)으로 변환
            memberList = JSON.parse(memberList);
           
            
        }
    console.log(memberList);
            

    //배열에 입력받은 객체를 저장

    memberList.push(member);

        console.log(memberList);

    
    // - 변화가 있는 배열을 세션/ 쿠키 다시 저장(새로고침)\
    // - (1) key 와 value 구성된 세션 정보를 저장하는데 value값을 (배열 - > 문자열) 문자열 타입으로 
    //변화하여 저장한다.
    sessionStorage.setItem('memberList', JSON.stringify(memberList))
        

    //3.[출력]


    return; //함수 종료 // 값이 없을때는 생략가능.
    
}


//[2] 로그인 함수 , [로그인] 버튼을 클릭했을때

function 로그인함수(){

    // C(회원가입)R(로그인/조회/비교)UD

    //회원가입이란 ? 입력한 정보들을 어딘가에 저장/기록
    //로그인이란? 기록으로 들어가는것 , 기록(회원가입)과 일치한 정보 비교해서 들어감

   let loginId = document.querySelector('.loginId').value;
   let loginPw = document.querySelector('.loginPw').value;

   let memberList = sessionStorage.getItem('meberList');
   if(memberList == null){
    memberList = []// 회원정보목록이 없으면 빈배열 생성
   }else{// 아니면
    memberList = JSON.parse(memberList); //회원정보목록이 존재하면 JSON타입으로 변환

   }

   //로그인 정보가 회원정보목록(기록)내 존재하는지 비교
   for(let index = 0; index <= memberList.length-1; index++){
    let info = memberList[index]; // index번째의 회원정보 객체 호출
    if (info.id == loginId && info.pw == loginPw) {
        alert('로그인성공');
        return;
        
        
        
    }
    
   }


   alert('로그인실패')


    return;

}//fu end
