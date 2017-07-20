export class Image {
  id: string;
  slider: string[];
  other: string[];
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.slider = obj && obj.slider || [];
    this.other = obj && obj.other || [];
  }
}
