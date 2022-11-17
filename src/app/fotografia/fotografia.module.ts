
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { PhotoformComponent } from "./photoform/photoform.component";

import { PhotolistComponent } from "./photolist/photolist.component";
import { PhotosComponent } from "./photos/photos.component";


@NgModule({
    declarations: [
        PhotoformComponent,
        PhotolistComponent,
        PhotosComponent
    ],
    exports:[
        PhotosComponent,
        PhotolistComponent,
        PhotoformComponent
    ],
    imports: [
        SharedModule
    ]
})
export class FotografiaModule{}