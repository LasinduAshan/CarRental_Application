package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepo extends JpaRepository<Login, String> {

    Login findLoginByEmailAndAndPassword(String email, String password);

//    @Query(value = "select * from login where email=?1 and password=?2", nativeQuery = true)
//    Customer getUserRole(String email, String password);
}
