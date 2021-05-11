
let inputs = document.getElementsByTagName("input");
let form = document.querySelector('form');
let btn = document.getElementById("subm");



btn.onclick = (event) => {
    event.preventDefault();
    
    console.log(
        `First Name: ${form.first_name.value}
        Last Name: ${form.last_name.value}
        Email: ${form.email.value}
        Comment: ${form.comment.value}
        Gender: ${form.gender.value}
        B-day: ${form.bd.value}`
        );
        
    }
    






changeButtonStatus();



function changeButtonStatus(){

    if((form.first_name.value.length > 0) 
        && (form.email.value.length > 0 ) 
        && (form.bd.value.length > 0) 
        && (form.comment.value.length > 0)){
       
            form.submit.removeAttribute("disabled");
        }else {
            form.submit.setAttribute("disabled", "disabled");
        }

    };




// footer


let skills = [' CSS ', ' HTML ', ' JavaScript '];

let footerCont = document.getElementById('footer-cont');

footerCont.insertAdjacentHTML('beforeend', `<p>This site was created via: ${skills}</p>`)




