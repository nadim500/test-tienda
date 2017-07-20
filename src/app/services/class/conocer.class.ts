export class Item {
  title: string;
  description: any[];
  urlImage: string;
  constructor(obj?: any) {
    this.title = obj && obj.title || '';
    this.description = obj && obj.description || [];
    this.urlImage = obj && obj.urlImage || '';
  }
}

export class Conocer {
  id: string;
  items: Item[];
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.items = obj && obj.items || [];
  }
}
