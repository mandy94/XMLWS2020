package informatika.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import informatika.model.RentingRequest;
import informatika.repository.RentingRequestRepository;
import informatika.service.RentingRequestService;

@Service
public class RentingRequestImpl implements RentingRequestService {
	@Autowired
	private RentingRequestRepository repo;

	@Override
	public List<RentingRequest> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RentingRequest findById(Long id) {
		return repo.findById(id).orElse(null);
	}

	@Override
	public List<RentingRequest> findByUsername(String username) {
		return repo.findByUsername(username);
	}
	@Override
	public void save(RentingRequest r) {
		repo.save(r);
		
	}


	@Override
	public RentingRequest checkIfIAlreadyRequestedFrom(Long whoasked, Long whoposted) {
		RentingRequest req = repo.findMyRequestsFrom(whoasked, whoposted);
		return req;
	}

	@Override
	public List<RentingRequest> findMyRequestByStatus(Long id, String status) {
		return repo.findMyRequestByStatus(id, status);
	}


	

}
