import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './components/files/files.component';
import { TypesComponent } from './components/types/types.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthComponent } from './components/auth/auth.component';

import { AuthGuardService } from '../app/services/auth.guard.service'

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'files', component: FilesComponent, canActivate: [AuthGuardService]  },
  { path: 'types', component: TypesComponent, canActivate: [AuthGuardService]  },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
