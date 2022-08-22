const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
const list = document.querySelector('.todo');




const generateTemplate = todoText => {
  const html = `
    <li class="list-element">
      <span>${todoText}</span>
        <svg class = "delete" version="1.1"id="Capa_1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"width="20px"height="20px"viewBox="0 0 348.333 348.334"style="enable-background: new 0 0 348.333 348.334"xml:space="preserve">
          <g>
            <path class = "svg" d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/>
          </g>
        </svg>
    </li>`;
    list.innerHTML += html;

};


form.addEventListener('submit' , (e)=>{
  e.preventDefault();

  const todoText = input.value;

  if (todoText) {

    generateTemplate(todoText);

    input.value = "";

  }
});

list.addEventListener('click' , e => {
  if(e.target.classList.contains('delete')){
    e.target.parentNode.remove();
  }
})






 