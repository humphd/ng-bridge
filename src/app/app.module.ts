import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BridgeInfoComponent } from './bridge-info/bridge-info.component';
import { BridgeInfoPanelComponent } from './bridge-info-panel/bridge-info-panel.component';
import { BridgeInfoMapComponent } from './bridge-info-map/bridge-info-map.component';
import { BridgeFormTemplateDrivenComponent } from './bridge-form-template-driven/bridge-form-template-driven.component';
import { BridgeFormReactiveComponent } from './bridge-form-reactive/bridge-form-reactive.component';
import { BridgeFormMaterialComponent } from './bridge-form-material/bridge-form-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BridgeInfoComponent,
    BridgeInfoPanelComponent,
    BridgeInfoMapComponent,
    BridgeFormTemplateDrivenComponent,
    BridgeFormReactiveComponent,
    BridgeFormMaterialComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Add an HTTP Injector, to add our token to any requests to the REST API
    JwtModule.forRoot({
      config: {
        // Here is how we'll get the token, if it exists
        tokenGetter: () => localStorage.getItem('token'),
        // The list of domains that require adding the token (don't do it for others)
        allowedDomains: [ new URL(environment.apiUrl).host ]
      }
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
