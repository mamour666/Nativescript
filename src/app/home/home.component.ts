import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Product} from '../model/interface-products';
import { RouterExtensions } from "nativescript-angular/router";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    moduleId: module.id,
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private appId: string;
    private appCode: string;
    items: any;
 result: JSON;
 allData: any;
 finaldata:any;
 article:Product[];
 public token:any;
 public allProduct:any;

    public product: any;

    constructor(private http:HttpClient,private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
        this.getProduct();
    }
    public getProduct() {

        this.http.get("http://192.168.1.139:8000/api/product")
        .subscribe(productList=>{
            this.allProduct = productList;
            this.items = JSON.stringify(this.allProduct);
            this.allData = JSON.parse(this.items);
           // console.log(this.allData['objects']);
            this.finaldata = this.allData['objects'];
            console.log(this.finaldata);
          });

    }


      onCarItemTap(args:ItemEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this.routerExtensions.navigate(["details", tappedCarItem.name,tappedCarItem.price,tappedCarItem.description,tappedCarItem.stock,tappedCarItem.image,tappedCarItem.available],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
