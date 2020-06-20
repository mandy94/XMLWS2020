package informatika.controller;

import java.nio.file.AccessDeniedException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import informatika.model.Advert;
import informatika.model.User;
import informatika.security.TokenUtils;
import informatika.service.AdvertService;
import informatika.service.impl.CustomUserDetailsService;

@RestController
@RequestMapping(value = "/api/advert", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdvertController {

	@Autowired
	private AdvertService adservice;
	
	@Autowired
	private TokenUtils tokenUtils;

	@Autowired
	private CustomUserDetailsService userDetailsService;


	@GetMapping("all")
	//@PreAuthorize("hasRole('ADMIN')")	
	public List<Advert> getAllAds(@RequestHeader("Authorization") String header) throws AccessDeniedException {
		
		return adservice.findAllAds();
	}
	
	@GetMapping("me/all")
	//@PreAuthorize("hasRole('ADMIN')")	
	public List<Advert> getMyAds(@RequestHeader("Authorization") String header) throws AccessDeniedException {
		// Jer je header string BEARER + token pa sklanjamo visak
		String[] divider = header.split(" ");
		String token;
		if(divider.length > 1)
			token = divider[1];
		else
			token = divider[0];
		String username = this.tokenUtils.getUsernameFromToken(token);
		User user = (User) this.userDetailsService.loadUserByUsername(username);
		return adservice.findAll(user.getId());
	}
	
/*	public List<Advert> getFilteredAds(){
	@GetMapping("/all/search")
		
	}*/
	@GetMapping("/{id}")
	public Advert getAdById(@PathVariable Long id) {
		return adservice.getAdById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteAdById(@PathVariable Long id) {
		 adservice.removeById(id);
	}
	
	@PostMapping(value = "/add",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Advert> addAdvert(@RequestBody Advert ad) throws AccessDeniedException{		
		adservice.save(ad);
		return adservice.findAll(ad.getUser_id());
	}
	

	
}
