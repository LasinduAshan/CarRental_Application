package lk.ijse.spring.controller;


import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/login")
@CrossOrigin
public class LoginController {

    @Autowired
    LoginService loginService;


    @GetMapping(path = "/{email}/{password}")
    public ResponseEntity searchLoginUserRole(@PathVariable String email,@PathVariable String password){
        String userRole = loginService.searchLoginUserRole(email, password);
        StandardResponse success = new StandardResponse(200,"Success",userRole);
        return new ResponseEntity(success, HttpStatus.OK);
    }

}
