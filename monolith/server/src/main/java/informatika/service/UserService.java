package informatika.service;
import java.util.List;

import informatika.model.User;
import informatika.model.UserRequest;

public interface UserService {
    User findById(Long id);
    User findByUsername(String username);
    List<User> findAll ();
	User save(UserRequest userRequest);
}
