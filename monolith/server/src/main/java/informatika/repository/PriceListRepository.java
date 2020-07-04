package informatika.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import informatika.model.Pricelist;
@Repository
public interface PriceListRepository extends JpaRepository<Pricelist, Long> {

	    List<Pricelist> findByCreatorId(Long id);
	}

