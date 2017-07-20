import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { Product } from '../../services/class/product.class';
import { ProductService } from '../../services/api/product.service';
import { CartService } from '../../services/api/cart.service';

import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'product',
  templateUrl: '../views/product.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class ProductComponent implements OnInit {

  subService: Subscription;
  subServiceProd: Subscription;
  subRouter: Subscription;

  product: Product;
  productos: Product[] = [];

  inCart: boolean = false;
  viewImg: boolean = false;
  buffImages: string[] = [];
  currentImg: string = '';
  numero: number = 0;

  constructor(
    private service: ProductService,
    private serviceCat: CartService,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.subRouter = this.route.params
      .subscribe((param: any) => {
        this.init();
        let id = param.id;
        this.subService = this.service.getById(id)
          .subscribe((res: Product) => {
            this.product = res;
            this.title.setTitle('' + this.product.name + ' | Niux SAC - Innovación Applicada');
            this.meta.updateTag({ name: 'description', content: this.product.description[0] ? this.product.description[0].text : 'Sin descripción' });
            // this.meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this.meta.updateTag({ property: 'og:type', content: 'website' });
            this.meta.updateTag({ property: 'og:title', content: '' + this.product.name + ' | Niux SAC - Innovación Applicada' });
            this.meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe/' + this.product.id });
            // this.meta.updateTag({ property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png' });
            this.meta.updateTag({ property: 'og:description', content: this.product.description[0] ? this.product.description[0].text : 'Sin descripción' });
            this.meta.updateTag({ property: 'og:site_name', content: 'Niux' });
            console.log('res : ', res);
            this.subServiceProd = this.service.getByRelated(this.product.categoryId)
              .subscribe((res: Product[]) => {
                let productosBuff = [];
                res.forEach((obj) => {
                  if (obj.id !== this.product.id && productosBuff.length <= 8) {
                    productosBuff.push(obj);
                  }
                });
                this.productos = productosBuff;
              });
            for (let i = 1; i < this.product.images.length; i++) {
              this.buffImages.push(this.product.images[i]);
            }
            let productos = this.serviceCat.get();
            let buff = productos.find((obj) => this.product.id === obj.id);
            if (buff) {
              this.inCart = true;
            }
          });
      });
  }

  ngOnDestroy(): void {
    this.subRouter.unsubscribe();
    this.subService.unsubscribe();
    this.subServiceProd.unsubscribe();
  }

  init(): void {
    this.inCart = false;
    this.viewImg = false;
    this.buffImages = [];
    this.currentImg = '';
    this.numero = 0;
    this.productos = [];
  }

  closeImg(): void {
    this.viewImg = false;
  }

  addCart(): void {
    if (!this.inCart) {
      this.serviceCat.addToCart(this.product);
      this.inCart = true;
    }
  }

  openImg(index: number): void {
    this.numero = index;
    this.currentImg = this.product.images[index];
    this.viewImg = true;
  }

  next(): void {
    if ((this.numero + 1) === this.product.images.length) {
      this.numero = 0;
      this.currentImg = this.product.images[this.numero];
    } else {
      this.numero++;
      this.currentImg = this.product.images[this.numero];
    }
  }

  prev(): void {
    if (this.numero === 0) {
      this.numero = this.product.images.length - 1;
      this.currentImg = this.product.images[this.numero];
    } else {
      this.numero--;
      this.currentImg = this.product.images[this.numero];
    }
  }

}
