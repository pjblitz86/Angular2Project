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
                    </div>
`
})

export class AppComponent {
    pageHeader: string = "Employee Details";
    imagePath: string = 'Images/Logo.JPG';
    isDisabled: boolean = false;

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}