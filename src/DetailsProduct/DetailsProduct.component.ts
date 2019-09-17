import { Component, OnInit } from "@angular/core";
import { Product } from "~/app/model/interface-products";
import { RouterExtensions } from "nativescript-angular/router";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "DetailsProduct", loadChildren: "./DetailsProduct/DetailsProduct.module#DetailsProductModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "DetailsProduct",
    moduleId: module.id,
    templateUrl: "./DetailsProduct.component.html"
})
export class DetailsProductComponent implements OnInit {
    public currentproduct:any;
    items: any;
    result: JSON;
    allData: any;
    finaldata:any;
    article:Product[];
    public token:any;
    public allProduct:any;
    currentid:any;
    productId:any;
    finalDetails:any;

       public product: any;
    constructor(private routerExtensions:RouterExtensions,private _pageRoute: PageRoute,private http:HttpClient) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        this._pageRoute.activatedRoute
        .pipe(switchMap((activatedRoute) => activatedRoute.params))
        .forEach((params) => {
            this.productId = params;


            console.log(params);
            this.getProductbyid(this.productId);
            console.log(this.getProductbyid(this.productId));
        });

    }

    onBackButtonTap(): void {
        this.routerExtensions.backToPreviousPage();
    }

    public getProductbyid(id:any) {
        this.http.get("http://192.168.1.139:8000/api/product")
        .subscribe(productList=>{
            this.allProduct = productList;
            this.items = JSON.stringify(this.allProduct);
            this.allData = JSON.parse(this.items);
           // console.log(this.allData['objects']);
            this.finaldata = this.allData['objects'];
            id = this.finaldata;

          });

    }


}
