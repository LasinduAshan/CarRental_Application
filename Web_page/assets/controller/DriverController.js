
loadAllDrivers();
loadAllDriverShedule();

// Save driver
$("#btnSaveDriver").click(function () {

    let id = $("#txtDriverID").val();
    let name = $("#txtDriverName").val();
    let address = $("#txtDriverAddress").val();
    let nic = $("#txtDriverNic").val();
    let contact = $("#txtDriverContact").val();
    let email = $("#txtDriverEmail").val();
    let password = $("#txtDriverPassword").val();
    let status = "Free";

    console.log("working button");

    $.ajax({
        method: "post",
        url: "http://localhost:8080/spring/api/v1/driver",
        contentType: "application/json",
        data: JSON.stringify({
            "id": id,
            "name": name,
            "address": address,
            "contact": contact,
            "nic": nic,
            "email": email,
            "password": password,
            "status": status
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Driver Registered");
                loadAllDrivers();
                loadAvailableDrivers();
            } else {
                alert(res.data);
            }
            // loadAllCustomers();

        }
    });

});



// load all Drivers
function loadAllDrivers() {
    $('#tblDrivers').empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/driver",
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let id = data[i].id;
                let name = data[i].name;
                let address = data[i].address;
                let nic = data[i].nic;
                let contact = data[i].contact;

                var row=`<tr> <td>${id}</td> <td>${name}</td><td>${address}</td><td>${nic}</td><td>${contact}</td></tr>`;
                $('#tblDrivers').append(row);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}


//search Customer
$("#btnSearchDriver").click(function () {
    console.log("working");
        let driverID = $("#txtDriverID").val();
        $.ajax({
            url: "http://localhost:8080/spring/api/v1/driver/" + driverID,
            success: function (res) {
                console.log(res);
                let driver = res.data;
                // set details to input fields
                $("#txtDriverID").val(driver.id);
                $("#txtDriverName").val(driver.name);
                $("#txtDriverAddress").val(driver.address);
                $("#txtDriverNic").val(driver.nic);
                $("#txtDriverContact").val(driver.contact);

            }
        });
});


$("#txtDriverID").on('keypress', function (e) {
    if (e.code === "Enter") {
       alert("key press working");
    }
});


// update driver
$("#btnUpdateDriver").click(function () {

    let id = $("#txtDriverID").val();
    let name = $("#txtDriverName").val();
    let address = $("#txtDriverAddress").val();
    let nic = $("#txtDriverNic").val();
    let contact = $("#txtDriverContact").val();
    let email = $("#txtDriverEmail").val();
    let password = $("#txtDriverPassword").val();
    let status = "Free";

    console.log("working button");

    $.ajax({
        method: "put",
        url: "http://localhost:8080/spring/api/v1/driver",
        contentType: "application/json",
        data: JSON.stringify({
            "id": id,
            "name": name,
            "address": address,
            "contact": contact,
            "nic": nic,
            "email": email,
            "password": password,
            "status": status
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Driver Updated");
                loadAllDrivers();
            } else {
                alert(res.data);
            }
            // loadAllCustomers();

        }
    });

});


//delete driver
$("#btnDeleteDriver").click(function (){
    let driverID=$("#txtDriverID").val();
    $.ajax({
        method:"delete",
        url:"http://localhost:8080/spring/api/v1/driver?id="+ driverID,
        success:function (res){
            if (res.message == "Success") {
                alert("Driver Removed..!");
            } else {
                alert(res.data);
            }
            loadAllDrivers();
        }
    });
});


function loadAllDriverShedule() {
    $('#tblDriverShedule').empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/booking",
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let carNo = data[i].carNo;
                let model = data[i].carModel;
                let cusId = data[i].custID;
                let cusName = data[i].cusName;
                let driverId = data[i].driverID;
                let driverName = data[i].driverName;
                let pickupdate = data[i].pickupDate;
                let returnDate = data[i].returnDate;
                let damageFee = data[i].damageFee;

                var row=`<tr> <td>${driverId}</td> <td>${driverName}</td><td>${carNo}</td><td>${model}</td><td>${pickupdate}</td><td>${returnDate}</td></tr>`;
                $('#tblDriverShedule').append(row);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}
