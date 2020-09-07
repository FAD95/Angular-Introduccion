import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MyFirstComponent } from "./components/my-first/my-first.component";
import { ImagesComponent } from "./components/images/images.component";

@NgModule({
  declarations: [AppComponent, MyFirstComponent, ImagesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
