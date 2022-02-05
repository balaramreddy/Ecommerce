import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productForm:FormGroup
  productlists:Products[]=[]
  list = {};
  id:any;

  constructor(private productservice:ProductsService,
      private route:ActivatedRoute,
      fb:FormBuilder) {
        this.productForm = fb.group({
          productName:['',Validators.required],
          productImg:['',Validators.required],
          description:['',Validators.required],
          rating:['',Validators.required],
          price:['',Validators.required]
        })
      }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      this.id = param.get('id')
      console.log(param);
    }) 
    this.loaddata()
  }

  loaddata(){
    this.productservice.findone(this.id).subscribe(data =>{
      this.list = data
      console.log(data);

      this.productForm = new FormGroup({
        productName:new FormControl(data['productName']),
          productImg:new FormControl(data['productImg']),
          description:new FormControl(data['description']),
          rating:new FormControl(data['rating']),
          price:new FormControl(data['price'])
      })
    })
  }
  postdata(){
    this.loaddata()
    var id= this.id
    console.log(id);
    // console.log(this.productForm.value);
    const update = {
      ProductID:this.route.snapshot.params['id'],
      productName:this.productForm.value.productName,
      productImg:this.productForm.value.productImg,
      description:this.productForm.value.description,
      rating:this.productForm.value.rating,
      price:this.productForm.value.price
    }
    this.productservice.update(update).subscribe(data =>{
      console.log(data);
      this.productForm.reset()
    })
  }

}
