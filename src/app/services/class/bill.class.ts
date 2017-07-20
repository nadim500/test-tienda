interface Product {
  id: string;
  name: string;
  priceNow: number;
  total: number;
  cantidad: number;
}

export class Bill {
  dateRegister: Date;
  total: number;
  number: number;
  productos: Product[];
  constructor(obj?: any) {
    this.dateRegister = obj && obj.dateRegister || null;
    this.total = obj && obj.total || null;
    this.number = obj && obj.number || 0;
    this.productos = obj && obj.productos || [];
  }
}
