function addTodo(){
    
    
    // JSON.stringify(obj); <--- object를 인자값으로 넣어주면 
    // 문자열 형식으로 변환시켜주는 메서드

    //JSON.parse(str); <--- 알아서 문자열을 object 로 만들어준다.

    // const todoArrStr = localStorage.getItem("todo");
    // const localtodoArr = localStorage.getItem(JSON.parse("todo"));

    let todoArr = JSON.parse(localStorage.getItem("todo"));
    if(todoArr == null){
        todoArr = [];
    }
    const todoObj = {
        todoName : document.querySelector("#newTodo").value,
        done : false
    };
    todoArr.push(todoObj);

    

    localStorage.setItem("todo",JSON.stringify(todoArr));
    showTodoList();
}

function showTodoList(){
    //데이터 가져오기- 아직까지는 문자열 
    const todoStr = localStorage.getItem("todo");
    //데이터 변환하기 - 문자열 - > 객체
    const todoArr = JSON.parse(todoStr);
    // 객체 배열을 이용하여 tr 요소 만들기
    const tbodyTag = document.querySelector("tbody");
    tbodyTag.innerHTML="";

    for(let i = 0 ; i< todoArr.length;i++){
        const Obj = todoArr[i];
        // 객체를 배열을 돌면서 하나씩 꺼내온다
        const trTag = document.createElement("tr");
        // <tr></tr>
        const tdTag1 = document.createElement("td");
        const tdTag2 = document.createElement("td");
        // <td></td><td></td>

        const textNode= document.createTextNode(Obj.todoName);
        const inputTag = document.createElement("input");
        inputTag.setAttribute("type","checkbox");
        if(Obj.done){

            inputTag.setAttribute("checked","checked");
        }

        tdTag1.appendChild(textNode);
        tdTag2.appendChild(inputTag);
        trTag.appendChild(tdTag1);
         // <td>text ~~~</td><td>input ~~~</td>

        trTag.appendChild(tdTag2);
        /* 
            <tr>
            <td></td><td></td>
            </tr>       
        */

        tbodyTag.appendChild(trTag);
        /*
        <tbody>
        <tr>
        <td></td>
        <td></td>
        </tr>
        </tbody>
        */

        

    }





































    // const tbodyTag =document.querySelector("tbody");
    // for(let i = 0 ; i <todoArr.length ; i++){
    //     const todoObj = todoArr[i];

    //     const trTag = document.createElement("tr");
    //     const tdTag1 = document.createElement("td");
    //     const tdTag2 = document.createElement("td");

    //     const textNode =document.createTextNode(todoObj.todoName);
    //     const inputTag = document.createElement("input");
    //     inputTag.setAttribute("type","checkbox");
    //     if(todoObj.done){
    //         inputTag.setAttribute("checked","checked")
    //     }
    //     tdTag1.appendChild(textNode);
    //     tdTag2.appendChild(inputTag);

    //     trTag.appendChild(tdTag1);
    //     trTag.appendChild(tdTag2);


    //     // tr 요소를 table > tbody에  넣기
    //     tbodyTag.appendChild(trTag);
    // }
    
}
