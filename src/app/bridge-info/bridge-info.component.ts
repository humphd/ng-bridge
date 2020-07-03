import { Component, OnInit, Input } from '@angular/core';
import { Bridge } from '../bridge';

@Component({
  selector: 'app-bridge-info',
  templateUrl: './bridge-info.component.html',
  styleUrls: ['./bridge-info.component.css']
})
export class BridgeInfoComponent implements OnInit {
  @Input() bridge: Bridge;

  ngOnInit(): void {
  }

}
