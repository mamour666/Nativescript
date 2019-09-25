import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewProductComponent } from "./NewProduct.component";

const routes: Routes = [
    { path: "newproduct", component: NewProductComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NewProductRoutingModule { }
