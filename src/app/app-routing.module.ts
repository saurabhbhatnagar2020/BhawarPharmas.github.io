import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes =
[
  {path:'', component:DashBoardComponent},
  {path:'home', component:DashBoardComponent},
  {path:'Contact', component:ContactComponent},
  { path:'about', component:AboutComponent},
  { path:'products', component:ProductsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
