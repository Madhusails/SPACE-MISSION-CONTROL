import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AstronautService } from '../service/astronaut.service';

@Component({
  selector: 'app-add-astronaut',
  templateUrl: './add-astronaut.component.html',
  styleUrls: ['./add-astronaut.component.scss'],
  })

export class AddAstronautComponent {
  id = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);
  missions = new FormControl('', [Validators.required]);

  errorMessage = signal('');

  astronautForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private astronautService: AstronautService,
    private router: Router
  ) {
    this.astronautForm = this.fb.group({
      id: ['', Validators.required],  
      name: ['', Validators.required],
      age: ['', Validators.required],
      missions: ['', Validators.required],
      active: true
    });
  }

  onSubmit() {
    if (this.astronautForm.valid) {
      console.log('Astronaut Added:', this.astronautForm.value);
      this.astronautService.addAstronaut(this.astronautForm.value);
      this.router.navigate(['/astronaut']);
    } 
  }
}