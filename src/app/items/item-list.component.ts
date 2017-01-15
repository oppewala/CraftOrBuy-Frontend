import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { Item, ItemService } from './item.service';

@Component({
  selector: 'app-items',
  templateUrl: './item-list.component.html',
  styles: []
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  constructor(private router: Router, private service: ItemService) { 
  }

  ngOnInit() {
    this.service.loadData().then(data => {
            this.items = data;
        });
  }

  onSelect(item: Item){
    this.router.navigate(['/item', item.id])
  }
}
