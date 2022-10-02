import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/products';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {

  constructor() { }

  public  getProducts() {

    let products:Product[];

    products=[
      {
        batchnumber:'sa',
        composition:'sasyr',
        price:2200,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold',
        image:'./assets/accelrotab.PNG'
      },
      {
        batchnumber:'sawwew',
        composition:'sasyr',
        price:220320,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold', image:'./assets/acebro.PNG'
      },
      {
        batchnumber:'sa',
        composition:'sasyr',
        price:2200,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold',
        image:'./assets/acebro2.PNG'
      },
      {
        batchnumber:'sawwew',
        composition:'sasyr',
        price:220320,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold', image:'./assets/ambroxol.PNG'
      },{
        batchnumber:'sa',
        composition:'sasyr',
        price:2200,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold',
        image:'./assets/accelrotab.PNG'
      },
      {
        batchnumber:'sawwew',
        composition:'sasyr',
        price:220320,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold', image:'./assets/acebro.PNG'
      },
      {
        batchnumber:'sa',
        composition:'sasyr',
        price:2200,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold',
        image:'./assets/acebro2.PNG'
      },
      {
        batchnumber:'sawwew',
        composition:'sasyr',
        price:220320,
        dosage:'Daily',
        manufacturedBy:'Bhawar',
        mfglicenseNumber:'My Licnesce',
        productID:111,
        productname:'sas',
        storage:'Vold', image:'./assets/ambroxol.PNG'
      }
    ];

    return products;
}
}
