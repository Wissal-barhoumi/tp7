import { Component, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterLink,RouterOutlet],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {}
