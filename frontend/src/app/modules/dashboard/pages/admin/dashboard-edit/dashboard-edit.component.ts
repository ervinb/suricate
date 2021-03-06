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

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CustomValidators} from 'ng2-validation';

import {Project} from '../../../../../shared/model/dto/Project';
import {DashboardService} from '../../../dashboard.service';
import {ToastService} from '../../../../../shared/components/toast/toast.service';
import {ToastType} from '../../../../../shared/model/toastNotification/ToastType';

/**
 * Component that display the edit page for a dashboard
 */
@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {

  /**
   * The dashboard form
   * @type {FormGroup}
   */
  editDashboardForm: FormGroup;

  /**
   * The dashboard to edit
   * @type {Project}
   */
  dashboard: Project;

  /**
   * Constructor
   *
   * @param {DashboardService} dashboardService The dashboard service to inject
   * @param {ActivatedRoute} activatedRoute The activated route to inject
   * @param {FormBuilder} formBuilder The formBuilder service
   * @param {ToastService} toastService The service used for displayed Toast notification
   */
  constructor(private dashboardService: DashboardService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private toastService: ToastService) {
  }

  /**
   * Called when the component is displayed
   */
  ngOnInit() {
    this
        .activatedRoute
        .params
        .subscribe(params => {
          this
              .dashboardService
              .getOneById(+params['dashboardId'])
              .subscribe(dashboard => {
                this.dashboard = dashboard;
                this.initDashboardForm();
              });
        });
  }

  /**
   * Init the dashboard edit form
   */
  initDashboardForm() {
    this.editDashboardForm = this.formBuilder.group({
      name: [this.dashboard.name, [Validators.required, Validators.minLength(3)]],
      token: [this.dashboard.token, [Validators.required]],
      widgetHeight: [this.dashboard.widgetHeight, [Validators.required, CustomValidators.digits, CustomValidators.gt(0)]],
      maxColumn: [this.dashboard.maxColumn, [Validators.required, CustomValidators.digits, CustomValidators.gt(0)]]
    });
  }


  /**
   * Check if the field is invalid
   *
   * @param {string} field The field to check
   * @returns {boolean} False if the field valid, true otherwise
   */
  isFieldInvalid(field: string) {
    return this.editDashboardForm.invalid && (this.editDashboardForm.get(field).dirty || this.editDashboardForm.get(field).touched);
  }

  /**
   * edit the dashboard
   */
  saveDashboard() {
    this
        .dashboardService
        .editProject({...this.dashboard, ...this.editDashboardForm.value})
        .subscribe(() => this.toastService.sendMessage('Dashboard saved successfully', ToastType.SUCCESS));
  }
}
