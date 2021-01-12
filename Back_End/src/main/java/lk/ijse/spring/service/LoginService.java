package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.LoginDTO;

import java.util.List;

public interface LoginService {
    public void saveLoginDetails(LoginDTO dto);
    public String searchLoginUserRole(String email,String password);

//    public void updateCustomer(CustomerDTO dto);
//    public CustomerDTO searchCustomer(String id);
//    public void deleteCustomer(String id);
//    public List<CustomerDTO> getAllCustomers();

}
