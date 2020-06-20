package informatika.service;

import java.util.List;

import informatika.model.Codebook;
import informatika.model.additions.CarClass;
import informatika.model.additions.City;
import informatika.model.additions.Fuel;
import informatika.model.additions.Manufacturer;
import informatika.model.additions.Model;

public interface CodebookService {
	public List<Manufacturer> getManufacturers();
	public List<Model> getModels();
	public List<Fuel> getFuels();
	public List<CarClass> getCarClasses();
	public List<City> getCities();
	public Codebook getAll();

}
