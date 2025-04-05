import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
//import { NgOptimizedImage } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    ButtonModule,
    FloatLabelModule,
    RouterLink,
    CheckboxModule,
    InputTextModule,
    FormsModule,
  ],
  standalone: true,
  selector: 'fleet-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  //ngOnInit(): void { }
}
