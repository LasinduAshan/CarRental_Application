package lk.ijse.spring.controller;


import lk.ijse.spring.dto.BookingDetailDTO;
import lk.ijse.spring.dto.RequestDTO;
import lk.ijse.spring.service.BookingDetailService;
import lk.ijse.spring.service.RequestService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin
public class BookingDetailController {

    @Autowired
    BookingDetailService bookingDetailService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity saveBookingDetails(@RequestBody BookingDetailDTO dto){
        bookingDetailService.saveBookingDetail(dto);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.CREATED);
    }

    /*@DeleteMapping(params = {"id"})
    public ResponseEntity deleteDriver(@RequestParam String id){
        driverService.deleteDriver(id);
        StandardResponse success = new StandardResponse(200,"Success",null);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto) {
        driverService.updateDriver(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }*/

    @GetMapping(path = "/{id}")
    public ResponseEntity searchBookingDetail(@PathVariable String id){
        BookingDetailDTO bookingDetailDTO = bookingDetailService.searchBookingDetail(id);
        StandardResponse success = new StandardResponse(200,"Success",bookingDetailDTO);
        return new ResponseEntity(success, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllBookingDetails(){
        List<BookingDetailDTO> allBookingDetails = bookingDetailService.getAllBookingDetails();
        StandardResponse success = new StandardResponse(200,"Success",allBookingDetails);
        return new ResponseEntity(success, HttpStatus.OK);
    }

}
