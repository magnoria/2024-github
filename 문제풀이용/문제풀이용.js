


let todolist = [
    {code : 1 , content : "수업듣기" , 상태 : false},
    {code : 2 , content : "밥먹기" , 상태 : true}      
]

let codeNum = 3;

function input(){

    let inconTent = document.querySelector('.textInput').value
    //console.log(inconTent);
    

    let relist = {
        code : codeNum,
        content : inconTent,
         상태 : false      //초기값을 미완료로 대입
        
        
    }
    todolist.push(relist);
   // console.log(todolist); 여기쯤에서 한번확인하기
    
    codeNum++;
    //console.log(todolist); 흐름 확인 완료

   
    

    alert("할일등록완료")
    document.querySelector('.textInput').value =``; //텍스트 인풋은 확인 불가 다만 
   
    
   
    return;    
}