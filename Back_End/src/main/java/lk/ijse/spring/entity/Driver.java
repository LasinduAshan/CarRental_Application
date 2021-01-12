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
public class Driver {
    @Id
    private String driverID;
    private String name;
    private String address;
    private String nic;
    private String contact;
    private String status;

    @OneToMany(mappedBy = "driver")
    private List<Booking_Detail> bookingDetails = new ArrayList<>();
}
