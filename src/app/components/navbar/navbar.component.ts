import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  image = "./../../../assets/images/JiYeon.jpg";
  name = "James Bradley";
  userType = "user";
  icon = "./../../../assets/images/dash_icon.png";
  dashboardLink = "#";
  notifications = "#";
  reports ="#";
  profile_setting ="#";
  homelink = "#";
  searchIcon = "./../../../assets/icons/search-2.svg";
  profileIcon = "./../../../assets/icons/profile-3.svg";
  login = "#";
  heartIcon = "./../../../assets/icons/heart-3.svg";
  heartlink = "#";
  cart = "#";
  shoppingBag = "./../../../assets/icons/shopping-bag.svg";
  homeLink = "#";
  contactlink = "#";
  shoplink = "#";
  shoppinglogo = "./../../../assets/icons/shopping-cart.svg"

  //isAdmin:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
