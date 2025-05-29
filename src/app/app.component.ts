import { Component } from '@angular/core';

import { ShortenComponent } from './shorten/shorten.component';

@Component({
  selector: 'app-root',
  imports: [ShortenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shorten';
}
