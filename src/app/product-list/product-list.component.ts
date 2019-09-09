import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  error: any;
  headers: string[];
  config: {};

  constructor(private configService: ConfigService) {}

  share(product) {
    window.alert('The product ' + product.name +' has been shared!');
  }
  showConfig () {
    this.configService.getConfig()
    .subscribe(
      (data) => this.config = {...data},
      error => this.error = error
    );
    console.log(this.config);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/