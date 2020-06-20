package informatika.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import informatika.model.Codebook;
import informatika.model.additions.CarClass;
import informatika.model.additions.City;
import informatika.model.additions.Fuel;
import informatika.model.additions.Manufacturer;
import informatika.model.additions.Model;
import informatika.repository.CodebookRepository;
import informatika.service.CodebookService;

@Service
public class CodebookServiceImpl implements CodebookService {
	@Autowired
	private CodebookRepository repo;
	
	public List<Manufacturer> getManufacturers(){
		return repo.getManufacturers();
	}
	public List<Model> getModels(){
		return repo.getModels();
	}
	public List<Fuel> getFuels(){
		return repo.getFuels();
	}
	@Override
	public Codebook getAll() {
		Codebook cb = new Codebook();
		cb.setFuels(getFuels());
		cb.setManufacturers(getManufacturers());
		cb.setModels(getModels());
		cb.setCities(getCities());		
		return cb;
	}

	@Override
	public List<CarClass> getCarClasses() {
		
		return repo.getCarClasses();
	}
	@Override
	public List<City> getCities() {
		return repo.getCities();
	}
	}