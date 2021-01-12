package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RequestDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Request;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.RequestRepo;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.RequestService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RequestServiceImpl implements RequestService {

    @Autowired
    RequestRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveRequest(RequestDTO dto) {
        //if (!repo.existsById(dto.getReqID())) {
            Request r = mapper.map(dto, Request.class);
            repo.save(r);
//        } else {
//            throw new RuntimeException("Can not request..!");
//        }
    }

    @Override
    public void updateDriver(RequestDTO dto) {

    }

    @Override
    public RequestDTO searchRequest(int id) {
        Request r = repo.findRequestByReqID(id);
        if (r != null ) {
            RequestDTO requestDTO = new RequestDTO(r.getReqID(),r.getCarNo(),r.getCarModel(),r.getCusID(),r.getCusName(),r.getHeWantDriver(),r.getDamageFee(),r.getPickUpDate(),r.getReturnDate());
            return requestDTO;
        } else {
            throw new RuntimeException("No Request for id: " + id);
        }
    }

    @Override
    public void deleteRequest(int id) {
        Request request = repo.findRequestByReqID(id);
        if (request != null){
            repo.delete(request);
        }
    }


    @Override
    public List<RequestDTO> getAllRequests() {
        List<Request> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<RequestDTO>>() {
        }.getType());
    }
}
