import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatCardModule,
        MatTableModule
    ]
})
export class MaterialModule {
    
}