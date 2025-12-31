import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'projects', loadComponent: () => import('./projects/projects').then(m => m.Projects) },
  { path: 'skills', loadComponent: () => import('./skills/skills').then(m => m.Skills) },
];
