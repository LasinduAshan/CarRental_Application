package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Login;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto){
          Customer nic = repo.findCustomerByNic(dto.getNic());
       // Customer myCustomer2 = repo.getMyCustomer2(dto.getNic());
        if (nic == null){
            Customer c = mapper.map(dto, Customer.class);
            //Customer c = new Customer(dto.getName(),dto.getAddress(),dto.getContact(),dto.getNic());
            repo.save(c);
        }else {
            throw new RuntimeException("Customer Allready exist");
        }


    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getNic())) {
            Customer c = mapper.map(dto, Customer.class);
            repo.save(c);
        } else {
            throw new RuntimeException("No such customer for update..!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        Optional<Customer> customer =repo.findById(id);
        if (customer.isPresent()){
           return mapper.map(customer.get(), CustomerDTO.class);
        }else {
            throw new RuntimeException("No Customer for ID "+ id);
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("No Customer for the Delete ID "+ id);
        }

    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<CustomerDTO>>(){
        }.getType());
    }

    @Override
    public CustomerDTO searchCustomerByEmail(String email) {
        Optional<Customer> customer = Optional.ofNullable(repo.findCustomerByEmail(email));
        if (customer.isPresent()){
            return mapper.map(customer.get(), CustomerDTO.class);
        }else {
            throw new RuntimeException("No Customer for ID "+ email);
        }
    }
}
