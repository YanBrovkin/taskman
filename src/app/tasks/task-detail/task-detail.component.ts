import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../../shared/data.service";

@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./task-detail.component.html"
})
export class TaskDetailComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getItem(id);
    }

    onBackTap(): void {
        debugger;
        this.routerExtensions.back();
    }
}
