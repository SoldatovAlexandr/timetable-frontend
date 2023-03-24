import { HttpErrorResponse } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { AuthorizationService } from "src/app/services/authorization.service";
import { appEmmiter } from "../emmiters/auth-emmiter";

@Component({
    selector: "authorization-component",
    templateUrl: "./authorization.component.html",
    styleUrls: ["./authorization.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AuthorizationComponent implements OnDestroy{
    emailError = false;
    passwordError = false;
    error: string | null = null;
    private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

    constructor(
        private authorizationService: AuthorizationService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef,
        ) {
    }

    ngOnDestroy(): void{
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }

    form: FormGroup = new FormGroup({
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
    });

    submit(): void {
        if (this.form.invalid){
            this.form.controls["email"].invalid ? this.emailError = true : this.emailError = false;
            this.form.controls["password"].invalid ? this.passwordError = true : this.passwordError = false;
            this.error = null;
        } else {
                this.authorizationService.auth(this.form.getRawValue())
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe({ next: (info) => {
                    console.log(info)
                    appEmmiter.authEmitter.emit(false);
                    this.error = null;
                    this.changeDetectorRef.markForCheck();
                    this.router.navigate(["/admin"]);
                }, error: (info: HttpErrorResponse) => {
                    if (info.error.message === "invalid credentials"){
                        this.error = "неверный email или пароль";
                        this.changeDetectorRef.markForCheck();
                    } else {
                        this.error = "поробуйте войти позже";
                        this.changeDetectorRef.markForCheck();
                    }
                    } 
                });
        }
    }
}