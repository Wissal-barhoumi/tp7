import { Component, inject } from '@angular/core';
import { NovelService } from '../../../services/novel-service';
import { RouterLink } from '@angular/router';



@Component({
  imports: [RouterLink],
  selector: 'app-novel-list',
  styleUrl: './novel-list.css',
  templateUrl: './novel-list.html',
})
export class NovelList {
  private readonly novelService=inject(NovelService);
  novels = this.novelService.novels
  
}
