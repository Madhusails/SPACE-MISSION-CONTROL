import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-astronaut',
  templateUrl: './add-astronaut.component.html',
  styleUrls: ['./add-astronaut.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class AddAstronautComponent {
  id = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);
  missions = new FormControl('', [Validators.required]);

  errorMessage = signal('');

  // updateErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage.set('You must enter a value');
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage.set('Not a valid email');
  //   } else {
  //     this.errorMessage.set('');
  //   }
  // }
}
