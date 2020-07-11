import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

import { BridgeId } from '../bridge';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges: Array<BridgeId>;

  constructor(
    // Inject our DataManagerService into the MenuComponent
    private dataService: DataManagerService
  ) {}

  /**
   * Provide a "key" to track each instance of a Bridge, see:
   * https://angular.io/guide/template-syntax#ngfor-with-trackby
   */
  trackByBridges(index: number, bridge: BridgeId): string {
    return bridge.id;
  }

  ngOnInit(): void {
    // Invoke our service's getBridges() in order to populate our bridges member.
    this.dataService.getBridges().subscribe(data => this.bridges = data);
  }

}
