import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';

const routes: Routes = [
  {
    component: ListViewComponent,
    path: 'list-view',
    children:[
      {
        path : ':id',
        children:[
          {
            path : 'edit',
            component: EditDialogComponent
          }
        ]
      },
      {
        path : 'new',
        component : NewDialogComponent
      }
    ]
  },
  {path: 'card-view' , component : CardViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
