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
  searchIcon = "./../../../assets/icons/search-2.svg";
  profileIcon = "./../../../assets/icons/profile-3.svg";
  heartIcon = "./../../../assets/icons/heart-3.svg";
  shoppingBag = "./../../../assets/icons/shopping-bag.svg";
  shoppinglogo = "./../../../assets/icons/shopping-cart.svg"
  fourCatdots = "./../../../assets/icons/category-front-icon.svg";
  Categories: any = ['Technology', 'Clothes', 'Accesories', 'Shoes'];
  //usertype for normal user is 'user' and for admin it's 'Admin'
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
