loadAllCustomers();

// sending Customer data through json format
$("#btn-registerCustomer").click(function () {

    let name = $("#txtSingUpName").val();
    let address = $("#txtSingUpAddress").val();
    let contact = $("#txtSingUpContact").val();
    let nic = $("#txtSingUpNIC").val();
    let email = $("#txtSingUpEmail").val();
    let password = $("#txtSingUpPassword").val();

    console.log("working button");

    $.ajax({
        method: "post",
        url: "http://localhost:8080/spring/api/v1/customer",
        contentType: "application/json",
        data: JSON.stringify({
            "name": name,
            "address": address,
            "contact": contact,
            "nic": nic,
            "email": email,
            "password": password
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Customer Registered");
                loadAllCustomers();
                displayLoginForm();
                loadTotalCustomers();
            } else {
                alert(res.data);
            }
           // loadAllCustomers();

        }
    });

});


function loadAllCustomers() {
    $('#tblCustomers').empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/customer",
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
                $('#tblCustomers').append(row);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}
