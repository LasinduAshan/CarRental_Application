
loadAllRequests();
loadAllBookingDetails();

//search car
$("#txtCarBookingID").on('keypress', function (e) {
    if (e.code === "Enter") {
        let carBookingNo = $("#txtCarBookingID").val();
        console.log("working car booking");
        /*$.ajax({
            url: "http://localhost:8080/spring/api/v1/car/" + carNo,
            success: function (res) {
                console.log(res);
                let car = res.data;
                // set details to input fields
                $("#txtCarNo").val(car.carNo);
                $("#txtCarModel").val(car.model);
                $("#txtCarColour").val(car.colour);
                $("#txtCarBrand").val(car.brand);
                $("#txtCarFuelType").val(car.fuel_type);
                $("#txtCarTransmissionType").val(car.transmissionType);
                $("#txtCarNoOfPassengers").val(car.noOfPassenges);
                $("#txtCarDailyRateForKm").val(car.dailyRateForKm);
                $("#txtCarMonthlyRateForKm").val(car.monthlyRateForKm);
                $("#txtCarDailyRateforRs").val(car.dailyRateForRs);
                $("#txtCarMonthlyRateforRs").val(car.monthlyRateForRs);
                $("#txtCarPrizeExtraKm").val(car.prizeExtraKm);
                $("#txtCarTotalMillage").val(car.totalMillage);

            }
        });*/
    }
});



$('#btnSearchBookingCarDetails').click(function () {
    console.log("working booking");
    let carNo = $("#txtCarBookingID").val();
    $.ajax({
        url: "http://localhost:8080/spring/api/v1/car/" + carNo,
        success: function (res) {
            console.log(res);

            if (res.message == "Success") {
                let car = res.data;

                if (car.status == "Booked"){
                    alert(" sorry this car booked");
                }else {
                    // set details to input fields
                    $("#txtCarBookingID").val(car.carNo);
                    $("#carModelH3").text(car.model);
                    $("#txtTransmission").val(car.transmissionType);
                    $("#txtDailyRateForRs").val(car.dailyRateForRs);
                    $("#txtMonthlyRateForRs").val(car.monthlyRateForRs);

                    $("#txtWadada").val(car.dailyRateForRs);
                }


            } else {
                alert(res.data);
            }


        }
    });
});


//load all customer requests
function loadAllRequests() {
    $('#tblRequets').empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/request",
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let reqId = data[i].reqID;
                let carNo = data[i].carNo;
                let model = data[i].carModel;
                let customerName = data[i].cusName;
                let driver = data[i].heWantDriver;
                let damageFee = data[i].damageFee;
                let pickupDate = data[i].pickUpDate;
                let returnDate = data[i].returnDate;

                var row=`<tr> <td>${reqId}</td> <td>${carNo}</td><td>${model}</td><td>${customerName}</td><td>${driver}</td><td>${damageFee}</td><td>${pickupDate}</td><td>${returnDate}</td></tr>`;
                $('#tblRequets').append(row);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}

// row eka click karama eke id textField ekata ganna
/*function requestTableClick() {
    $('#tblRequets tr').click(function () {

        let reqID = $($(this).children().get(0)).text();

        $('#txtRequestID').val(reqID);
        //console.log(reqID);
    });
}*/


$('#btnAcceptRequest').click(function () {
    console.log("Accept request");

    let reqID =parseInt($("#txtRequestID").val());
    console.log(reqID.type);
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/request/" + reqID,
        success: function (res) {
            console.log(res);
            let request = res.data;
            // set details to input fields
            let carNo = request.carNo;
            let carModel = request.carModel;
           let cusID = parseInt(request.cusID);
           let cusName = request.cusName;
           let damageFee = parseInt(request.damageFee);
           let pickUpDate = request.pickUpDate;
           let returnDate = request.returnDate;
           let status = "Free";

           // free drivers la aran random ekkenek select kara gannawa
            $.ajax({
                method: "GET",
                url: "http://localhost:8080/spring/api/v1/driver/" + status+"/"+status,
                // async: true,
                success: function (res) {
                    let data = res.data;
                    //Random numbers gannawa free driversla inna ganata
                    let number = Math.floor(Math.random() * data.length) + 1;

                    let id = data[number].id;
                    let name = data[number].name;
                    // console.log(id,name);

                    //BookingDetails ekata save karna eka
                    $.ajax({
                        method: "post",
                        url: "http://localhost:8080/spring/api/v1/booking",
                        contentType: "application/json",
                        data: JSON.stringify({
                            "carNo": carNo,
                            "custID": cusID,
                            "driverID": id,
                            "damageFee": damageFee,
                            "pickupDate": pickUpDate,
                            "returnDate": returnDate,
                            "carModel": carModel,
                            "cusName": cusName,
                            "driverName": name,
                            "reqID": reqID
                        }),
                        success: function (res) {
                            if (res.message == "Success") {
                                alert("Car Booking Success");

                                loadAllRequests();
                                loadAllBookingDetails();
                                loadAvailableDrivers();
                                loadAvailableCars();

                            } else {
                                alert(res.data);
                            }

                        }
                    });



                }
            })


        }
    });

});

$('#btnDeclineRequest').click(function () {

    console.log("Reject request");

    let reqID =parseInt($("#txtRequestID").val());

    // request eka table eken ain wenna book karama......
     $.ajax({
         method:"delete",
         url:"http://localhost:8080/spring/api/v1/request?id="+ reqID,
         success:function (res){
             if (res.message == "Success") {
                 alert("Reject Request..!");
                 loadAllRequests();
             } else {
                 alert(res.data);
             }
         }
     });




});


function loadAllBookingDetails() {
    $('#tblBookingDetails').empty();

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

                var row=`<tr> <td>${carNo}</td> <td>${model}</td><td>${cusId}</td><td>${cusName}</td><td>${driverId}</td><td>${driverName}</td><td>${pickupdate}</td><td>${returnDate}</td><td>${damageFee}</td></tr>`;
                $('#tblBookingDetails').append(row);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}
