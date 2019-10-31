class Product {
  constructor(id, ownerId, title, imageUrl, description, price,category,location) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.location = location;
  }
}

export default Product;
