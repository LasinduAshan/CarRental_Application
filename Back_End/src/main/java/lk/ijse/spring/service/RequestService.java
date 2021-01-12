package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RequestDTO;

import java.util.List;

public interface RequestService {
    public void saveRequest(RequestDTO dto);
    public void updateDriver(RequestDTO dto);
    public RequestDTO searchRequest(int id);
    public void deleteRequest(int id);
    public List<RequestDTO> getAllRequests();

}
