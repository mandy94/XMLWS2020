package informatika.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import informatika.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
}

