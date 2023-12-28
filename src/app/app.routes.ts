import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductComponent } from './domains/products/components/product/product.component';
import { CounterComponent } from './domains/shared/components/counter/counter.component';
import { WaveAudioComponent } from './domains/info/components/wave-audio/wave-audio.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path:'product',
        component: ProductComponent
    },
    {
        path:'wave',
        component: WaveAudioComponent
    },
    {
        path:'counter',
        component: CounterComponent
    },
    {
        path:'about',
        component: AboutComponent
    }
];
