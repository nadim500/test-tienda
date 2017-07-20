import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { Product } from '../../services/class/product.class';
import { Category } from '../../services/class/category.class';
import { ProductService } from '../../services/api/product.service';
import { CategoryService } from '../../services/api/category.service';

import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'products',
  templateUrl: '../views/products.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  @ViewChild('search') searchBox: any;
  subService: Subscription;
  subServiceCat: Subscription;
  subRouter: Subscription;
  subSearch: Subscription;

  productos: Product[] = [];
  categorias: Category[] = [];

  cargando: boolean = true;

  p: number = 1;

  constructor(
    private service: ProductService,
    private serviceCat: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Pagina de Productos');
    this.meta.updateTag({ name: 'description', content: 'Home Page Description' });

    this.subServiceCat = this.serviceCat.get()
      .subscribe((res: Category[]) => {
        this.categorias = res;
      });

    this.subRouter = this.route.params
      .subscribe((param: any) => {
        let id = param.id;
        this.cargando = true;
        this.subService = this.service.getByCategory(id)
          .subscribe((res: Product[]) => {
            this.cargando = false;
            this.productos = res;
          });
      });

    this.subSearch = Observable.fromEvent(this.searchBox.nativeElement, 'keyup')
      .filter((e: any) => e.keyCode === 13)
      .subscribe((res: any) => {
        let query = res.target.value.trim().replace(/ +/g, ' ').toLowerCase();
        if (query !== ' ' && query !== '') {
          this.cargando = true;
          let subServ = this.service.getBySearch(query)
            .subscribe((res: Product[]) => {
              this.cargando = false;
              this.productos = res;
              this.searchBox.nativeElement.value = '';
            });
        } else {
          this.searchBox.nativeElement.value = '';
        }
      });

  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.subService.unsubscribe();
    this.subRouter.unsubscribe();
    this.subSearch.unsubscribe();
    this.subServiceCat.unsubscribe();
  }

  goToCategory(id: string): void {
    this.router.navigate([`/productos/${id}`])
  }

  changePag(pag: number): void {
    this.cargando = true;
    let top = document.body.scrollTop;
    let times = 1;
    let range = Math.floor(top / 50);
    let interval = setInterval(() => {
      if (times === 100) {
        this.cargando = false;
        document.body.scrollTop = 0;
        this.p = pag;
        clearInterval(interval);
      } else {
        document.body.scrollTop = (top - range * times);
        times++;
      }
    }, 10)
  }

}
