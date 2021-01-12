const dashboard = document.getElementById('dashboard');
const homepage = document.getElementById('homepage');
const services = document.getElementById('services');
const cars = document.getElementById('cars');
const about = document.getElementById('about');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

const manageCars = document.getElementById('manageCars');
const manageDrivers = document.getElementById('manageDrivers');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');
const guestHeader = document.getElementById('guestHeader');
const driverShedulePage = document.getElementById('driverShedulePage');
const carBookingForm = document.getElementById('carBookingForm');
const carBookingSubmitForm = document.getElementById('carBookingSubmitForm');
const manageCustomerRequests = document.getElementById('manageCustomerRequests');
const managePayment = document.getElementById('payment');

const btnDashboard = document.getElementById('btn-dashboard');
const btnHome = document.getElementById('btn-home');
const btnServices = document.getElementById('btn-services');
const btnCars = document.getElementById('btn-cars');
const btnAbout = document.getElementById('btn-about');
const btnBlog = document.getElementById('btn-blog');
const btnContact = document.getElementById('btn-contact');

const btnManageCars = document.getElementById('btn-ManageCars');
const btnManageDrivers = document.getElementById('btn-ManageDrivers');

const btnLoginFormSignUp = document.getElementById('btn-loginFormSignUp');
const btnRentNow = document.getElementById('btnRentNow');
const btnDisplaySubmitForm = document.getElementById('btn-displaySubmitForm');
const btnManageCustomerRequests = document.getElementById('btn-ManageCustomerRequests');
const btnManagePayment = document.getElementById('btn-ManagePayment');


function displayLoginForm(){
    loginForm.style.display='inherit';
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    manageCars.style.display='none';
    manageDrivers.style.display='none';

    dashboard.style.display='none';
    header.style.display='none';
    footer.style.display='none';
    signUpForm.style.display='none';
    guestHeader.style.display='none';
    driverShedulePage.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
}

displayLoginForm();


btnHome.addEventListener('click',function () {
    homepage.style.display="inherit";
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnServices.addEventListener('click',function () {
    services.style.display="inherit";
    homepage.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnCars.addEventListener('click',function () {
    cars.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageCars.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnAbout.addEventListener('click',function () {
    about.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageDrivers.style.display='none';
    manageCars.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

/*btnBlog.addEventListener('click',function () {
    blog.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageCars.style.display='none';
    manageCustomerRequests.style.display='none';
});*/

btnContact.addEventListener('click',function () {
    contact.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnDashboard.addEventListener('click',function () {
    dashboard.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display="none";
    manageCars.style.display="none";
    manageDrivers.style.display="none";
    guestHeader.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnManageCars.addEventListener('click',function () {
    manageCars.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display="none";
    dashboard.style.display="none";
    guestHeader.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnManageDrivers.addEventListener('click',function () {
    manageDrivers.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display="none";
    dashboard.style.display="none";
    manageCars.style.display="none";
    guestHeader.style.display='none';
    manageCustomerRequests.style.display='none';
    managePayment.style.display='none';
});

btnManageCustomerRequests.addEventListener('click',function () {
    manageCustomerRequests.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display="none";
    dashboard.style.display="none";
    manageCars.style.display="none";
    guestHeader.style.display='none';
    manageDrivers.style.display='none';
    managePayment.style.display='none';
});

btnManagePayment.addEventListener('click',function () {
    managePayment.style.display="inherit";
    manageCustomerRequests.style.display="none";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display="none";
    dashboard.style.display="none";
    manageCars.style.display="none";
    guestHeader.style.display='none';
    manageDrivers.style.display='none';
});

btnLoginFormSignUp.addEventListener('click',function () {
    signUpForm.style.display="inherit";
    manageDrivers.style.display="none";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display="none";
    dashboard.style.display="none";
    manageCars.style.display="none";
    header.style.display="none";
    footer.style.display="none";
    loginForm.style.display="none";
    guestHeader.style.display='none';
    managePayment.style.display='none';
});



// ----------------------------------- Guest header eka controll karanna methanin----------------------------------------


const btnHomeGuest = document.getElementById('btn-homeGuest');
const btnServicesGuest = document.getElementById('btn-servicesGuest');
const btnCarsGuest = document.getElementById('btn-carsGuest');
const btnAboutGuest = document.getElementById('btn-aboutGuest');
const btnBlogGuest = document.getElementById('btn-blogGuest');
const btnContactGuest = document.getElementById('btn-contactGuest');



btnHomeGuest.addEventListener('click',function () {
    homepage.style.display="inherit";
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnServicesGuest.addEventListener('click',function () {
    services.style.display="inherit";
    homepage.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnCarsGuest.addEventListener('click',function () {
    cars.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

btnAboutGuest.addEventListener('click',function () {
    about.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});

/*btnBlogGuest.addEventListener('click',function () {
    blog.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    contact.style.display='none';
    dashboard.style.display="none";
});*/

btnContactGuest.addEventListener('click',function () {
    contact.style.display="inherit";
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    dashboard.style.display="none";
});


btnRentNow.addEventListener('click',function () {
    carBookingForm.style.display="inherit";
});
