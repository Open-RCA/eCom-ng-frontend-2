import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @ViewChild('file') fileELement: any;
 
  form:FormGroup;
  constructor(private fb:FormBuilder, public addModal: BsModalRef) {
    this.form = this.fb.group({
      productName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      product_price: new FormControl('',[Validators.required]),
      categoryControl: new FormControl('',Validators.required)
    });
  }
  categories = [
    {id: 1, name:"Electronics"},
    {id: 2, name:"Clothes"},
    {id: 3, name : "Home appliances"},
    {id: 4, name:"Accessories"},
    {id: 5, name:"Health"},
    {id: 6,name: "Electrical appliances"}
  ]
  selectedValue = null;
  
  onSubmit(form: FormGroup) {
    console.log(form.value);
    console.log(form.valid);
    form.reset();
    this.imgURL=undefined;
    this.fileELement.nativeElement.value = null;
  }
  
  get productName(){
    return this.form.get('productName');
  }
  get product_price(){
    return this.form.get('product_price');
  }
  get categoryControl(){
    return this.form.get('categoryControl');
  }
  // Image preview 
  public imagePath: any;
  imgURL: any;
  public message: string | undefined;
 
  preview(files:any) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  

  ngOnInit(): void {
  }

}
