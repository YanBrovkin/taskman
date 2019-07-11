import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TasksRoutingModule } from "./tasks-routing.module";
import { TasksComponent } from "./tasks.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { CreateTaskComponent } from "./create-task/create-task.component";

@NgModule({
    bootstrap: [ 
        TasksComponent 
    ],
    imports: [
        NativeScriptCommonModule,
        TasksRoutingModule
    ],
    declarations: [
        TasksComponent,
        TaskDetailComponent,
        CreateTaskComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports:[
        CreateTaskComponent,
        TasksComponent
    ]
})
export class TasksModule { }
