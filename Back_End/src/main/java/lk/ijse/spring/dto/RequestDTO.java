package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestDTO {
    private int reqID;
    private String carNo;
    private String carModel;
    private String cusID;
    private String cusName;
    private String heWantDriver;
    private String damageFee;
    private String pickUpDate;
    private String returnDate;

    public RequestDTO(String carNo, String carModel, String cusID, String cusName, String heWantDriver, String damageFee, String pickUpDate, String returnDate) {
        this.carNo = carNo;
        this.carModel = carModel;
        this.cusID = cusID;
        this.cusName = cusName;
        this.heWantDriver = heWantDriver;
        this.damageFee = damageFee;
        this.pickUpDate = pickUpDate;
        this.returnDate = returnDate;
    }
}
