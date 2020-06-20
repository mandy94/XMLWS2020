package informatika.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import informatika.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
	Authority findByName(String name);
}
