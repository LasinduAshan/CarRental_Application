package lk.ijse.spring.service;

import lk.ijse.spring.dto.BookingDetailDTO;
import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface BookingDetailService {
    public void saveBookingDetail(BookingDetailDTO dto);
    public void updateBookingDetail(BookingDetailDTO dto);
    public BookingDetailDTO searchBookingDetail(String id);
    public void deleteBookingDetail(String id);
    public List<BookingDetailDTO> getAllBookingDetails();

}
