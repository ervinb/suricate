/*
 *  /*
 *  * Copyright 2012-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
import {Routes} from "@angular/router";
import {AuthGuard} from "../../shared/auth/guards/auth.guard";
import {AdminGuard} from "../../shared/auth/guards/admin.guard";
import {WidgetListComponent} from "./pages/widget-list/widget-list.component";

export const widgetRoutes: Routes = [
    {path: 'widgets', component: WidgetListComponent, canActivate: [AuthGuard]},
    {path: 'widgets/admin/configurations', component: WidgetListComponent, canActivate: [AuthGuard, AdminGuard]}
];
