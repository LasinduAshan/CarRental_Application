package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Booking_Detail {
    @EmbeddedId
    private CustomerCarDriver_PK customerCarDriver_pk;
    private String carModel;
    private String cusName;
    private String driverName;
    private String pickupDate;
    private String returnDate;
    private double damageFee;

    @ManyToOne
    @JoinColumn(name = "custID", referencedColumnName = "custID", insertable = false, updatable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "carNo", referencedColumnName = "carNo", insertable = false, updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "driverID", referencedColumnName = "driverID", insertable = false, updatable = false)
    private Driver driver;

    public Booking_Detail(String carModel, String cusName, String driverName, String pickupDate, String returnDate, double damageFee, Customer customer, Car car, Driver driver) {
        this.carModel = carModel;
        this.cusName = cusName;
        this.driverName = driverName;
        this.pickupDate = pickupDate;
        this.returnDate = returnDate;
        this.damageFee = damageFee;
        this.customer = customer;
        this.car = car;
        this.driver = driver;
    }


}
