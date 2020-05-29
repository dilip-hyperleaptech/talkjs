import { Routes, RouterModule } from "@angular/router";
// import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

import { LoginComponent } from "src/app/core/authentication/components/login/login.component";

export const routes: Routes = [
    { path: '', component: LoginComponent }
];

export const routing = RouterModule.forChild(routes);