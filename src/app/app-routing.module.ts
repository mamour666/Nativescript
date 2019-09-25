import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { DetailsProductComponent } from "../DetailsProduct/DetailsProduct.component";
import { NewProductComponent } from "../NewProduct/NewProduct.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "details/:name/:price/:description/:stock/:image/:available", component: DetailsProductComponent },
    { path: "newproduct", component: NewProductComponent },
    { path: "home", loadChildren: () => import(`~/app/home/home.module`).then((m) => m.HomeModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
