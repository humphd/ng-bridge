import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bridge-form-material',
  templateUrl: './bridge-form-material.component.html',
  styleUrls: ['./bridge-form-material.component.css']
})
export class BridgeFormMaterialComponent implements OnInit {

  bridgeForm = new FormGroup({
    id: new FormControl('', [ Validators.required ]),
    name: new FormControl('', [ Validators.required ]),
    lat: new FormControl('', [ Validators.required ]),
    lng: new FormControl('', [ Validators.required ]),
    year: new FormControl('', [
      Validators.required,
      Validators.pattern('\s*[0-9]{4}\s*')
    ]),
    length: new FormControl(''),
    width: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const form = this.bridgeForm;
    console.log('submit', {
      value: form.value,
      dirty: form.dirty,
      valid: form.valid
    });
  }

}
