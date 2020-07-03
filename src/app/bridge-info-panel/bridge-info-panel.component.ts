import { Component, OnInit, Input } from '@angular/core';
import { Bridge } from '../bridge';

function prettyPrintDimension(value: number | null): string {
  return value ? `${value} m` : 'unknown';
}

@Component({
  selector: 'app-bridge-info-panel',
  templateUrl: './bridge-info-panel.component.html',
  styleUrls: ['./bridge-info-panel.component.css']
})
export class BridgeInfoPanelComponent implements OnInit {

  @Input() bridge: Bridge;

  ngOnInit(): void {
  }

  age(): number {
    return (new Date()).getFullYear() - this.bridge.year;
  }

  width(): string {
    return prettyPrintDimension(this.bridge.width);
  }

  length(): string {
    return prettyPrintDimension(this.bridge.length);
  }

}
