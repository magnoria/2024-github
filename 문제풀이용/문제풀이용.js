
let 재고기록 = [
    { 재고코드 : 1 , 변화량 : 3 , 상태 : "입고" , 정가 : 6500 , 입고날짜 : "2024-12-4" },
    { 재고코드 : 1 , 변화량 : -1 , 상태 : "출고" , 정가 : 6500 , 입고날짜 : "2024-12-5" },
    { 재고코드 : 3 , 변화량 : 5 , 상태 : "출고" , 정가 : 15000 , 입고날짜 : "2024-12-6" }
] // 추적하기 위해서



// 재고
function 도서재고연결( 재고코드 ){

    document.querySelector('.inputNum').innerHTML = 
    
            `<h4> 도서코드 ${ 재고코드 } : 재고목록 </h4>
            <input class="num1" type="text" placeholder="재고량"/>
            <input class="num2" type="text" placeholder="상태"/>
            <input class="num3" type="text" placeholder="정가"/>
            <input class="num4" type="date" placeholder="입고날짜"/>
            <button onclick="재고등록함수(${ 재고코드 })" type="button">재고등록</button>`
} // f end
