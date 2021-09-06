import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public addModal: BsModalRef) { 
    this.addProductForm = this.formBuilder.group({
      productName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      categoryControl: new FormControl('', [Validators.required]),
      product_price: new FormControl('', [Validators.required]),
      file: new FormControl('',[Validators.required])

    });
  }
  get f(){
    return this.addProductForm.controls;
  }
  categories = [
    {id: 1, name:"Electronics"},
    {id: 2, name:"Clothes"},
    {id: 3, name : "Home appliances"},
    {id: 4, name:"Accessories"},
    {id: 5, name:"Health"},
    {id: 6,name: "Electrical appliances"}
  ]
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
  onSubmit(product: any) {
    
          console.log(product);
          this.addProductForm.reset();
          this.addModal.hide();
        
  }

  ngOnInit(): void {
  }

}
