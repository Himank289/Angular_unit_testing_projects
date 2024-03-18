import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LightswitchComponent } from './components/lightswitch.component';
import { WelcomeComponent } from './components/Welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LightswitchComponent,WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_unit_testing';
}
