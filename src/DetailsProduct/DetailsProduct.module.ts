import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { DetailsProductRoutingModule } from "./DetailsProduct-routing.module";
import { DetailsProductComponent } from "./DetailsProduct.component";

@NgModule({
    imports: [
        NativeScriptModule,
        DetailsProductRoutingModule
    ],
    declarations: [
        DetailsProductComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetailsProductModule { }
