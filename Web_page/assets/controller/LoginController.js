let userEmail;
// let customerID;
// let custoemrName;
// let custoemrNIC;
/*$('#btn-loginForm').click(function () {
    //console.log("working");
    if (true){
     //displayRegisterUserPage();
        console.log("login true");
        displayAdminPage();
      //  displayDriverShedulePage()

    }else {
        //driverShedulePage();
    }
});*/

// get Login data
$("#btn-loginForm").click(function () {
        let email = $("#txtLoginUserEmail").val();
        let password = $("#txtLoginUserPassword").val();
        loadAllDriverShedule();
        $.ajax({
            url: "http://localhost:8080/spring/api/v1/login/" + email+"/"+password,
            success: function (res) {
                //console.log(res);
                //console.log(res.data === "Customer");
                if (res.data === "Customer"){
                    userEmail = email;
                    displayRegisterUserPage();
                }else if(res.data === "Admin"){
                    displayAdminPage();
                }else if(res.data === "Driver"){
                    displayDriverShedulePage();
                }else{
                    alert(res.data);
                }

            }
        });
});

function displayAdminPage() {
    homepage.style.display='none';
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    manageCars.style.display='none';
    manageDrivers.style.display='none';

    dashboard.style.display='inherit';
    header.style.display='inherit';
    footer.style.display='inherit';
    signUpForm.style.display='none';
    loginForm.style.display='none';
}

function displayRegisterUserPage() {
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    manageCars.style.display='none';
    manageDrivers.style.display='none';
    signUpForm.style.display='none';
    loginForm.style.display='none';

    dashboard.style.display='none';
    header.style.display='none';
    footer.style.display='inherit';
    guestHeader.style.display='inherit';
    homepage.style.display='inherit';
}

function displayDriverShedulePage() {
    services.style.display='none';
    cars.style.display='none';
    about.style.display='none';
    blog.style.display='none';
    contact.style.display='none';
    manageCars.style.display='none';
    manageDrivers.style.display='none';
    signUpForm.style.display='none';
    loginForm.style.display='none';

    dashboard.style.display='none';
    header.style.display='none';
    footer.style.display='inherit';
    guestHeader.style.display='none';
    homepage.style.display='none';
    driverShedulePage.style.display='inherit';
}
