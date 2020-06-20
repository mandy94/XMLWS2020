package informatika.service;

import java.util.List;

import informatika.dto.PriceListDTO;
import informatika.model.Pricelist;

public interface PriceListService {
	
    Pricelist createNewPricelist(PriceListDTO dto);
    List<PriceListDTO> getCreatorsPricelists(Long id);
}
