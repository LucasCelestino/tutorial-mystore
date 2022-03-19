import { Component, OnInit } from '@angular/core';
import { productsList } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = productsList;

  share() {
    alert('teste');
  }

  ngOnInit() {}
}
