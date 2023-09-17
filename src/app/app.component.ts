import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './blog/footer/footer.component';
import { HeaderComponent } from './blog/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  name = 'Angular';
}
