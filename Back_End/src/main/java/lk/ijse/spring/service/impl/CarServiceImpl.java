package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveCar(CarDTO dto) {
        if (!repo.existsById(dto.getCarNo())) {
            Car c = mapper.map(dto, Car.class);
            repo.save(c);
        } else {
            throw new RuntimeException("Car already exist..!");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (repo.existsById(dto.getCarNo())) {
            Car c = mapper.map(dto, Car.class);
            repo.save(c);
        } else {
            throw new RuntimeException("No such car for update..!");
        }
    }

    @Override
    public CarDTO searchCar(String id) {
        Optional<Car> car = repo.findById(id);
        if (car.isPresent()) {
            return mapper.map(car.get(), CarDTO.class);
        } else {
            throw new RuntimeException("No Car for No: " + id);
        }
    }

    @Override
    public void deleteCar(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No Car for delete No: " + id);
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        List<Car> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public List<CarDTO> getAllCarsByValues(String value) {
        List<Car> all = repo.getAllCarsByValue(value,value,value,value);
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public List<CarDTO> getAllCarsByStatus(String status) {
        List<Car> all = repo.getAllCarsByStatus(status);
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }
}
