import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GridView';
  columnDefs = [
    { field: 'brand', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true}
];

rowData = [
    { brand: 'Apple', model: 'Iphone12', price: 80230 },
    { brand: 'Samsung', model: 'Galaxy s20', price: 50560 },
    { brand: 'Nokia', model: 'Nokia8', price: 38000 }
];

}
