/*
 * Copyright 2012-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './home.component';
import {AddDashboardDialogComponent} from './components/add-dashboard-dialog/add-dashboard-dialog.component';
import {LayoutModule} from '../layout/layout.module';
import {homeRoutes} from './home.route';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent,
    AddDashboardDialogComponent
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    AddDashboardDialogComponent
  ]
})
export class HomeModule {
}
