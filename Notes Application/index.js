let form=document.querySelector("form");
let text=document.getElementById("text");
let todoCon=document.querySelector(".todo-con")
console.log(title,desk);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    add todo();
})
let todo=JSON.parse(localStorage.getItem("todo"));
if(todo){
    todo.forEach(element => {
        addtodo(element)
    });
}
function add todo(elem) {
    let todoColl=document.createElement("div");
    todoColl.classList.add("todo coll")
    let todo text=text.value;
    if(elem){
        todo text=elem.text;
    }
    if(todo text){
    todoColl.innerHTML=`
    <div class="todo-li">
    <div class="check ${elem && elem.complete?"active-check":""}"><img src="./images/icon-check.svg" alt=""></div>
        item.classList.remove("active");
    });
    element.classList.add("active")
    if(element.innerText=="Active"){
        todo li.forEach(elem => {
            if(!elem.children[0].children[1].classList.contains("complete")){
                elem.style.display="block";
            }else{
                elem.style.display="none";
            }
        });
    }else if(element.innerText=="Completed"){
        todo li.forEach(elem => {
            if(elem.children[0].children[1].classList.contains("complete")){
                elem.style.display="block";
            }else{
                elem.style.display="none";
            }
        });
    }else{
        todo li.forEach(elem => {
            elem.style.display="block";
        });
    }
   })
});
let clear=document.querySelector(".clear");
clear.addEventListener("click", ()=>{
    todo li.forEach(elem => {
        if(elem.children[0].children[1].classList.contains("complete")){
            elem.remove()
            updateLs();
        }
    });
})
let left=document.querySelector(".left");
function set item() {
    let activeTodo=document.querySelectorAll(".todo-li .active-check");
    let diff=todo li.length-activeTodo.length;
    left.innerText=`${diff} items left`

}
set item();