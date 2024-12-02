import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recibir',
    loadChildren: () => import('./recibir/recibir.module').then( m => m.RecibirPageModule)
  },
  {
    path: 'facturar',
    loadChildren: () => import('./facturar/facturar.module').then( m => m.FacturarPageModule)
  },
  {
    path: 'expedir',
    loadChildren: () => import('./expedir/expedir.module').then( m => m.ExpedirPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
