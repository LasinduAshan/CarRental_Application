package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Booking_Detail;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookingDetailRepo extends JpaRepository<Booking_Detail, String> {

//    Booking_Detail findByCarIn(String carNo);

    @Query(value = "select * from booking_detail where carNo=?1", nativeQuery = true)
    Booking_Detail getBooking_Detail(String carNo);

}
