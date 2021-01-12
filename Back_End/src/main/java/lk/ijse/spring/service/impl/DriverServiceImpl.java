package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.CustomerService;
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
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveDriver(DriverDTO dto) {
        if (!repo.existsById(dto.getId())) {
            Driver d = mapper.map(dto, Driver.class);
            repo.save(d);
        } else {
            throw new RuntimeException("Driver already exist..!");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (repo.existsById(dto.getId())) {
            Driver d = mapper.map(dto, Driver.class);
            repo.save(d);
        } else {
            throw new RuntimeException("No such driver for update..!");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        Optional<Driver> driver = repo.findById(id);
        if (driver.isPresent()) {
            return mapper.map(driver.get(), DriverDTO.class);
        } else {
            throw new RuntimeException("No driver for id: " + id);
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No customer for delete ID: " + id);
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        List<Driver> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public List<DriverDTO> getAllDriversByStatus(String status) {
        List<Driver> all = repo.findAllByStatus(status);
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }
}
