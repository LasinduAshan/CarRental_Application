const dashboard = document.getElementById('dashboard');
const homepage = document.getElementById('homepage');
const services = document.getElementById('services');
const cars = document.getElementById('cars');
const about = document.getElementById('about');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

const btnDashboard = document.getElementById('btn-dashboard');
const btnHome = document.getElementById('btn-home');
const btnServices = document.getElementById('btn-services');
const btnCars = document.getElementById('btn-cars');
const btnAbout = document.getElementById('btn-about');
const btnBlog = document.getElementById('btn-blog');
const btnContact = document.getElementById('btn-contact');

services.style.display='none';
cars.style.display='none';
about.style.display='none';
blog.style.display='none';
contact.style.display='none';


btnHome.addEventListener('click',function () {
    homepage.style.display="inherit";
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnServices.addEventListener('click',function () {
    services.style.display="inherit";
    homepage.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnCars.addEventListener('click',function () {
    cars.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnAbout.addEventListener('click',function () {
    about.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnBlog.addEventListener('click',function () {
    blog.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnContact.addEventListener('click',function () {
    contact.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    dashboard.style.display="none";
});


