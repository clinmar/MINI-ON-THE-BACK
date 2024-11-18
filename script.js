const MenuToggle = document.getElementById('mobile_toggle');
const Navlinks = document.querySelector('.nav_list');

MenuToggle.addEventListener('click', ()=>{
    Navlinks.classList.toggle('active');
});