package co.usa.reto3.repository.crud;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

import co.usa.reto3.model.Reservaciones;

public interface InterfaceReservaciones extends CrudRepository<Reservaciones, Integer> {

    //JPQL
    public List<Reservaciones> findAllByStatus(String status);

    public List<Reservaciones> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);

    @Query ("SELECT c.client, COUNT(c.client) from Reservaciones AS c group by c.client order by COUNT(c.client)DESC")
    public List<Object[]> countTotalReservationsByClient();
    
}
