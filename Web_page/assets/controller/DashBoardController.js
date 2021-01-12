
loadTotalCustomers();
loadAvailableDrivers();

//DashBoard ekata
function loadTotalCustomers() {

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/customer",
        // async: true,
        success: function (res) {
            let data = res.data;
            $('#txtTotalCustomerH2').text(data.length);
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}



function loadAvailableDrivers() {
    let status = "Free";

    // free drivers la aran random ekkenek select kara gannawa
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/driver/" + status+"/"+status,
        // async: true,
        success: function (res) {
            let data = res.data;
            $('#txtAvailableDriverH2').text(data.length);
        }
    })
}
