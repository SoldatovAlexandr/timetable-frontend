import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface NewUser {
    name: string,
    sName: string,
    group?: string,
    email: string,
    password: string,
}

@Injectable({
    providedIn: "root"
})
export default class DataService{
    constructor(
        private httpClient: HttpClient
    ){}

    createStudent(student: NewUser){
        this.httpClient.post("/createStudent", student);
    }

    createTeacher(teacher: NewUser){
        this.httpClient.post("/createTeacher", teacher);
    }

    createAdmin(admin: NewUser){
        this.httpClient.post("/createAdmin", admin);
    }

    createGroup(nameGroup: string){
        this.httpClient.post("/createGroup", {name: nameGroup});
    }
} 