package lk.ijse.spring.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Customer {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int custID;
    private String name;
    private String address;
    private String contact;
    private String nic;
    private String email;


    @OneToMany(mappedBy = "customer")
    private List<Booking_Detail> bookingDetails = new ArrayList<>();

    public Customer(String name, String address, String contact, String nic) {
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.nic = nic;
    }
}
