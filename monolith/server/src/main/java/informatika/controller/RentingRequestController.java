package informatika.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import informatika.dto.RentingRequestDTO;
import informatika.model.Advert;
import informatika.model.RentingRequest;
import informatika.service.AdvertService;
import informatika.service.RentingRequestService;
import informatika.service.UserService;

@RestController
@RequestMapping(value = "/api/renting/", produces = MediaType.APPLICATION_JSON_VALUE)
public class RentingRequestController {

	@Autowired
	private RentingRequestService reqService;
	
	@Autowired
	private UserService userService;
	@Autowired
	private AdvertService advertService;
	@GetMapping(value="user/{username}/kart")
	List<RentingRequest> getUserKart(@PathVariable String username){
		return reqService.findByUsername(username);
	}
	@PostMapping(value="/new-request")
	void createNewRequest(@RequestBody RentingRequestDTO data) {
		RentingRequest req = new RentingRequest();
		Advert reqAdvert = advertService.getAdById(data.getAdvertid());
		req.setWhoasked(userService.findById(data.getUser_id()).getId());
		req.setWhoposted(reqAdvert.getUser_id());
		req.setStatus("PENDING");
		RentingRequest multiple = reqService.checkIfIAlreadyRequestedFrom(req.getWhoasked(), req.getWhoposted());
		if( multiple != null) // jos nismo narucivali od ovog vlasnika
		{
				multiple.getAdverts().add(reqAdvert);
				reqService.save(multiple);
		
		}else {
			req.getAdverts().add(reqAdvert);
			reqService.save(req);
		}
		
	}
}
