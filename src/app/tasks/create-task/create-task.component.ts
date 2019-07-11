import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../../shared/data.service";
import { Location } from "@angular/common";

@Component({
    selector: "CreateTask",
    moduleId: module.id,
    templateUrl: "./create-task.component.html"
})
export class CreateTaskComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        //this.item = this._data.getItem(id);
    }

    onBackTap(): void {
        debugger;
        this.routerExtensions.backToPreviousPage();
    }
}