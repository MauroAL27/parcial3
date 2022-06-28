import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard} from "src/app/guards/admin.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'event-create',
    loadChildren: () => import('./event/event-create/event-create.module').then( m => m.EventCreatePageModule),canActivate: [AdminGuard]
  },
  {
    path: 'event-detail/:id',
    loadChildren: () => import('./event/event-detail/event-detail.module').then( m => m.EventDetailPageModule),canActivate: [AdminGuard]
  },
  {
    path: 'event-list',
    loadChildren: () => import('./event/event-list/event-list.module').then( m => m.EventListPageModule),canActivate: [AdminGuard]
  },
  {
    path: 'home-event',
    loadChildren: () => import('./event/home-event/home-event.module').then( m => m.HomeEventPageModule),canActivate: [AdminGuard]
  },
  {
    path: 'create-person',
    loadChildren: () => import('./pages/create-person/create-person.module').then( m => m.CreatePersonPageModule)
  },
  {
    path: 'person-list',
    loadChildren: () => import('./pages/person-list/person-list.module').then( m => m.PersonListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
