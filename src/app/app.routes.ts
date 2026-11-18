import { Routes } from '@angular/router';
import { Presentation } from './components/front/presentation/presentation';
import { BookList } from './components/front/book-list/book-list';
import { Aboutus } from './components/front/aboutus/aboutus';
import { Error } from './components/error/error';
import { PoetryList } from './components/front/poetry-list/poetry-list';
import { BiographyList } from './components/front/biography-list/biography-list';
import { NovelList } from './components/front/novel-list/novel-list';
import { SelectedNovel } from './components/front/selected-novel/selected-novel';

export const routes: Routes = [
   { path:"presentation", title: "presentation", component:Presentation}, 
{ path:"allBooks", title: "allBooks", component:BookList,
    children:[
        { path:"poetry", title:"poetry", component: PoetryList}, 
        { path:"biography", title:"biography", component: BiographyList}, 
        { path:"novel", title:"novel", component: NovelList}, 
        { path:"novel/:id", title:"novel", component:SelectedNovel},
        { path:"", redirectTo:"novel", pathMatch:"full"}, 
    ]
}, 

{ path:"contact", title:"Contact", component: Aboutus}, 
{ path:"", redirectTo:"presentation", pathMatch:"full"}, 
{ path:"**", title:"Erreur", component:Error} 
];
