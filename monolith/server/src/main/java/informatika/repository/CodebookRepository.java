package informatika.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import informatika.model.Advert;
import informatika.model.additions.CarClass;
import informatika.model.additions.City;
import informatika.model.additions.Fuel;
import informatika.model.additions.Manufacturer;
import informatika.model.additions.Model;

public interface CodebookRepository extends JpaRepository<Advert, Long> {
	
	@Query("SELECT m FROM Manufacturer m")
	List<Manufacturer> getManufacturers();
	
	@Query("SELECT m FROM Model m")
	List<Model> getModels();
	
	@Query("SELECT f FROM Fuel f")
	List<Fuel> getFuels();

	@Query("SELECT c FROM CarClass c")
	List<CarClass> getCarClasses();

	@Query("SELECT c FROM City c")
	List<City> getCities();
	
	
	
}
