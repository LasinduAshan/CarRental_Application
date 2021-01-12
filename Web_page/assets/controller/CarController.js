
loadAllCars();
loadAllSelectTyepes();
loadAvailableCars();

function saveCars(){
    console.log("work btnsaveCar");

    let carNo = $("#txtCarNo").val();
    let model = $("#txtCarModel").val();
    let colour = $("#txtCarColour").val();
    let brand = $("#txtCarBrand").val();
    let fuel_type = $("#txtCarFuelType").val();
    let transmissionType = $("#txtCarTransmissionType").val();
    let noOfPassenges = $("#txtCarNoOfPassengers").val();
    let dailyRateForKm = $("#txtCarDailyRateForKm").val();
    let monthlyRateForKm = $("#txtCarMonthlyRateForKm").val();
    let dailyRateForRs = $("#txtCarDailyRateforRs").val();
    let monthlyRateForRs = $("#txtCarMonthlyRateforRs").val();
    let prizeExtraKm = $("#txtCarPrizeExtraKm").val();
    let totalMillage = $("#txtCarTotalMillage").val();

    console.log("working button");

    $.ajax({
        method: "post",
        url: "http://localhost:8080/spring/api/v1/car",
        contentType: "application/json",
        data: JSON.stringify({
            "carNo": carNo,
            "model": model,
            "colour": colour,
            "brand": brand,
            "fuel_type": fuel_type,
            "transmissionType": transmissionType,
            "noOfPassenges": parseInt(noOfPassenges),
            "dailyRateForKm": parseInt(dailyRateForKm),
            "monthlyRateForKm": parseInt(monthlyRateForKm),
            "dailyRateForRs": parseInt(dailyRateForRs),
            "monthlyRateForRs": parseInt(monthlyRateForRs),
            "prizeExtraKm": parseInt(prizeExtraKm),
            "totalMillage": parseInt(totalMillage),
            "status": "Available"
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Car Registered");
                //loadAllDrivers();
            } else {
                alert(res.data);
            }
            loadAllCars();

        }
    });
}

// Save Car
/*
$("#btnSaveCar").click(function () {

    console.log("work btnsaveCar");

    let carNo = $("#txtCarNo").val();
    let model = $("#txtCarModel").val();
    let colour = $("#txtCarColour").val();
    let brand = $("#txtCarBrand").val();
    let fuel_type = $("#txtCarFuelType").val();
    let transmissionType = $("#txtCarTransmissionType").val();
    let noOfPassenges = $("#txtCarNoOfPassengers").val();
    let dailyRateForKm = $("#txtCarDailyRateForKm").val();
    let monthlyRateForKm = $("#txtCarMonthlyRateForKm").val();
    let dailyRateForRs = $("#txtCarDailyRateforRs").val();
    let monthlyRateForRs = $("#txtCarMonthlyRateforRs").val();
    let prizeExtraKm = $("#txtCarPrizeExtraKm").val();
    let totalMillage = $("#txtCarTotalMillage").val();

    console.log("working button");

    $.ajax({
        method: "post",
        url: "http://localhost:8080/spring/api/v1/car",
        contentType: "application/json",
        data: JSON.stringify({
            "carNo": carNo,
            "model": model,
            "colour": colour,
            "brand": brand,
            "fuel_type": fuel_type,
            "transmissionType": transmissionType,
            "noOfPassenges": parseInt(noOfPassenges),
            "dailyRateForKm": parseInt(dailyRateForKm),
            "monthlyRateForKm": parseInt(monthlyRateForKm),
            "dailyRateForRs": parseInt(dailyRateForRs),
            "monthlyRateForRs": parseInt(monthlyRateForRs),
            "prizeExtraKm": parseInt(prizeExtraKm),
            "totalMillage": parseInt(totalMillage)
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Car Registered");
                //loadAllDrivers();
            } else {
                alert(res.data);
            }
            loadAllCars();

        }
    });

});
*/



// load all cars
function loadAllCars() {
    $('#tblCars').empty();
    $("#carRow").empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/car",
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let carNo = data[i].carNo;
                let model = data[i].model;
                let colour = data[i].colour;
                let brand = data[i].brand;
                let fuel_type = data[i].fuel_type;
                let transmissionType = data[i].transmissionType;
                let noOfPassenges = data[i].noOfPassenges;
                let dailyRateForKm = data[i].dailyRateForKm;
                let monthlyRateForKm = data[i].monthlyRateForKm;
                let dailyRateForRs = data[i].dailyRateForRs;
                let monthlyRateForRs = data[i].monthlyRateForRs;
                let prizeExtraKm = data[i].prizeExtraKm;
                let totalMillage = data[i].totalMillage;

                var row=`<tr> <td>${carNo}</td> <td>${model}</td><td>${colour}</td><td>${brand}</td><td>${fuel_type}</td><td>${transmissionType}</td><td>${noOfPassenges}</td><td>${dailyRateForKm}</td><td>${monthlyRateForKm}</td><td>${dailyRateForRs}</td><td>${monthlyRateForRs}</td><td>${prizeExtraKm}</td><td>${totalMillage}</td></tr>`;
                $('#tblCars').append(row);

                /* let x =`<div class="col-lg-4 col-md-6 mb-4">
               <div class="item-1">
                 <a href="#"><img src="assets/images/img_1.jpg" alt="Image" class="img-fluid"></a>
                 <div class="item-1-contents">
                   <div class="text-center">
                     <h3><a href="#">Range Rover S64 Coupe</a></h3>
                     <div class="rating">
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                     </div>
                     <div class="rent-price"><span>$250/</span>day</div>
                   </div>
                   <ul class="specs">
                     <li>
                       <span>Doors</span>
                       <span class="spec">${model}</span>
                     </li>
                     <li>
                       <span>Seats</span>
                       <span class="spec">${noOfPassenges}</span>
                     </li>
                     <li>
                       <span>Transmission</span>
                       <span class="spec">${transmissionType}</span>
                     </li>
                     <li>
                       <span>Minium age</span>
                       <span class="spec">${brand}</span>
                     </li>
                   </ul>
                   <div class="d-flex action">
                     <a href="#" class="btn btn-primary">Rent Now</a>
                   </div>
                 </div>
               </div>
             </div>`;

               $("#carRow").append(x);
*/
            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}


//search car
/*
$("#txtCarNo").on('keypress', function (e) {
    if (e.code == "Enter") {
        let carNo = $("#txtCarNo").val();
        $.ajax({
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
        });
    }
});
*/


$("#btnSearchCar").click(function () {

    console.log("work btnSearchCar");

        let carNo = $("#txtCarNo").val();
        $.ajax({
            url: "http://localhost:8080/spring/api/v1/car/" + carNo,
            success: function (res) {
                console.log(res);

                if (res.message == "Success") {
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
                } else {
                    alert(res.data);
                }


            }
        });
});



// update car
$("#btnUpdateCar").click(function () {


    let carNo = $("#txtCarNo").val();
    let model = $("#txtCarModel").val();
    let colour = $("#txtCarColour").val();
    let brand = $("#txtCarBrand").val();
    let fuel_type = $("#txtCarFuelType").val();
    let transmissionType = $("#txtCarTransmissionType").val();
    let noOfPassenges = $("#txtCarNoOfPassengers").val();
    let dailyRateForKm = $("#txtCarDailyRateForKm").val();
    let monthlyRateForKm = $("#txtCarMonthlyRateForKm").val();
    let dailyRateForRs = $("#txtCarDailyRateforRs").val();
    let monthlyRateForRs = $("#txtCarMonthlyRateforRs").val();
    let prizeExtraKm = $("#txtCarPrizeExtraKm").val();
    let totalMillage = $("#txtCarTotalMillage").val();

    console.log("working button");

    $.ajax({
        method: "put",
        url: "http://localhost:8080/spring/api/v1/car",
        contentType: "application/json",
        data: JSON.stringify({
            "carNo": carNo,
            "model": model,
            "colour": colour,
            "brand": brand,
            "fuel_type": fuel_type,
            "transmissionType": transmissionType,
            "noOfPassenges": parseInt(noOfPassenges),
            "dailyRateForKm": parseInt(dailyRateForKm),
            "monthlyRateForKm": parseInt(monthlyRateForKm),
            "dailyRateForRs": parseInt(dailyRateForRs),
            "monthlyRateForRs": parseInt(monthlyRateForRs),
            "prizeExtraKm": parseInt(prizeExtraKm),
            "totalMillage": parseInt(totalMillage),
            "status": "Available"
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Car updated");
                loadAllCars();
            } else {
                alert(res.data);
            }

        }
    });

});


//delete driver
$("#btnDeleteCar").click(function (){

    console.log("work btnDeleteCar");

    let carNo=$("#txtCarNo").val();
    $.ajax({
        method:"delete",
        url:"http://localhost:8080/spring/api/v1/car?id="+ carNo,
        success:function (res){
            if (res.message == "Success") {
                alert("Car Removed..!");
            } else {
                alert(res.data);
            }
            loadAllCars();
        }
    });
});


// car page eka click karma manage car eka display none wela car forms tika pennanawa methanin.......
btnCars.addEventListener('click',function () {
    loadAllCarForm();
    manageCars.style.display='none';
    carBookingForm.style.display='none';
    carBookingSubmitForm.style.display='none';
});
btnCarsGuest.addEventListener('click',function () {
    loadAllCarForm();
    manageCars.style.display='none';
    carBookingForm.style.display='none';
    carBookingSubmitForm.style.display='none';
});

function loadAllCarForm() {
    $("#carRow").empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/car",
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let carNo = data[i].carNo;
                let model = data[i].model;
                let colour = data[i].colour;
                let brand = data[i].brand;
                let fuel_type = data[i].fuel_type;
                let transmissionType = data[i].transmissionType;
                let noOfPassenges = data[i].noOfPassenges;
                let dailyRateForKm = data[i].dailyRateForKm;
                let monthlyRateForKm = data[i].monthlyRateForKm;
                let dailyRateForRs = data[i].dailyRateForRs;
                let monthlyRateForRs = data[i].monthlyRateForRs;
                let prizeExtraKm = data[i].prizeExtraKm;
                let totalMillage = data[i].totalMillage;

                var rs = "Rs."+dailyRateForRs+"/";

                let x =`<div class="col-lg-4 col-md-6 mb-4">
               <div class="item-1">
                 <a href="#"><img src="assets/images/img_1.jpg" alt="Image" class="img-fluid"></a>
                 <div class="item-1-contents">
                   <div class="text-center">
                     <h3><a href="#">${model}</a></h3>
                     <div class="rating">
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                     </div>
                     <div class="rent-price"><span>${rs}</span>daily rate for rs</div>
                   </div>
                   <ul class="specs">
                     <li>
                       <span>Car No</span>
                       <span class="spec">${carNo}</span>
                     </li>
                     <li>
                       <span>Seats</span>
                       <span class="spec">${noOfPassenges}</span>
                     </li>
                     <li>
                       <span>Transmission</span>
                       <span class="spec">${transmissionType}</span>
                     </li>
                     <li>
                       <span>Brand</span>
                       <span class="spec">${brand}</span>
                     </li>
                     <li>
                       <span>Monthly rate for Rs</span>
                       <span class="spec">${monthlyRateForRs}</span>
                     </li>
                     <li>
                       <span>Daily rate for Km</span>
                       <span class="spec">${dailyRateForKm}</span>
                     </li>
                     <li>
                       <span>Monthly rate for Km</span>
                       <span class="spec">${monthlyRateForKm}</span>
                     </li>
                   </ul>
                   <div class="d-flex action">
                     <a href="#" class="btn btn-primary" type="button" onclick="displayCarBookingForm()">Rent Now</a>
                   </div>
                 </div>
               </div>
             </div>`;

                $("#carRow").append(x);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}



// load cars forms slideShow
btnHome.addEventListener('click',function () {
   // loadAllCarFormSlideShow();
    manageCars.style.display='none';
});

function loadAllCarFormSlideShow() {
    $("#slideShow").empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/car",
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let carNo = data[i].carNo;
                let model = data[i].model;
                let colour = data[i].colour;
                let brand = data[i].brand;
                let fuel_type = data[i].fuel_type;
                let transmissionType = data[i].transmissionType;
                let noOfPassenges = data[i].noOfPassenges;
                let dailyRateForKm = data[i].dailyRateForKm;
                let monthlyRateForKm = data[i].monthlyRateForKm;
                let dailyRateForRs = data[i].dailyRateForRs;
                let monthlyRateForRs = data[i].monthlyRateForRs;
                let prizeExtraKm = data[i].prizeExtraKm;
                let totalMillage = data[i].totalMillage;



                let y =  ` <div class="item-1">
                    <a href="#"><img src="assets/images/img_1.jpg" alt="Image" class="img-fluid"></a>
                    <div class="item-1-contents">
                      <div class="text-center">
                        <h3><a href="#">Range Rover S64 Coupe</a></h3>
                        <div class="rating">
                          <span class="icon-star text-warning"></span>
                          <span class="icon-star text-warning"></span>
                          <span class="icon-star text-warning"></span>
                          <span class="icon-star text-warning"></span>
                          <span class="icon-star text-warning"></span>
                        </div>
                        <div class="rent-price"><span>$250/</span>day</div>
                      </div>
                      <ul class="specs">
                        <li>
                          <span>Doors</span>
                          <span class="spec">1</span>
                        </li>
                        <li>
                          <span>Seats</span>
                          <span class="spec">5</span>
                        </li>
                        <li>
                          <span>Transmission</span>
                          <span class="spec">Automatic</span>
                        </li>
                        <li>
                          <span>Minium age</span>
                          <span class="spec">18 years</span>
                        </li>
                      </ul>
                      <div class="d-flex action">
                        <a href="#" class="btn btn-primary">Rent Now</a>
                      </div>
                    </div>
                  </div>`;


                $("#slideShow").append(y);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })
}

function displayCarBookingForm() {
   carBookingForm.style.display="inherit";
   // bookingCarDetails();

}

function displaySubmitForm() {
    console.log("Working submit form");
    carBookingSubmitForm.style.display="inherit";
}


// Submit button form eke click event eke function eka.................
function btnSubmitForm() {
    console.log("Submit button working");
    $('#tblRequets tr').off('click');

    // let customerID ="";
    // let customerName ="";
    // let customerNIC ="";

    let carNo = $("#txtCarBookingID").val();
    let model = $("#carModelH3").text();

    let youWantDriver = $("#cf-1").val();
    let damageFee = $("#cf-2").val();
    let pickupdate = $("#cf-3").val();
    let returnDate = $("#cf-4").val();

    // customer ge email eken search karala wisthara tika gannawa
    $.ajax({
        url: "http://localhost:8080/spring/api/v1/customer/" + userEmail+"/"+userEmail,
        success: function (res) {
            let customer = res.data;
            // set details to input fields
          let customerID = customer.id;
          let customerName = customer.name;
          let customerNIC = customer.nic;

          console.log(customerID,customerName);




            // Request eka save karanna......
            $.ajax({
                method: "post",
                url: "http://localhost:8080/spring/api/v1/request",
                contentType: "application/json",
                data: JSON.stringify({
                    // "reqID": damageFee,
                    "carNo": carNo,
                    "carModel": model,
                    "cusID": customerID,
                    "cusName": customerName,
                    "heWantDriver": youWantDriver,
                    "damageFee": damageFee,
                    "pickUpDate": pickupdate,
                    "returnDate": returnDate
                }),
                success: function (res) {
                    if (res.message == "Success") {
                        alert("Request sent");
                        clearSubmitForm();
                        carBookingSubmitForm.style.display="none";
                        carBookingForm.style.display="none";
                        //requestTableClick();
                        loadAllRequests();
                    } else {
                        alert(res.data);
                    }


                }
            });

        }
    });


  //  console.log(customerID,customerName,customerNIC);

/*// Request eka save karanna......
    $.ajax({
        method: "post",
        url: "http://localhost:8080/spring/api/v1/request",
        contentType: "application/json",
        data: JSON.stringify({
            // "reqID": damageFee,
            "carNo": carNo,
            "carModel": model,
            "cusID": userEmail,
            "cusName": userEmail,
            "heWantDriver": youWantDriver,
            "damageFee": damageFee,
            "pickUpDate": pickupdate,
            "returnDate": returnDate
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Request sent");
            } else {
                alert(res.data);
            }


        }
    });*/
}

function clearSubmitForm() {
    $("#txtCarBookingID").val("");
    $("#carModelH3").text("");
    $("#txtTransmission").val("");
    $("#txtDailyRateForRs").val("");
    $("#txtMonthlyRateForRs").val("");

    $("#cf-1").val("");
    $("#cf-2").val("");
    $("#cf-3").val("");
    $("#cf-4").val("");
}


function loadAllSelectTyepes() {
    var a="All ";
    var b="brand - General";
    var c="brand - Premium";
    var d="brand - Luxury";
    var e="Transmission - auto";
    var f="Transmission - manual";
    var g="Fuel type - Diesel";
    var h="Fuel type - Petrol";
    $('#selectCustomerID').append(`<option>${a}</option>`);
    $('#selectCustomerID').append(`<option>${b}</option>`);
    $('#selectCustomerID').append(`<option>${c}</option>`);
    $('#selectCustomerID').append(`<option>${d}</option>`);
    $('#selectCustomerID').append(`<option>${e}</option>`);
    $('#selectCustomerID').append(`<option>${f}</option>`);
    $('#selectCustomerID').append(`<option>${g}</option>`);
    $('#selectCustomerID').append(`<option>${h}</option>`);
}

$('#selectCustomerID').on('change', function () {
    var id = $(this).val();
    console.log("combobox work");
    console.log(id);
    let value="";

    if (id == "brand - General"){
        value="general";
    }else if (id == "brand - Premium"){
        value="premium";
    }else if (id == "brand - Luxury"){
        value="Luxury";
    }else if (id == "Transmission - auto"){
        value="auto";
    }else if (id == "Transmission - manual"){
        value="manual";
    }else if (id == "Fuel type - Diesel"){
        value="diesel";
    }else if (id == "Fuel type - Petrol"){
        value="petrol";
    }else{
        //loadAllCarForm();
    }



    $("#carRow").empty();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/car/" + value+"/"+value,
        // async: true,
        success: function (res) {
            let data = res.data;
            for (var i in data){
                let carNo = data[i].carNo;
                let model = data[i].model;
                let colour = data[i].colour;
                let brand = data[i].brand;
                let fuel_type = data[i].fuel_type;
                let transmissionType = data[i].transmissionType;
                let noOfPassenges = data[i].noOfPassenges;
                let dailyRateForKm = data[i].dailyRateForKm;
                let monthlyRateForKm = data[i].monthlyRateForKm;
                let dailyRateForRs = data[i].dailyRateForRs;
                let monthlyRateForRs = data[i].monthlyRateForRs;
                let prizeExtraKm = data[i].prizeExtraKm;
                let totalMillage = data[i].totalMillage;

                var rs = "Rs."+dailyRateForRs+"/";

                let x =`<div class="col-lg-4 col-md-6 mb-4">
               <div class="item-1">
                 <a href="#"><img src="assets/images/img_1.jpg" alt="Image" class="img-fluid"></a>
                 <div class="item-1-contents">
                   <div class="text-center">
                     <h3><a href="#">${model}</a></h3>
                     <div class="rating">
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                       <span class="icon-star text-warning"></span>
                     </div>
                     <div class="rent-price"><span>${rs}</span>daily rate for rs</div>
                   </div>
                   <ul class="specs">
                     <li>
                       <span>Car No</span>
                       <span class="spec">${carNo}</span>
                     </li>
                     <li>
                       <span>Seats</span>
                       <span class="spec">${noOfPassenges}</span>
                     </li>
                     <li>
                       <span>Transmission</span>
                       <span class="spec">${transmissionType}</span>
                     </li>
                     <li>
                       <span>Brand</span>
                       <span class="spec">${brand}</span>
                     </li>
                     <li>
                       <span>Monthly rate for Rs</span>
                       <span class="spec">${monthlyRateForRs}</span>
                     </li>
                     <li>
                       <span>Daily rate for Km</span>
                       <span class="spec">${dailyRateForKm}</span>
                     </li>
                     <li>
                       <span>Monthly rate for Km</span>
                       <span class="spec">${monthlyRateForKm}</span>
                     </li>
                   </ul>
                   <div class="d-flex action">
                     <a href="#" class="btn btn-primary" type="button" onclick="displayCarBookingForm()">Rent Now</a>
                   </div>
                 </div>
               </div>
             </div>`;

                $("#carRow").append(x);

            }
        },
        error: function (ob, txtStatus, error) {
            console.log(error);
            console.log(txtStatus);
            console.log(ob);
        }
    })


})




function loadAvailableCars() {
    let status = "Available";

    // free drivers la aran random ekkenek select kara gannawa
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/spring/api/v1/car/" + status+"/"+status+"/"+status,
        // async: true,
        success: function (res) {
            let data = res.data;
            $('#txtAvailableCarsH2').text(data.length);
            $('#txtAvailableCar').text(data.length);
        }
    })
}
