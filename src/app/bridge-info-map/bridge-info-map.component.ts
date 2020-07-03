import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bridge } from '../bridge';
import { LeafletMap } from './leaflet-map';

@Component({
  selector: 'app-bridge-info-map',
  templateUrl: './bridge-info-map.component.html',
  styleUrls: [ './bridge-info-map.component.css' ]
})
export class BridgeInfoMapComponent implements OnInit, AfterViewInit, OnChanges {

  map: LeafletMap;
  @Input() bridge: Bridge;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Pass the id of our <div>
    this.map = new LeafletMap('map');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.map) {
      // Bail if we haven't built the map yet...
      return;
    }

    // Otherwise, get the currentValue of the bridge property, extract the
    // lat, lng, and name, and update our map via the map.update() method.
    if (changes.bridge.currentValue) {
      const { lat, lng, name } = changes.bridge.currentValue;
      this.map.update(lat, lng, name);
    }
  }

}
