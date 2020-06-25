package informatika.dto;

public class RentingRequestDTO {

	 String rentingDate;
	String returningDate;
	String rentingTime;
	String returningTime;
	
	Long advertid;
	Long user_id;
	public String getRentingDate() {
		return rentingDate;
	}
	public void setRentingDate(String rentingDate) {
		this.rentingDate = rentingDate;
	}
	public String getReturningDate() {
		return returningDate;
	}
	public void setReturningDate(String returningDate) {
		this.returningDate = returningDate;
	}
	public String getRentingTime() {
		return rentingTime;
	}
	public void setRentingTime(String rentingTime) {
		this.rentingTime = rentingTime;
	}
	public String getReturningTime() {
		return returningTime;
	}
	public void setReturningTime(String returningTime) {
		this.returningTime = returningTime;
	}
	public Long getAdvertid() {
		return advertid;
	}
	public void setAdvertid(Long advertid) {
		this.advertid = advertid;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	
}
