package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;


@AllArgsConstructor
@NoArgsConstructor
@Data
//@Entity
public class DriverDTO {
   // @Id
    private String id;
    private String name;
    private String address;
    private String nic;
    private String contact;
    private String email;
    private String password;
    private String status;

    public DriverDTO(String id, String name, String address, String nic, String contact) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.nic = nic;
        this.contact = contact;
    }
}
