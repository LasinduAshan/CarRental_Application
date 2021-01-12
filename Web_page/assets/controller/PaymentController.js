
// search booking detail
$("#btnSearchBookingDetailPayment").click(function () {
    console.log("working btn search booking detail");
    let carNo = $("#txtPaymentCarNo").val();
    $.ajax({
        url: "http://localhost:8080/spring/api/v1/booking/" + carNo,
        success: function (res) {
            console.log(res);
            let bookingDetail = res.data;
            let carModel = bookingDetail.carModel;
            let cusID = bookingDetail.custID;
            let cusName = bookingDetail.cusName;
            let driverID = bookingDetail.driverID;
            let driverName = bookingDetail.driverName;
            let pickUpdate = bookingDetail.pickupDate;
            let returnDate = bookingDetail.returnDate;
            let dailyRateForKm = bookingDetail.dailyRateForKm;
            let monthlyRateForKm = bookingDetail.monthlyRateForKm;
            let dailyRateForRs = bookingDetail.dailyRateForRs;
            let monthlyRateForRs = bookingDetail.monthlyRateForRs;
            let prizeExtraKm = bookingDetail.prizeExtraKm;
            let totalMillage = bookingDetail.totalMillage;
            // set details to input fields
            //$("#txtPaymentCarNo").val(bookingDetail.carNo);
            $("#txtPaymentCarModel").val(carModel);
            $("#txtPaymentCusID").val(cusID);
            $("#txtPaymentCusName").val(cusName);
            $("#txtPaymentDriverID").val(driverID);
            $("#txtPaymentDriverName").val(driverName);
            $("#txtPaymentPickUpDate").val(pickUpdate);
            $("#txtPaymentDueDate").val(returnDate);
            $("#txtPaymentDailyRateForKm").val(dailyRateForKm);
            $("#txtPaymentMonthlyRateForKm").val(monthlyRateForKm);
            $("#txtPaymentDailyRateForRs").val(dailyRateForRs);
            $("#txtPaymentMonthlyRateForRs").val(monthlyRateForRs);
            $("#txtPaymentPrizeExtraKm").val(prizeExtraKm);
            $("#txtPaymentTotalMillage").val(totalMillage);

        }
    });
});
