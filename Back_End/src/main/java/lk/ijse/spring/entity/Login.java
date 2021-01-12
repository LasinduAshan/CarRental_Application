package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loginID;
    private String email;
    private String password;
    private String role;

    public Login(String email, String password, String role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
//    @OneToOne(cascade = {CascadeType.ALL})
//    @JoinColumn(name = "userID", referencedColumnName = "custID", nullable = false)
//    private Customer1 customer;
}
