
let todolist = [
    { code : 1 , content : "수업듣기" , state : true},
    { code : 2 , content : "밥먹기" , state : false}
]


let recode = 3;

function input(){
    let recontent = document.querySelector('.textInput').value;

    let retodolist = {
        code : recode,
        content : recontent,
        state : false
    }

    todolist.push(retodolist);
    recode++

    output();
    alert('입력완료')
    document.querySelector('.textInput').value = '';
    return;

}


output();
function output(){

    let bottom = document.querySelector('#bottom'); //botoom으로 했었었는데 문제가 생기지는 않음 ?? 아마 list로 대체되서 그런듯
    //bottom은 HTML 요소를 참조해야 하지만, 코드에서 document.querySelector를 사용해 정의하지 않았다.  안넣었을경우의 문제인데 어디에?인 장소를 지정해줘야하는듯 

    let html = ''

    for(let index = 0; index <= todolist.length-1; index++){

        let info = todolist[index];

        html += `<div class="contentBox ${info.state == true ? 'success' : ''}"> 
                <div class="content">${info.content}</div>
                <div class="btnGroup">
                    <button onclick = "dif(${info.code})" class="reput">수정</button>
                    <button onclick = "remove(${info.code})" class="deletput">삭제</button>
                </div>
            </div>    `
    }
    //console.log(todolist); 기본 false 상태 그이유는 input에서 false로 넣었기 때문
    
    bottom.innerHTML = html; // 오타존재 bottom 을 botoom으로 침

    return;

}

function remove(movecode){
    for(let index = 0; index <= todolist.length-1 ; index++){
        if(todolist[index].code == movecode){
            todolist.splice(index,1);
            break;
        }

    }

    output();
    return;

}

function dif(difcode){
    for(let index = 0; index <= todolist.length-1; index++){

        if(todolist[index].code == difcode) { // todolist 인덱스 코드와 difcode 즉 누른 버튼 입력 이 같다면
            let restate = todolist[index].state //todolist 인덱스 상태를 restate 저장하고
            todolist[index].state = !restate // todolist 인덱스 상태가 !restate 즉 restate 반대 상태가 된다. input에서 기본 false상태로 했으므로 그 반대 true 완료 상태가 된다
            break;
        }
    }
    output();
    return;
}

