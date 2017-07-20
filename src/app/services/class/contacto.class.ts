export class Contacto {
  id: string;
  mapa: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.mapa = obj && obj.mapa || '';
    this.title = obj && obj.title || '';
    this.description = obj && obj.description || '';
    this.email = obj && obj.email || '';
    this.phone = obj && obj.phone || '';
  }
}
