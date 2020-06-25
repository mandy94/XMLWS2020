package informatika.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import informatika.model.additions.CarClass;
import informatika.model.additions.GearBoxType;
import informatika.model.additions.Manufacturer;
import informatika.model.additions.Model;


@Entity
@Table(name = "ADVERT")
public class Advert {
	

		@Id
	    @Column(name = "id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 
		@Column(name = "title")
	    private String title;
		
		@Column(name = "user_id")
		private Long user_id;
		
		@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	    public Pricelist priceList;
		
	
		@ManyToOne
		@JoinColumn(name="manufacturer_id")
		private Manufacturer manufacturer;
		
//		@ManyToOne
//		@JoinColumn(name="model_id")	
		private String model;
		
		@ManyToOne
		@JoinColumn(name="gear_id")	
		private GearBoxType gear;

		@ManyToOne
		@JoinColumn(name="cclass_id")	
		private CarClass cclass;
		
		@ManyToMany		
		private List<RentingRequest> requests = new ArrayList<RentingRequest>();
		
		private String imgmain;
	
		
		private Float milage;
		private Boolean kidsSeat;
		private Integer numberOfKidsSeat;
		private Boolean CDWprotection;
		
		
		@ManyToOne
		@JoinColumn(name="user_id")		
		public Long getUser_id() {
			return user_id;
		}

		public void setUser_id(Long user_id) {
			this.user_id = user_id;
		}



	    public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		
		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		@Override
		public String toString() {
			return "Advert [id=" + id + ", title=" + title + ", user_id=" + user_id + "]";
		}

		public Pricelist getPriceList() {
			return priceList;
		}

		public void setPriceList(Pricelist priceList) {
			this.priceList = priceList;
		}

		public Manufacturer getManufacturer() {
			return manufacturer;
		}

		public void setManufacturer(Manufacturer manufacturer) {
			this.manufacturer = manufacturer;
		}

	

		public Float getMilage() {
			return milage;
		}

		public void setMilage(Float milage) {
			this.milage = milage;
		}

		public Boolean getKidsSeat() {
			return kidsSeat;
		}

		public void setKidsSeat(Boolean kidsSeat) {
			this.kidsSeat = kidsSeat;
		}

		public Integer getNumberOfKidsSeat() {
			return numberOfKidsSeat;
		}

		public void setNumberOfKidsSeat(Integer numberOfKidsSeat) {
			this.numberOfKidsSeat = numberOfKidsSeat;
		}

		public Boolean getCDWprotection() {
			return CDWprotection;
		}

		public void setCDWprotection(Boolean cDWprotection) {
			CDWprotection = cDWprotection;
		}

		public GearBoxType getGear() {
			return gear;
		}

		public void setGear(GearBoxType gear) {
			this.gear = gear;
		}

		public String getModel() {
			return model;
		}

		public void setModel(String model) {
			this.model = model;
		}

		public CarClass getCclass() {
			return cclass;
		}

		public void setCclass(CarClass cclass) {
			this.cclass = cclass;
		}

		public String getImgmain() {
			return imgmain;
		}

		public void setImgmain(String imgMain) {
			this.imgmain = imgMain;
		}

		public List<RentingRequest> getRequests() {
			return requests;
		}

		public void setRequests(List<RentingRequest> requests) {
			this.requests = requests;
		}
}
