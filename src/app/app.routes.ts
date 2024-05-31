import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./pages/home/home.component";
import { SingleCategoryComponent } from "./pages/single-category/single-category.component";
import { SinglePostComponent } from "./pages/single-post/single-post.component";
import { TermsAndConditionsComponent } from "./pages/terms-and-conditions/terms-and-conditions.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ComentsComponent } from "./pages/coments/coments.component";
import { PreguntasComponent } from "./pages/preguntas/preguntas.component";


export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'category', component: SingleCategoryComponent },
    {path: 'post', component:SinglePostComponent },

    {path: 'about', component: AboutUsComponent },
    {path: 'term-conditions', component: TermsAndConditionsComponent },
    {path: 'contact', component: ContactUsComponent},
    {path: 'coments', component: ComentsComponent},
    {path: 'preguntas', component:PreguntasComponent }


];

@NgModule({
    imports:[RouterModule.forRoot(routes),  ],
    exports: [RouterModule, ]
})
export class AppRoutingModule{}



