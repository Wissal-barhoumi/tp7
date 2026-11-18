import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink,RouterOutlet],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {}
