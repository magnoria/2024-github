
let oficer1 = { no : 1 , name : '유재석', birth: '1998-01-20'}
let oficer2 = { no : 2 , name : '유희석', birth: '1998-01-20'}

let ofice = []/*사원번호, 이름, 생년월일 */
ofice.push(oficer1)
ofice.push(oficer2)

//console.log(ofice);

let point1 = {no : 1, rating : '상', year : '2020년'}
let point2 = {no : 2, rating : '하', year : '2020년'}
let point3 = {no : 1, rating : '중', year : '1018년'} //문자열을 숫자처럼 넣었음 그래서 오류남
//console.log(point1);



let rated = []/* 사원점수 */
rated.push(point1);
rated.push(point2);
rated.push(point3);

let reno = 3; /* 사원번호 */

function regi() {
    //console.log(regi);

    let rename = document.querySelector('.name').value;
    let rebirth = document.querySelector('.birth').value;
  
    //console.log(rename);
    //console.log(rebirth);
    


    let info = {    // 이부분을 틀렸었음 대체해서 넣는거니까 no자리에 입력받은걸 넣는거임
        no : reno,
        name : rename,    // , 빼먹지 말기
        birth : rebirth
    } 
    console.log(info);
    
    ofice.push(info);
    //console.log(ofice);
    
    
    reno++;
    ofioutput();
    //console.log(ofioutput);
    
}

ofioutput();
function ofioutput(){
    let tbody = document.querySelector('.ofitable');/* 어디에*/
    //console.log(tbody);

    /* 무엇을 */
    let html = ``;

    for( let index = 0; index <= ofice.length-1 ; index++){ /* 사원목록 내에 사원번호 올리기 */
        
        let info = ofice[index];
        console.log(info);
        
            html += `<tr>
                        <th>${info.no}</th>
                        <th>${info.name}</th>
                        <th>${info.birth}</th>
                        <th>
                            <button onclick="astima(${info.no})" type="button">평가</button>
                        </th>
                    </tr>`                          

    }//f end
    //console.log(html); 확인
    
    tbody.innerHTML = html; /* html을 tbody HTML 사이에(inner) 넣는다 */

}//fu end

function astima(onclickno){
    let serchofi = null;
   
    
    for( let index = 0; index <= ofice.length-1; index++){
        let info = ofice[index];
        
        if(info.no == onclickno){//만약 index번째의 사원번호가 클릭한 사원번호와 같으면

            serchofi = info; //for 밖에서 선언한 'serchofi' 변수에 찾은 객체를 대입한다.


            break;
        }// if end

    }//f end
    

    if( serchofi == null){ //그러나 만약 검색사원값이 null 찾지 못했다면
        alert('사원정보가 없습니다');
        return; //for 문은 break if 문은 return
    }// if end

    //1. 어디에
    let div =document.querySelector('.inputrating')
    //2.무엇을
    let html = `<h3> 평가 </h3>
                <form>
                    <h5> 평가사원명 : ${serchofi.name}<h5>
                    평가 : <input class="rating" type="text" />
                    평가날짜 : <input class="ratingtext" type="text"/>
                    <button type="button"> 점수등록 </button>
                </form>`
    //3.출력
    div.innerHTML = html

}// fu end



