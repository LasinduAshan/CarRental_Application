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
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    LoginService loginService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity addCustomer(@RequestBody CustomerDTO dto){
        customerService.saveCustomer(dto);
        loginService.saveLoginDetails(new LoginDTO(dto.getEmail(),dto.getPassword(),"Customer"));
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.CREATED);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteCustomer(@RequestParam String id){
        customerService.deleteCustomer(id);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateCustomer(@RequestBody CustomerDTO dto) {
        customerService.updateCustomer(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchCustomer(@PathVariable String id){
        CustomerDTO customerDTO = customerService.searchCustomer(id);
        StandardResponse success = new StandardResponse(200,"Success",customerDTO);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllCustomers(){
        List<CustomerDTO> allCustomers = customerService.getAllCustomers();
        StandardResponse success = new StandardResponse(200,"Success",allCustomers);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}/{email}")
    public ResponseEntity searchCustomerByEmail(@PathVariable String id,@PathVariable String email) {
        CustomerDTO customerDTO = customerService.searchCustomerByEmail(email);
        StandardResponse success = new StandardResponse(200,"Success",customerDTO);
        return new ResponseEntity(success, HttpStatus.OK);
    }

}
