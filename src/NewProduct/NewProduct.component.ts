import { Component, OnInit } from "@angular/core";
import {DjangoapiService} from "../app/djangoapi.service";
import * as imagepicker from "nativescript-imagepicker";


@Component({
    selector: "NewProduct",
    moduleId: module.id,
    templateUrl: "./NewProduct.component.html",
    providers: [DjangoapiService]
})
export class NewProductComponent implements OnInit {
    public name: string ;
    public slug: string ;
    public price: number ;
    public stock: number ;
    public message: any;
    public description: string ;
    imageAssets = [];
    imageSrc: any;
    isSingleMode: boolean = true;
    thumbSize: number = 80;
    previewSize: number = 300;
    public image:String = "/media/media/products/images/DSCF5636.jpg";








  constructor(private django:DjangoapiService) {
        /* ***********************************************************       * Use the constructor to inject app services that you need in this component.
        *************************************************************/
 }




 public submit() {
    this.makePostRequest();
}

private makePostRequest() {
    this.django.postData(this.name,this.slug,this.description,this.price,this.stock,this.imageSrc)
        .subscribe(res => {
           this.message = res;
          // console.log(this.message);
        });
}

    ngOnInit(): void {

    }

    public onSelectSingleTap() {
        this.isSingleMode = true;

        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    public onSelectMultipleTap() {
        this.isSingleMode = false;

        let context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    }

    private startSelection(context) {
        let that = this;

        context
        .authorize()
        .then(() => {
            that.imageAssets = [];
            that.imageSrc = null;
            return context.present();
        })
        .then((selection) => {
            console.log("Selection done: " + JSON.stringify(selection));
            that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
                let base64Image = 'data:image/jpeg;base64,' + element;
                console.log(base64Image)
            });

            that.imageAssets = selection;
            console.log(this.imageSrc);
        }).catch(function (e) {
            console.log(e);

        });
    }








}
