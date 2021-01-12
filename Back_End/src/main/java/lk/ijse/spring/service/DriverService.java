package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    public void saveDriver(DriverDTO dto);
    public void updateDriver(DriverDTO dto);
    public DriverDTO searchDriver(String id);
    public void deleteDriver(String id);
    public List<DriverDTO> getAllDrivers();
    public List<DriverDTO> getAllDriversByStatus(String status);

}
