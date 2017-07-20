export class Product {
  id: string;
  categoryId: string;
  categoria: string;
  name: string;
  rating: number;
  description: any[];
  sizes: string[];
  priceId: string;
  priceOld: number;
  priceNow: number;
  images: string[];
  percent: string;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.categoryId = obj && obj.categoryId || null;
    this.categoria = obj && obj.categoria || null;
    this.name = obj && obj.name || null;
    this.rating = obj && obj.rating || null;
    if (obj && obj.rating) {
      let percent = obj.rating * 100 / 5;
      this.percent = percent + '%';
    } else {
      this.percent = '0%';
    }
    this.description = obj && obj.description || [];
    this.sizes = obj && obj.sizes || [];
    this.priceId = obj && obj.priceId || null;
    this.priceOld = obj && obj.priceOld || null;
    this.priceNow = obj && obj.priceNow || null;
    this.images = obj && obj.images || [];
  }
}
