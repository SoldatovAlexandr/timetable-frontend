import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { appEmmiter } from "../emmiters/auth-emmiter";
import { AuthorizationService } from "src/app/services/authorization.service";
import { Router } from "@angular/router";

@Component({
    selector: "header-component",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HeaderComponent implements OnInit{
    login: boolean = true;
    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private authService: AuthorizationService,
        private router: Router,
    ){}
    ngOnInit(){
        appEmmiter.authEmitter.subscribe(auth => {
            this.login = auth;
            this.changeDetectorRef.markForCheck();
        })
        this.authService.user().subscribe({
            next: () => {
                this.router.navigate(["/admin"])
                this.login = false;
                this.changeDetectorRef.markForCheck();
            }
        })
    }
    logout(){
        this.authService.logout();
        appEmmiter.authEmitter.emit(true);
        this.router.navigate(["/authorization"]);
    }
}