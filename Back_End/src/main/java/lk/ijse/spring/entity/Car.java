package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Car {
    @Id
    private String carNo;
    private String model;
    private String colour;
    private String brand;
    private String fuel_type;
    private String transmissionType;
    private int noOfPassenges;
    private int dailyRateForKm;
    private int monthlyRateForKm;
    private double dailyRateForRs;
    private double monthlyRateForRs;
    private double prizeExtraKm;
    private int totalMillage;
    private String status;


//    @OneToMany(mappedBy = "car")
//    private Category category;

    @OneToMany(mappedBy = "car")
    private List<Booking_Detail> bookingDetails = new ArrayList<>();

//    @OneToMany(mappedBy = "car")
//    private List<Return_Detail> return_details = new ArrayList<>();
}
