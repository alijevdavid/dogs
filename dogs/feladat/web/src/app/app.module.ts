import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListViewComponent,
    CardViewComponent,
    EditDialogComponent,
    NewDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

