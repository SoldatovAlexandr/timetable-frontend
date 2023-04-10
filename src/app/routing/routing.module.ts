import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core"
import { AppComponent } from "../app.component";
import NotFoundComponent from "../components/not-found/not-found.component";
import UserComponent from "../components/user/user.component";
import AuthorizationComponent from "../components/authorization/authorization.component";
import AdminComponent from "../components/admin/admin.component";
import CreateAdminModalComponent from "../components/modals/create-admin-modal/create-admin-modal.component";
import CreateTeacherModalComponent from "../components/modals/create-teacher-modal/create-teacher-modal.component";
import CreateUserModalComponent from "../components/modals/create-user-modal/create-user-modal.component";
import CreateGroupModalComponent from "../components/modals/create-group-modal/create-group-modal.component";


const routes: Routes = [
    {
        path: "", 
        component: AuthorizationComponent
    },
    {
        path: "authorization", 
        component: AuthorizationComponent
    },
    {
        path: "user", 
        component: UserComponent
    },
    {
        path: "admin", 
        component: AdminComponent, 
        children: [{
            path: "createAdmin",
            component: CreateAdminModalComponent
        },{
            path: "createTeacher",
            component: CreateTeacherModalComponent
        }, {
            path: "createStudent",
            component: CreateUserModalComponent
        }, {
            path: "createGroup",
            component: CreateGroupModalComponent
        }]
    },
    {
        path: "**", 
        component: NotFoundComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export default class RoutingModule{

}