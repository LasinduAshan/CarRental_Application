package lk.ijse.spring.controller;


import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @Autowired
    LoginService loginService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity addDriver(@RequestBody DriverDTO dto){
        driverService.saveDriver(dto);
        loginService.saveLoginDetails(new LoginDTO(dto.getEmail(),dto.getPassword(),"Driver"));
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.CREATED);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteDriver(@RequestParam String id){
        driverService.deleteDriver(id);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto) {
        driverService.updateDriver(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchDriver(@PathVariable String id){
        DriverDTO driverDTO = driverService.searchDriver(id);
        StandardResponse success = new StandardResponse(200,"Success",driverDTO);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllDrivers(){
        List<DriverDTO> allDrivers = driverService.getAllDrivers();
        StandardResponse success = new StandardResponse(200,"Success",allDrivers);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}/{status}")
    public ResponseEntity searchAllDriversByStatus(@PathVariable String id,@PathVariable String status) {
        List<DriverDTO> allDrivers = driverService.getAllDriversByStatus(status);
        StandardResponse success = new StandardResponse(200,"Success",allDrivers);
        return new ResponseEntity(success, HttpStatus.OK);
    }


}
