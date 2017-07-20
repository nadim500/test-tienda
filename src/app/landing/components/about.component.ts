import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { Conocer, Item } from '../../services/class/conocer.class';
import { ConocerService } from '../../services/api/conocer.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'about',
  templateUrl: '../views/about.component.html'
})
export class AboutComponent implements OnInit, OnDestroy {

  subService: Subscription;

  conocer: Conocer;
  items: Item[] = [];

  constructor(
    private service: ConocerService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Nosotros | Niux SAC - Innovación Applicada');
    meta.addTags([
      { name: 'description', content: 'Conocenos NIUX' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Nosotros | Niux SAC - Innovación Applicada' },
      { property: 'og:description', content: 'Conocenos NIUX' },
      { property: 'og:site_name', content: 'Niux' }
    ])
  }

  ngOnInit(): void {
    this.subService = this.service.getOne()
      .subscribe((res: Conocer) => {
        this.conocer = res;
        this.items = this.conocer.items;
      });
  }

  ngOnDestroy(): void {
    this.subService.unsubscribe();
  }

}
