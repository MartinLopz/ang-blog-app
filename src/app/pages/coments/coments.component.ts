import { Component } from '@angular/core';
import { ComentFromComponent } from "../../coments/coment-from/coment-from.component";
import { ComentListComponent } from "../../coments/coment-list/coment-list.component";

@Component({
    selector: 'app-coments',
    standalone: true,
    templateUrl: './coments.component.html',
    styleUrl: './coments.component.css',
    imports: [ComentFromComponent, ComentListComponent]
})
export class ComentsComponent {

}
