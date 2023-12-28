import { Component,Input,SimpleChange, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: String = '';
    counter = signal(0);
    counterRef: number | undefined;
   constructor(){
    //NO ASYNC
    // BEFORE RENDER
    //UNA VEZ
    console.log('constructor');
    console.log('-'.repeat(10));
   }
   ngOnChanges(changes: SimpleChange){
    //BEFORE AND DURING RENDER
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
   }

   ngOnInit(){
    //after render
    //una vez
    //async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message)
    this.counterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1)
    }, 1000)

   }
   ngAfterView(){
    //after render
    //hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
   }
   ngOnDestroy(){
    console.log('ngOnDestroy ');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
   }
}
