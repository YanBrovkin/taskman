import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CreateTaskComponent } from "./tasks/create-task/create-task.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(tasksTab:tasks/default//createTaskTab:tasks/create-task)",
        pathMatch: "full"
    },
    {
        path: "tasks",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/tasks/tasks.module#TasksModule",
        outlet: "tasksTab",
    },
    {
        path: "tasks/create-task",
        component: CreateTaskComponent,
        //loadChildren: "~/app/tasks/tasks.module#TasksModule",
        outlet: "createTaskTab"
    }
    // {
    //     path: "search",
    //     component: NSEmptyOutletComponent,
    //     loadChildren: "~/app/search/search.module#SearchModule",
    //     outlet: "searchTab"
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
