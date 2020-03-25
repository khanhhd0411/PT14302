import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SlideComponent } from "./slide/slide.component";
import { CategoryComponent } from "./category/category.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SlideComponent,
    CategoryComponent,
    ProductListComponent,
    ProductComponent,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
imports: [BrowserModule, AppRoutingModule];
