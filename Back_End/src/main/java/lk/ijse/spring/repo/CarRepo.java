package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepo extends JpaRepository<Car, String> {

    @Query(value = "select * from car where brand=?1 or fuel_type=?2 or noOfPassenges=?3 or transmissionType=?4", nativeQuery = true)
    List<Car> getAllCarsByValue(String a,String b,String c,String d);

    @Query(value = "select * from car where status=?", nativeQuery = true)
    List<Car> getAllCarsByStatus(String status);

}
