package informatika.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import informatika.model.RentingRequest;
@Repository
public interface RentingRequestRepository extends JpaRepository<RentingRequest, Long> {

	@Query("Select u from RentingRequest u where u.whoasked = :un")
	List<RentingRequest> findByUsername(@Param(value="un") String username);

	@Query("Select u from RentingRequest u where u.whoposted = :wh")
	RentingRequest findByWhoPosted(@Param(value="wh") Long whoposted);

	@Query("Select u from RentingRequest u where u.whoasked = :wa and u.whoposted = :wp")
	RentingRequest findMyRequestsFrom(@Param(value="wa") Long whoasked,@Param(value="wp")  Long whoposted);

	@Query("Select u from RentingRequest u where u.whoasked = :id and u.status = :status")
	List<RentingRequest> findMyRequestByStatus(@Param(value="id")Long id, @Param(value="status")String status);
	
	
	
}
