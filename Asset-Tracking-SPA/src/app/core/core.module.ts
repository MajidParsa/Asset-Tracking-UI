import { NgModule } from '@angular/core';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponenet } from './layout/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule(
    {
        declarations: [
            HeaderComponenet,
            FooterComponent,
            PageNotFoundComponent
        ],
        exports: [
            HeaderComponenet,
            FooterComponent
        ]
    }
)

export class CoreModule {

}
