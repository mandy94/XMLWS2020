package informatika.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import informatika.model.RentingRequest;
import informatika.service.RentingRequestService;

@RestController
@RequestMapping(value = "/api/kart", produces = MediaType.APPLICATION_JSON_VALUE)
public class KartController {

	@Autowired
	private RentingRequestService rrservice;
	
	@GetMapping("/{id}")
	List<RentingRequest> getMyKart(@PathVariable Long id)
	{
		return rrservice.findMyRequestByStatus(id, "PENDING");
	}

	
}
