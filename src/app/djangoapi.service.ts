import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class DjangoapiService {
    private serverUrl = "http://192.168.1.27:8000/api/product/";

  constructor(private http: HttpClient) { }

  public postData(name:any,slug:any,description:any,price:any,stock:any,image:any) {
   // let options = this.createRequestOptions();
    return this.http.post(this.serverUrl,{"name":name ,
    "slug": slug,
    "description": description,
    "price": price,
     "stock": stock
});
}

private createRequestOptions() {
    let headers = new HttpHeaders({
        "Content-Type": "application/json"
    });
    return headers;
}
}
