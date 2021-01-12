package lk.ijse.spring.controller;


import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.service.CarService;
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
@RequestMapping("/api/v1/car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService carService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity addDriver(@RequestBody CarDTO dto){
        carService.saveCar(dto);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.CREATED);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteCar(@RequestParam String id){
        carService.deleteCar(id);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateCar(@RequestBody CarDTO dto) {
        carService.updateCar(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchCar(@PathVariable String id){
        CarDTO carDTO = carService.searchCar(id);
        StandardResponse success = new StandardResponse(200,"Success",carDTO);
        return new ResponseEntity(success, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity getAllCars(){
        List<CarDTO> allCars = carService.getAllCars();
        StandardResponse success = new StandardResponse(200,"Success",allCars);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping(path = "/{value}/{value1}")
    public ResponseEntity searchAllCarsByValues(@PathVariable String value,@PathVariable String value1) {
        List<CarDTO> allCarsByValues = carService.getAllCarsByValues(value);
        StandardResponse success = new StandardResponse(200,"Success",allCarsByValues);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping(path = "/{value}/{value1}/{status}")
    public ResponseEntity searchAllCarsByStatus(@PathVariable String value,@PathVariable String value1,@PathVariable String status) {
        List<CarDTO> allCarsByStatus = carService.getAllCarsByStatus(status);
        StandardResponse success = new StandardResponse(200,"Success",allCarsByStatus);
        return new ResponseEntity(success, HttpStatus.OK);
    }

}
