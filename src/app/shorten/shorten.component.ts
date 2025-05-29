import { Component } from '@angular/core';
import { BitlyService } from '../bitly.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shorten',
  imports: [CommonModule, FormsModule],
  templateUrl: './shorten.component.html',
  styleUrl: './shorten.component.css'
})
export class ShortenComponent {
longUrl = "";
shortUrl = "";
loading = false;
error = '';

constructor(private bitly: BitlyService ) {}

  onSubmit() {
    this.loading = true;
    this.error = '';
    this.shortUrl = '';
    this.bitly.shortenUrl(this.longUrl).subscribe({
      next: (response) => {
        this.shortUrl = response.link;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to shorten URL. Please try again.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
