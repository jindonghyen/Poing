package poing.review;

public class ReviewSearchDTO {
	int id;
	String name;
	String description;
	String rest_img;
	
	public String getRest_img() {
		return rest_img;
	}

	public void setRest_img(String rest_img) {
		this.rest_img = rest_img;
	}

	public ReviewSearchDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "SearchResultDTO [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
	public ReviewSearchDTO(int id, String name, String description, String rest_img) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.rest_img = rest_img;
	}
	
}
