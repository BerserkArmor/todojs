//Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm );
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

/*const pepe = ['elpepe', 'etesech', 'huevitoreyy', 'pelaofokakl','wenashoro'];

let activo = true;
let i =0;*/

/*while(activo){
    console.log(i);
    i++;
    if(i >= 10){
        console.log("while done");
        break;
    }
}*/

/* let i =0;

while(i < pepe.length){
    console.log(pepe[i]);
    i++;
}*/

 /*
while(i <= 10){
    console.log(i);
    i++
}*/

/*for(let i = pepe.length - 1; i >=0; i--){
    console.log((i+1)+' '+pepe[i]);
}*/

/*for (let i =0; i < pepe.length ; i++){
    console.log((i+1)+' '+pepe[i]);
}*/

/*for(let i=1; i <11; i++ ){

    console.log(i);

}*/





//evento
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
        addTodo(input.value);
    input.value ='';
    }
    
}

function handleClickDeleteOrCheck(e){
    if(e.target.name == 'checkBtn')
        checkTodo(e);
        
    if(e.target.name == 'deleteBtn')
        deleteTodo(e);
    
}

function handleClearAll(e){
    document.querySelector('ul').innerHTML ='';
}


// Helpers

function addTodo(todo){
  
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

     li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkBtn"><i class="fas fa-check-square"></i></button>
        <button name="deleteBtn"><i class="fas fa-trash"></i></button>
     `; 

     li.classList.add('todo-list-item');
     ul.appendChild(li);
}

function checkTodo(e){
    let item = e.target.parentNode;
    if(item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';

    else
        item.style.textDecoration = 'line-through';
    
}

function deleteTodo(e){
    let item = e.target.parentNode;

    item.addEventListener('transitionend', function(){
        item.remove();
    });
    
    item.classList.add('todo-list-item-fall');

}



