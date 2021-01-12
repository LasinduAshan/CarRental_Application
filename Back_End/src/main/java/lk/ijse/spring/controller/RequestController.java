package lk.ijse.spring.controller;


import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.dto.RequestDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.service.RequestService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/request")
@CrossOrigin
public class RequestController {

    @Autowired
    RequestService requestService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity sendRequest(@RequestBody RequestDTO dto){
        requestService.saveRequest(dto);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.CREATED);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteDriver(@RequestParam int id){
        requestService.deleteRequest(id);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.OK);
    }

   /* @PutMapping
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto) {
        driverService.updateDriver(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }*/
    @GetMapping(path = "/{id}")
    public ResponseEntity searchRequest(@PathVariable int id){
        RequestDTO requestDTO = requestService.searchRequest(id);
        StandardResponse success = new StandardResponse(200,"Success",requestDTO);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllRequests(){
        List<RequestDTO> allRequests = requestService.getAllRequests();
        StandardResponse success = new StandardResponse(200,"Success",allRequests);
        return new ResponseEntity(success, HttpStatus.OK);
    }

}
