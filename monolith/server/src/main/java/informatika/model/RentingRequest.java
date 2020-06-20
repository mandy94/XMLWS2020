package informatika.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class RentingRequest {
		
	@Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
		Long whoasked;
		Long whoposted;
		String status;
		
		@ManyToMany
		List<Advert> adverts = new ArrayList<Advert>();
		
		// GETTERS ADN SETTERS 
		
		public List<Advert> getAdverts() {
			return adverts;
		}
		public void setAdverts(List<Advert> adverts) {
			this.adverts = adverts;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Long getWhoasked() {
			return whoasked;
		}
		public void setWhoasked(Long whoasked) {
			this.whoasked = whoasked;
		}
		public Long getWhoposted() {
			return whoposted;
		}
		public void setWhoposted(Long whoposted) {
			this.whoposted = whoposted;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		

}
