import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Product } from '../../services/class/product.class';
import { Image } from '../../services/class/image.class';
import { ProductService } from '../../services/api/product.service';
import { ImageService } from '../../services/api/image.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../css/home-product.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  arr: boolean[] = [];
  interval: any;

  subService: Subscription;
  subServiceImg: Subscription;

  image: Image;
  productos: Product[];

  constructor(
    private service: ProductService,
    private imgService: ImageService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Tienda Virtual | Niux SAC - Innovación Applicada');
    meta.addTags([
      { name: 'description', content: 'Un pequeño ejemplo de un Ecommerce desarrolado por NIUX' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Tienda Virtual | Niux SAC - Innovación Applicada' },
      { property: 'og:description', content: 'Un pequeño ejemplo de un Ecommerce desarrolado por NIUX' },
      { property: 'og:site_name', content: 'Niux' }
    ])
  }

  ngOnInit(): void {
    this.subService = this.service.get('DESC')
      .subscribe((res: Product[]) => {
        this.productos = res;
      });

    this.subServiceImg = this.imgService.getOne()
      .subscribe((res: Image) => {
        this.image = res;
        this.image.slider.forEach((obj, i) => {
          if (i === 0) {
            this.arr.push(true);
          } else {
            this.arr.push(false);
          }
        });
        this.interval = setInterval((obj) => {
          let index = this.arr.indexOf(true);
          if (index < (this.arr.length - 1)) {
            this.arr[index] = false;
            this.arr[index + 1] = true;
          } else {
            this.arr[index] = false;
            this.arr[0] = true;
          }
        }, 5000)
      });
  }

  change(index: number): void {
    let index1 = this.arr.indexOf(true);
    this.arr[index1] = false;
    this.arr[index] = true;
  }

  changeBut(other: string): void {
    let index: number;
    switch (other) {
      case 'next':
        index = this.arr.indexOf(true);
        if (index < (this.arr.length - 1)) {
          this.arr[index] = false;
          this.arr[index + 1] = true;
        } else {
          this.arr[index] = false;
          this.arr[0] = true;
        }
        break;
      case 'prev':
        index = this.arr.indexOf(true);
        if (index > 0) {
          this.arr[index] = false;
          this.arr[index - 1] = true;
        } else {
          this.arr[index] = false;
          this.arr[this.arr.length - 1] = true;
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.subService.unsubscribe();
    clearInterval(this.interval);
  }

}
