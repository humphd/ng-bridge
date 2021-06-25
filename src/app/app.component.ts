import { Component } from '@angular/core';
import { Bridge } from './bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // We'll manage the state of the currently selected bridge here
  currentBridge!: Bridge;

  handleBridgeChange(bridge: Bridge): void {
    this.currentBridge = bridge;
  }
}
