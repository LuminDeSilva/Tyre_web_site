import { Component } from '@angular/core';

@Component({
  selector: 'app-onlinesearch',
  templateUrl: './onlinesearch.component.html',
  styleUrls: ['./onlinesearch.component.css']
})
export class OnlinesearchComponent {

  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  selectedCategory: string = '';
  products: any[] = []; // Replace with database

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    // Simulate fetching products 
    this.products = this.getProductsByCategory(category);
  }
  
  getProductsByCategory(category: string): any[] {
    // Add the backend
    return [
      {
        name: 'Product 1',
        price: '$10.99',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'path/to/product1.jpg'
      },
      {
        name: 'Product 2',
        price: '$19.99',
        details: 'Ut aliquam massa euismod ligula ullamcorper tempus.',
        image: 'path/to/product2.jpg'
      },
      // Join the sql backend
    ];
  }
  

}
