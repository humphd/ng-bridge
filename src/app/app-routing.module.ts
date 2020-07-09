import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BridgeInfoComponent } from './bridge-info/bridge-info.component';

const routes: Routes = [
  { path: 'bridges/:id', component: BridgeInfoComponent },
  { path: 'bridges', component: BridgeInfoComponent },
  { path: '', redirectTo: 'bridges', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
