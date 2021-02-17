//btn go to top
const btnUp = document.getElementById('gtop');

//for detect when user make scroll 
window.onscroll = function(){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        btnUp.style.display = 'block';
    }else{
        btnUp.style.display = 'none';
    }
};


//function for click bnt-top
btnUp.addEventListener('click' , up_function);
function up_function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
};



//btn mail
const btnMail = document.getElementById('btn-mail');
const btnMail2 = document.getElementById('btn-mail-2');

//add function for click action
btnMail.addEventListener('click' , mailClick);
btnMail2.addEventListener('click' , mailClick);
//click
function mailClick(){
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=afrm2910@gmail.com';
}




//modal
const modal = document.getElementById('myModal');
const openModal = document.getElementById('plus');
const closeModal = document.getElementById('closeModal');
const bodyPage = document.getElementById('bodyPage');

openModal.addEventListener('click' , openModalF);
closeModal.addEventListener('click' , closeModalF);
    
function openModalF(){
    modal.classList.add('active');
    window.scrollTo(0, 400);
    bodyPage.style.overflow = 'hidden'; 
};
function closeModalF(){
    modal.classList.remove('active');
    bodyPage.style.overflow = 'auto';
};




