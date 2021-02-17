//dark mode
const btnDark = document.getElementById('dark');

btnDark.addEventListener('click' , () => {
    document.body.classList.toggle('dark');
    //change position of btn to switch style
    btnDark.classList.toggle('active');
});