import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TasksComponent } from "./tasks.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { CreateTaskComponent } from "./create-task/create-task.component";

const routes: Routes = [
    { path: "default", component: TasksComponent },
    { path: "item/:id", component: TaskDetailComponent },
    { path: "create-task", component: CreateTaskComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TasksRoutingModule { }
