import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NewProductRoutingModule } from "./NewProduct-routing.module";
import { NewProductComponent } from "./NewProduct.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptModule,
        NewProductRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        NewProductComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewProductModule { }
