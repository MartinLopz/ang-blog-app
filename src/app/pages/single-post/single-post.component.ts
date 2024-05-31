import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { ComentFromComponent } from "../../coments/coment-from/coment-from.component";
import { ComentListComponent } from "../../coments/coment-list/coment-list.component";
import { PostCard2Component } from "../../layouts/post-card2/post-card2.component";

@Component({
    selector: 'app-single-post',
    standalone: true,
    templateUrl: './single-post.component.html',
    styleUrl: './single-post.component.css',
    imports: [PostCardComponent, ComentFromComponent, ComentListComponent, PostCard2Component]
})
export class SinglePostComponent {

}
