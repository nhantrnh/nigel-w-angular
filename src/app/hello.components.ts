import { Component, Input } from "@angular/core";

@Component({
    selector: "hello",
    template: `<h1>Hello, {{name}}!</h1>`,
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