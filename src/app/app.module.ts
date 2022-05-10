import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from  './material.module';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { InsuaranceComponentComponent } from './insuarance-component/insuarance-component.component';
import { TestComponent } from './test/test.component';
import { HospitalComponentComponent } from './hospital-component/hospital-component.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    WelcomeComponentComponent,
    InsuaranceComponentComponent,
    TestComponent,
    HospitalComponentComponent
  ],
  imports: [
    BrowserModule,
    [ FlexLayoutModule ],
    [ FormsModule, ReactiveFormsModule ],
    BrowserAnimationsModule,
    MyMaterialModule,
    MatGridListModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'welcome', component: WelcomeComponentComponent },
      { path: 'insuarance', component: InsuaranceComponentComponent },
      { path: 'test', component: TestComponent },
      { path: 'hospital', component:  HospitalComponentComponent },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

