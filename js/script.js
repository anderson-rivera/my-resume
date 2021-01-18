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