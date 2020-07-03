import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bridge } from '../bridge';
import { Bridges } from '../bridges';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges: Array<Bridge> = Bridges;

  /* We will send events out to the parent via the click emitter */
  @Output() bridgeSelected: EventEmitter<Bridge> = new EventEmitter();

  onBridgeSelected(bridge: Bridge): void {
    this.bridgeSelected.emit(bridge);
  }

  /**
   * Provide a "key" to track each instance of a Bridge, see:
   * https://angular.io/guide/template-syntax#ngfor-with-trackby
   */
  trackByBridges(index: number, bridge: Bridge): string {
    return bridge.id;
  }

  ngOnInit(): void {
  }

}
