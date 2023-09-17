import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
