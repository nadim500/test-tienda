import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Bill } from '../../services/class/bill.class';
import { BillService } from '../../services/api/bill.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'order-received',
  templateUrl: '../views/order-received.component.html',
  styleUrls: ['../css/landing.component.css']
})
export class OrderReceivedComponent implements OnInit, OnDestroy {

  factura: Bill;

  subService: Subscription;
  subRouter: Subscription;

  date: Date = new Date();

  constructor(
    private service: BillService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.subRouter = this.route.params
      .subscribe((param: any) => {
        this.init();
        let id = param.id;
        this.subService = this.service.getById(id)
          .subscribe((res: Bill) => {
            this.factura = res;
          });
      });
  }

  ngOnDestroy(): void {
    this.subService.unsubscribe();
    this.subRouter.unsubscribe();
  }

  init(): void {
    this.factura = null;
  }

  goToProduct(index: number): void {
    this.router.navigate([`/producto/${this.factura.productos[index].id}`]);
    document.body.scrollTop = 0;
  }

  scroll(): void {
    document.body.scrollTop = 0;
  }

}
