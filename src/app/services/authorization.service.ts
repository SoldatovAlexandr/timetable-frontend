import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthorizationService{
    constructor(private httpClient: HttpClient) {
    }

    auth(data: {login: string, password: string}): Observable<unknown>{
        return this.httpClient.post("/api/login", data, { withCredentials: true });
    }

    user(): Observable<unknown>{
        return this.httpClient.get(("/api/user"),  { withCredentials: true });
    }

    logout(): void{
        this.httpClient.post("/api/logout", {}, { withCredentials: true }).subscribe();
    }
}