import { Component, OnInit } from '@angular/core';
import { productsList } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = productsList;

  share(product) {
    let templateAlert = `
    Product Name: ${product.name}
    Price: $${product.price}
    The product has been shared!
    `;
    alert(templateAlert);
  }

  ngOnInit() {}
}
