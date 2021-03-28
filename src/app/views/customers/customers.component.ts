import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  customers=[
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},

  ]
  ngOnInit(): void {
  }

}
