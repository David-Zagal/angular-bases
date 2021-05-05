import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        // CommonModule si se usa operadores como ngIf, ngFor, etc.
    ]
})
export class ContadorModule {}