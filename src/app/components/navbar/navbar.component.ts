import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  adminInbox = "./../../../assets/icons/adminInbox.svg";
  notificationIcon = "./../../../assets/icons/notifications.svg";
  image = "./../../../assets/images/JiYeon.jpg";
  name = "James Bradley";
  //userType = "user";
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
  fourCatdots = "./../../../assets/icons/category-front-icon.svg";
  // City Names
  Categories: any = ['Technology', 'Clothes', 'Accesories', 'Shoes']
  static userType: any ="Admin";
  //isAdmin:boolean = false;
  get getUserType(){
    return NavbarComponent.userType;
  } 
  currentPage: string | undefined;
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.currentPage = val.url;
      }
    });
  }

  ngOnInit(): void {
  }

}
