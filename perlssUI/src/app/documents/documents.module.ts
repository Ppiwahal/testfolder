import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from '../_shared/app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsDashboardComponent } from './documents-dashboard/documents-dashboard.component';
import { DocumentsHistoryComponent } from './documents-history/documents-history.component';



@NgModule({
  declarations: [DocumentsDashboardComponent,DocumentsHistoryComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class DocumentsModule { }
