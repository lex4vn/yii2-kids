import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {ScheduleListComponent} from './schedule-list.component';
import {ScheduleFormComponent} from './schedule-form.component';
import {ScheduleRoutingModule} from './schedule-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ScheduleRoutingModule,
    ],
    declarations: [
        ScheduleListComponent,
        ScheduleFormComponent,
    ]
})
export class ScheduleModule { }
