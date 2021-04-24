import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customers=[
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},
    {"customerId":"#7826798" , "customerName":"John Doe" , "InStock":"34", "category":"Home appliences", "price":"784952"},

  ]
}
