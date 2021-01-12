package lk.ijse.spring.dto;

import lk.ijse.spring.entity.CustomerCarDriver_PK;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
//@Entity
public class BookingDetailDTO {
    private String carNo;
    private int custID;
    private String driverID;
    private double damageFee;
    private String pickupDate;
    private String returnDate;
    private String carModel;
    private String cusName;
    private String driverName;
    private int reqID;

    // car eke details ganna hadana tika

    private int dailyRateForKm;
    private int monthlyRateForKm;
    private double dailyRateForRs;
    private double monthlyRateForRs;
    private double prizeExtraKm;
    private int totalMillage;


    public BookingDetailDTO(String carNo, int custID, String driverID, double damageFee, String pickupDate, String returnDate, String carModel, String cusName, String driverName, int reqID) {
        this.carNo = carNo;
        this.custID = custID;
        this.driverID = driverID;
        this.damageFee = damageFee;
        this.pickupDate = pickupDate;
        this.returnDate = returnDate;
        this.carModel = carModel;
        this.cusName = cusName;
        this.driverName = driverName;
        this.reqID = reqID;
    }
}
