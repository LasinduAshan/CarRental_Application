package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface CarService {
    public void saveCar(CarDTO dto);
    public void updateCar(CarDTO dto);
    public CarDTO searchCar(String id);
    public void deleteCar(String id);
    public List<CarDTO> getAllCars();
    public List<CarDTO> getAllCarsByValues(String value);
    public List<CarDTO> getAllCarsByStatus(String status);

}
