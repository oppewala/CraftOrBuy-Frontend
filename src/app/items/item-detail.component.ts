import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Item, ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item-detail.component.html',
  styles: []
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: ItemService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getItem(+params['id']))
      .subscribe((item: Item) => this.item = item);
  }

  goToItems() {
    let itemId = this.item ? this.item.id : null;
    this.router.navigate(['/items', { id: itemId, newparam: 'testing' }])
  }
}
