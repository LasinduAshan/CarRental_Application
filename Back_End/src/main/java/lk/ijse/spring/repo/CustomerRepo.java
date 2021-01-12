package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer, String> {

    Customer findCustomerByNic(String nic);
    Customer findCustomerByEmail(String email);
    Customer findCustomerByCustID(int cusID);

}
