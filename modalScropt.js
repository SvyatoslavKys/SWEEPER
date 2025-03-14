const openButton = document.querySelector("[data-modal-open]"); 
const closeButton = document.querySelector("[data-modal-close]"); 
const modal = document.querySelector("[data-modal]"); 
const body = document.body; 


function toggleModal() {
    modal.classList.toggle("is-hidden"); 
    body.classList.toggle("no-scroll"); 
}

openButton?.addEventListener("click", toggleModal);
closeButton?.addEventListener("click", toggleModal);
