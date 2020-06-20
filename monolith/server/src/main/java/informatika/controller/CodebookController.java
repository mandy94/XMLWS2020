package informatika.controller;

import java.nio.file.AccessDeniedException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import informatika.model.Codebook;
import informatika.model.additions.City;
import informatika.service.CodebookService;

@RestController
@RequestMapping(value = "/api/codebook", produces = MediaType.APPLICATION_JSON_VALUE)
public class CodebookController {

	@Autowired
	private CodebookService cdservice; 
	

	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN')")	
	public Codebook getAllCodes(@RequestHeader("Authorization") String header) throws AccessDeniedException {
		
		return cdservice.getAll();
	}
	
	@GetMapping("/cities")
	//@PreAuthorize("hasRole('ADMIN')")	
	public List<City> getCities(@RequestHeader("Authorization") String header) throws AccessDeniedException {		
		return cdservice.getCities();
	}
	
}
