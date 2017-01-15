import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailComponent } from './item-detail.component';
import { ItemListComponent } from './item-list.component';

const itemsRoutes: Routes = [
    { path: 'items', component: ItemListComponent },
    { path: 'item/:id', component: ItemDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(itemsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ItemsRoutingModule {}