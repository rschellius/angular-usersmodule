import { NgModule } from '@angular/core';
import { CONFIG } from './config/config';

@NgModule({
    providers: [
        { provide: CONFIG, useValue: CONFIG }
    ]
})
export class UsersServiceConfigModule { }
