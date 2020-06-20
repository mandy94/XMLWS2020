package informatika.dto;

import informatika.model.Pricelist;

public class PriceListDTO {
	   
		private long id;
	    private double pricePerDay;
	    private double pricePerKm;
	    private double cdw;
	    private long creatorId;

	    public PriceListDTO(double pricePerDay, double pricePerKm, double cdw, long creatorId) {
	        this.pricePerDay = pricePerDay;
	        this.pricePerKm = pricePerKm;
	        this.cdw = cdw;
	        this.creatorId = creatorId;
	    }

	    public PriceListDTO(Pricelist priceList){
	        this.creatorId=priceList.getCreator().getId();
	        this.pricePerDay=priceList.getPricePerDay();
	        this.pricePerKm=priceList.getPricePerKm();
	        this.cdw=priceList.getCdw();
	        this.id=priceList.getId();
	    }

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public double getPricePerDay() {
			return pricePerDay;
		}

		public void setPricePerDay(double pricePerDay) {
			this.pricePerDay = pricePerDay;
		}

		public double getPricePerKm() {
			return pricePerKm;
		}

		public void setPricePerKm(double pricePerKm) {
			this.pricePerKm = pricePerKm;
		}

		public double getCdw() {
			return cdw;
		}

		public void setCdw(double cdw) {
			this.cdw = cdw;
		}

		public long getCreatorId() {
			return creatorId;
		}

		public void setCreatorId(long creatorId) {
			this.creatorId = creatorId;
		}
	    
	    
}
