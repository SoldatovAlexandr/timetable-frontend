import { Component, ChangeDetectionStrategy } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "create-group-modal-component",
    templateUrl: "./create-group-modal.component.html",
    styleUrls: ["../modal.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateGroupModalComponent{
    constructor(){
    }
    isInvalid: boolean = false;
    errorText: string = "";
    formModel: FormGroup = new FormGroup({
        group: new FormControl("", [Validators.required]),
    });

    onSubmit(){
        console.log(this.formModel)
        if (this.formModel.status === "INVALID"){
            this.isInvalid = true;
            this.errorText = "Введите название группы"
        } else {
            this.isInvalid = false;
            this.errorText = "";
        }
    }
}