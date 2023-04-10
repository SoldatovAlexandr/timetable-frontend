import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "modal-component",
    templateUrl: "./create-admin-modal.component.html",
    styleUrls: ["../modal.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateAdminModalComponent{
    constructor(){
    }
    isInvalid: boolean = false;
    errorText: string = "";
    formModel: FormGroup = new FormGroup({
        name: new FormControl("", [Validators.required]),
        sName: new FormControl("", [Validators.required]),
        login: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
    });

    onSubmit(){
        console.log(this.formModel)
        if (this.formModel.status === "INVALID"){
            this.isInvalid = true;
            this.errorText = "Заполните все поля"
        } else {
            this.isInvalid = false;
            this.errorText = "";
        }
    }
}