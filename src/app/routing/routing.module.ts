import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core"
import { AppComponent } from "../app.component";
import NotFoundComponent from "../components/not-found/not-found.component";
import UserComponent from "../components/user/user.component";
import AuthorizationComponent from "../components/authorization/authorization.component";


const routes: Routes = [
    {path: "", component: UserComponent},
    {path: "authorization", component: AuthorizationComponent},
    {path: "**", component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export default class RoutingModule{

}