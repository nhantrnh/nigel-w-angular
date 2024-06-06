import { Component, Input, SimpleChanges } from '@angular/core';
import { OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  standalone: true,
  imports: [],
  template: `<div
  class="progress-bar-container" [style.backgroundColor]="backgroundColor">
  <div class="progress" [style]="{
      backgroundColor: progessColor,
      width: progress + '%'
  }"></div>
</div>
`,
  styles: [`
  .progress-bar-container,
  .progress {
      height: 20px;
      }
      
  .progress-bar-container {
      width: 100%;
      background-color: #f1f1f1;
    }
    `]
})
export class ProgessBarComponent implements OnInit, OnDestroy, OnChanges {
 @Input()  set progress(val: number) {
  if (typeof val !== "number"){
    const progress = Number(val);
    if(Number.isNaN(progress)){
      this._progress = 0;
    } else {
      this._progress = progress;
    }
  }
   this._progress = val;
   console.log('progress', val);
 }
 private _progress = 50;
 get progress() {
   return this._progress;
 }
  @Input() backgroundColor = '#f1f1f1';
  @Input()  progessColor = 'green';

  constructor() {
   console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progessColor
   });
  }

  ngOnInit(){
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progessColor
   });
  }
  ngOnDestroy() {
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progessColor
   });
  }
  ngOnChanges(changes: SimpleChanges)  {
    console.log('changes',{
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progessColor: this.progessColor
   });
  }
}
