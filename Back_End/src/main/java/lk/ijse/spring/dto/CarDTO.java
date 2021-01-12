package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDTO {
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
}
