import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BridgeInfoComponent } from './bridge-info/bridge-info.component';
import { BridgeInfoPanelComponent } from './bridge-info-panel/bridge-info-panel.component';
import { BridgeInfoMapComponent } from './bridge-info-map/bridge-info-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BridgeInfoComponent,
    BridgeInfoPanelComponent,
    BridgeInfoMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
