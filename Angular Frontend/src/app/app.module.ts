import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {MatCardModule, MatCard} from '@angular/material';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import {DashboardComponent} from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './config.js'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    // LoginComponent,
    // SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
