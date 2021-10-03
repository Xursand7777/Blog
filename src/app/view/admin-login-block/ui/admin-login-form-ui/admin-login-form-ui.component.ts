import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login-form-ui',
  templateUrl: './admin-login-form-ui.component.html',
  styleUrls: ['./admin-login-form-ui.component.css']
})
export class AdminLoginFormUiComponent implements OnInit {
  form!: FormGroup;

  @Input() formError = ''
  @Output() login = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl({}, [Validators.required]),
      password: new FormControl({}, [Validators.required])

    });
  }

  onFormChange() {
      this.formError = ''
  }

  onSubmit() {
    this.login.emit(this.form.value)

  }
}
