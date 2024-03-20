let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
console.log(title,desc);
let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleVal=title.value;
    let descVal=desc.value;
    if(obj){
        titleVal=obj.title;
        descVal=obj.desc;
    }
    if(titleVal){
        card.innerHTML=`<h3>${titleVal}</h3>
                                    <p >${descVal}</p>
                             <button class="del">Delete</button>`;
        notesElem.appendChild(card);
        updateLs();
    }
    let clear=card.querySelector(".del");
    clear.addEventListener('click',()=>{
        card.remove();
        updateLs();
    })
}
function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}