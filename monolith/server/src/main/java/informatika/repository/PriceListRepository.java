package informatika.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import informatika.model.Pricelist;

public interface PriceListRepository extends JpaRepository<Pricelist, Long> {

	    List<Pricelist> findByCreatorId(Long id);
	}

