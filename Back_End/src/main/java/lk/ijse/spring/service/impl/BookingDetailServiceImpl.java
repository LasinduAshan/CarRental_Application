package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.BookingDetailDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.*;
import lk.ijse.spring.repo.*;
import lk.ijse.spring.service.BookingDetailService;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookingDetailServiceImpl implements BookingDetailService {

    @Autowired
    BookingDetailRepo repo;

    @Autowired
    CustomerRepo customerRepoRepo;
    @Autowired
    DriverRepo driverRepo;

    @Autowired
    CarRepo carRepo;

    @Autowired
    RequestRepo requestRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveBookingDetail(BookingDetailDTO dto) {
        System.out.println(dto.toString());

        Car car = carRepo.getOne(dto.getCarNo());
        Driver driver = driverRepo.getOne(dto.getDriverID());
        Customer customer = customerRepoRepo.findCustomerByCustID(dto.getCustID());
        Request request = requestRepo.findRequestByReqID(dto.getReqID());

        System.out.println(car.toString());
        System.out.println(driver.toString());
        System.out.println(customer.toString());


        //if (!repo.existsById(dto.getCarNo())) {
           //Booking_Detail b = mapper.map(dto, Booking_Detail.class);
           Booking_Detail b = new Booking_Detail(
                   new CustomerCarDriver_PK(dto.getCustID(),dto.getCarNo(),dto.getDriverID()),
                   dto.getCarModel(),
                   dto.getCusName(),
                   dto.getDriverName(),
                   dto.getPickupDate(),
                   dto.getReturnDate(),
                   dto.getDamageFee(),
                   customer,
                   car,
                   driver
           );
        Booking_Detail save = repo.save(b);
        if (save != null){
            requestRepo.delete(request);
            driver.setStatus("Booked");
            car.setStatus("Booked");
        }

//        } else {
//            throw new RuntimeException("Car All ready Booking..!");
//        }
    }

    @Override
    public void updateBookingDetail(BookingDetailDTO dto) {

    }

    @Override
    public BookingDetailDTO searchBookingDetail(String id) {
        Booking_Detail b = repo.getBooking_Detail(id);
        //meka thamai kalin booking details car no eken search karanma yawwe...........
        //BookingDetailDTO boking = new BookingDetailDTO(b.getCar().getCarNo(),b.getCustomer().getCustID(),b.getDriver().getDriverID(),b.getDamageFee(),b.getPickupDate(),b.getReturnDate(),b.getCarModel(),b.getCusName(),b.getDriverName(),1);
        BookingDetailDTO boking = new BookingDetailDTO(b.getCar().getCarNo(),
                b.getCustomer().getCustID(),
                b.getDriver().getDriverID(),
                b.getDamageFee(),
                b.getPickupDate(),
                b.getReturnDate(),
                b.getCarModel(),
                b.getCusName(),
                b.getDriverName(),
                1,
                b.getCar().getDailyRateForKm(),
                b.getCar().getMonthlyRateForKm(),
                b.getCar().getDailyRateForRs(),
                b.getCar().getMonthlyRateForRs(),
                b.getCar().getPrizeExtraKm(),
                b.getCar().getTotalMillage()
        );
        return boking;
    }

    @Override
    public void deleteBookingDetail(String id) {

    }

    @Override
    public List<BookingDetailDTO> getAllBookingDetails() {
        List<Booking_Detail> all = repo.findAll();
        List<BookingDetailDTO> bookingList = new ArrayList<>();
        for (Booking_Detail b : all){
            bookingList.add(new BookingDetailDTO(b.getCar().getCarNo(),b.getCustomer().getCustID(),b.getDriver().getDriverID(),b.getDamageFee(),b.getPickupDate(),b.getReturnDate(),b.getCarModel(),b.getCusName(),b.getDriverName(),1));
        }
        return bookingList;
    }
}
