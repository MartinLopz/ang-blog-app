import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { PostCard2Component } from "../../layouts/post-card2/post-card2.component";
import { PostrCard3Component } from "../../layouts/postr-card3/postr-card3.component";
import { PostrCard4Component } from "../../layouts/postr-card4/postr-card4.component";
import { PostrCard5Component } from "../../layouts/postr-card5/postr-card5.component";
import { PostrCard6Component } from "../../layouts/postr-card6/postr-card6.component";
import { PostrCard7Component } from "../../layouts/postr-card7/postr-card7.component";
import { PostrCard8Component } from "../../layouts/postr-card8/postr-card8.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PostCardComponent, PostCard2Component, PostrCard3Component, PostrCard4Component, PostrCard5Component, PostrCard6Component, PostrCard7Component, PostrCard8Component]
})
export class HomeComponent {

}
