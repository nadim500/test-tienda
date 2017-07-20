export class Client {
  id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  status: number;
  dateRegister: string;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.email = obj && obj.email || null;
    this.password = obj && obj.password || null;
    this.username = obj && obj.username || null;
    this.firstName = obj && obj.firstName || null;
    this.lastName = obj && obj.lastName || null;
    this.phone = obj && obj.phone || null;
    this.status = obj && obj.status || null;
    this.dateRegister = obj && obj.dateRegister || null;
  }
}
