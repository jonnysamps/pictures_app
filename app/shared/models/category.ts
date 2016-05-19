export class Category {
  id: String;
  name: String;
  image: String;
  constructor(id: String = '', image: String = '', name: String = '') {
    this.id = id;
    this.name = name;
    this.image = image;
  }  
}