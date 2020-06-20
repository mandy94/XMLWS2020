package informatika.service;

import java.nio.file.AccessDeniedException;
import java.util.List;
import java.util.Optional;

import informatika.model.Advert;
import informatika.model.User;

public interface AdvertService {
	List<Advert> findAll(Long user) throws AccessDeniedException;
	List<Advert> findAllAds();
	Advert getAdById(Long id);
	void save(Advert ad);
	void removeById(Long id);
}
