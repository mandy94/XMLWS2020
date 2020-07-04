package informatika.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import informatika.model.Authority;
@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
	Authority findByName(String name);
}
