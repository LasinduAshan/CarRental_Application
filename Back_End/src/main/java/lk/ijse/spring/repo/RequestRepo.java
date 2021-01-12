package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RequestRepo extends JpaRepository<Request, String> {

    Request findRequestByReqID(int reqID);

}
