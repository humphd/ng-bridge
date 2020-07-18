import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bridge-form-template-driven',
  templateUrl: './bridge-form-template-driven.component.html',
  styleUrls: ['./bridge-form-template-driven.component.css']
})
export class BridgeFormTemplateDrivenComponent implements OnInit {

/**
 * {
 *  "id":"bridge-32-141-C",
 *  "name":"STONEY CREEK CULVERT #2 HWY 35",
 *  "lat":44.2813604,
 *  "lng":-78.7022456,
 *  "year":1902,
 *  "length":21,
 *  "width":null
 * }
 */
  id: string;
  name: string;
  lat: number;
  lng: number;
  year: number;
  length: number | null;
  width: number | null;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('submit', {
      value: form.value,
      valid: form.valid,
      dirty: form.dirty,
      touched: form.touched
    });
  }

}
