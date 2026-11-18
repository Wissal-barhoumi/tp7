import { Component, inject, OnInit ,signal} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NovelService } from '../../../services/novel-service';
import { Novel } from '../../../model/novel';
@Component({
  imports: [],
  selector: 'app-selected-novel',
  styleUrl: './selected-novel.css',
  templateUrl: './selected-novel.html',
})
export class SelectedNovel implements OnInit {
  route=inject(ActivatedRoute);
  router=inject(Router)
  ns=inject(NovelService)
  novel = signal<Novel | undefined>(undefined);
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.novel.set(this.ns.getRomanById(id));
  }
   onDelete() {
    if (this.novel()) {
      this.ns.deleteNovel(this.novel()!.id);
      this.router.navigate(['/allBooks/novel']);
    }
  }

  onBack() {
    this.router.navigate(['/allBooks/novel']);
  }




}
