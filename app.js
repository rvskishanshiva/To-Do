let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = '';
});  



// let delBtns = document.querySelectorAll('.delete');

// for(delBtn of delBtns) {
//     delBtn.addEventListener('click', function() {
//         this.parentElement.remove();
//     });
// }

ul.addEventListener('click', function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
});