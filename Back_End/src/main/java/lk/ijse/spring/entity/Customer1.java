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
//@Entity
public class Customer1 {
    @Id
    private String custID;
    private String name;
    private String address;
    private String contact;
    private String nic;

//    @OneToOne(mappedBy = "customer",cascade = CascadeType.ALL)
//    private Login login;

//    @OneToMany(mappedBy = "customer")
//    private List<Booking_Detail> booking_details = new ArrayList<>();
//
//    @OneToMany(mappedBy = "customer")
//    private List<Return_Detail> return_details = new ArrayList<>();
}
