
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { VideastesComponent } from './videastes/videastes.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { CreationsComponent } from './creations/creations.component';

export const COMPONENTS = [
  HeaderComponent,
  VideastesComponent,
  PrestationsComponent,
  CreationsComponent
];

// @NgModule({
//   declarations: [
//     ...COMPONENTS
//   ],
//   imports: [
//     ...COMPONENTS
//   ],
//   exports: [
//     ...COMPONENTS
//   ],
//   entryComponents: [
//     ...COMPONENTS
//   ]
// })
// export class ComponentsModule { }