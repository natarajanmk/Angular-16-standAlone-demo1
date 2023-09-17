import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
