import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Tasks",
    moduleId: module.id,
    templateUrl: "./tasks.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private itemService: DataService, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
