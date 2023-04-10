import { Component, ChangeDetectionStrategy } from "@angular/core";

enum TypeAction {
    createAdmin,
    createTeacher
}

interface ParamsForModal {
    action: TypeAction
    name?: string,
    sName?: string,
    login?: string,
    password?: string,
}

@Component({
    selector: "admin-component",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminComponent{
    constructor(){
    }

}