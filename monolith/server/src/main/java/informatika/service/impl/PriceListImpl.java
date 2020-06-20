package informatika.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import informatika.dto.PriceListDTO;
import informatika.model.Pricelist;
import informatika.repository.PriceListRepository;
import informatika.service.PriceListService;
import informatika.model.*;

@Service
public class PriceListImpl implements PriceListService {

    @Autowired
    private PriceListRepository priceListRepository;
    
    @Autowired
    private informatika.repository.UserRepository userRepository;


	@Override
	public Pricelist createNewPricelist(PriceListDTO dto) {

        User user = new User();

        Pricelist priceList = new Pricelist();
        priceList.setCdw(dto.getCdw());
        priceList.setPricePerDay(dto.getPricePerDay());
        priceList.setPricePerKm(dto.getPricePerKm());
        user= userRepository.getOne(dto.getCreatorId());
        priceList.setCreator(user);
        this.priceListRepository.save(priceList);

        return priceList;
    }

	@Override
	public List<PriceListDTO> getCreatorsPricelists(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
