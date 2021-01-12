package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Request {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int reqID;
    private String carNo;
    private String carModel;
    private String cusID;
    private String cusName;
    private String heWantDriver;
    private String damageFee;
    private String pickUpDate;
    private String returnDate;

    public Request(String carNo, String carModel, String cusID, String cusName, String heWantDriver, String damageFee, String pickUpDate, String returnDate) {
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
