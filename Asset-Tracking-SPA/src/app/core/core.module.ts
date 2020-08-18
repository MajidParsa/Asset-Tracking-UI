import { NgModule } from '@angular/core';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponenet } from './layout/header/header.component';

@NgModule(
    {
        declarations: [
            HeaderComponenet, 
            FooterComponent
        ],
        exports: [
            HeaderComponenet, 
            FooterComponent
        ]
    }
)

export class CoreModule {

}