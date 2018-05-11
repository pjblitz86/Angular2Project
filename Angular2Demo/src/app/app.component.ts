import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
                    <div>
                        <h1>{{getFullName()}}</h1>
                        <img src='http://www.pragimtech.com/{{imagePath}}'/>
                        <my-employee></my-employee>
                        
                        <pm-products></pm-products>
                        <button [disabled]='isDisabled'>Click Me</button>
                        <button class="colorClass" [class]='classesToApply'>My button</button>
                        <br/><br/>
                        <button class="colorClass" [class.boldClass]='applyBoldClass'>My button</button>
                        <button style="color:blue"[style.font-weight]="isBold ? 'bold': 'normal'">style binding</button>
                        <br/><br/>
                        <button (click)='onClick()'>Click event</button>
                        Name : <input [value]='name' (input)='name=$event.target.value'/>
                        <br/>
                        You entered : {{name}}
                    </div>
`
})

export class AppComponent {
    pageHeader: string = "Employee Details";
    imagePath: string = 'Images/Logo.JPG';
    isDisabled: boolean = false;

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = true;

    isBold: boolean = true;

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    onClick():void {
        console.log("Button clicked!");
    }

    name: string = 'Paul';
}