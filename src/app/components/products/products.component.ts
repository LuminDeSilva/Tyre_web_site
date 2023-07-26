import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  
  public rowIndex!:number;
  showAddProduct!: boolean

  public products = [{
    'productId' : "001",
    'productName' : "tyre1",
    'createdDate': "Jan 29, 2020",
    'quantity': 100,
    'unitPrice': "Rs. 4000",
    'productDescription':"tyre1"
  },
  { 
  'productId' : "002",
  'productName' : "tyre2",
  'createdDate': "Jan 29, 2020",
  'quantity': 50,
  'unitPrice': "Rs. 1900",
  'productDescription':"tyre2"
  }
  
  
  
  ]

  public selectedProduct(selectedRow:number)
  {
    this.rowIndex=selectedRow;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }
}
