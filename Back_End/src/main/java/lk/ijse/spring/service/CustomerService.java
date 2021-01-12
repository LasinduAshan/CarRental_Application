package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    public void saveCustomer(CustomerDTO dto);
    public void updateCustomer(CustomerDTO dto);
    public CustomerDTO searchCustomer(String id);
    public void deleteCustomer(String id);
    public List<CustomerDTO> getAllCustomers();
    public CustomerDTO searchCustomerByEmail(String id);

}
