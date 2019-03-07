import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
  ]
})
export class CoreModule { }
