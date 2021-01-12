package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Login;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.LoginRepo;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.LoginService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveLoginDetails(LoginDTO dto) {
        //if (!repo.existsById(dto.getPassword())){
            //Customer c = mapper.map(dto, Customer.class);
            Login l = new Login(dto.getEmail(),dto.getPassword(),dto.getRole());
            repo.save(l);
//        }else {
//            throw new RuntimeException("login details error");
//        }
    }

    @Override
    public String searchLoginUserRole(String email, String password) {
        Login loginDetails = repo.findLoginByEmailAndAndPassword(email, password);
        if (loginDetails != null ){
            return loginDetails.getRole();
        }else {
            throw new RuntimeException("Wrong Email or password");
        }
    }
}
