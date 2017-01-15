import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ItemDetailComponent } from './item-detail.component';
import { ItemListComponent } from './item-list.component';
import { RecipeComponent } from './recipe/recipe.component';

import { ItemService } from './item.service';

import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ItemsRoutingModule
    ],
    declarations: [
        ItemListComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService
    ]
})
export class ItemsModule {}