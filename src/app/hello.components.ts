import { Component, Input } from "@angular/core";

@Component({
    selector: "hello",
    template: `<div class="text-5xl font-extrabold ...">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
      Hello {{name}}
    </span>
    <div class="text-2xl font-bold text-gray-500">
        Welcome to Angular100Day
    </div>
    
  </div>`,
    standalone: true,
})
export class HelloComponent {
    @Input() name: string;

    constructor() {
        this.name = "Nigel";
    }
    ngOnInit(){
        console.log('HelloComponent');
    }
    ngOnDestroy(){
        console.log('HelloComponent destroy');
    }
}