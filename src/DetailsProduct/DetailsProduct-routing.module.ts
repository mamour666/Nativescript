import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetailsProductComponent } from "./DetailsProduct.component";

const routes: Routes = [
    { path: "details/:name/:price/:description/:stock/:image/:available", component: DetailsProductComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetailsProductRoutingModule { }
