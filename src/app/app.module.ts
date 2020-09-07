import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LogoComponent } from "./components/logo/logo.component";
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { DangerButtonComponent } from "./components/danger-button/danger-button.component";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    PrimaryButtonComponent,
    DangerButtonComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
