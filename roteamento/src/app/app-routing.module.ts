import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaParametroComponent } from './pagina-parametro/pagina-parametro.component';

const routes: Routes = [
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
  { path: 'segunda-pagina', component: SegundaPaginaComponent },
  { path: "pagina-parametro/:id", component: PaginaParametroComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
