package informatika.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import informatika.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
    @Query("Select i from Image i where i.name = :name")
	Optional<Image> getByName(@Param(value = "name") String name);
    
}