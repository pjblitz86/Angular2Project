"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.imagePath = 'Images/Logo.JPG';
        this.isDisabled = false;
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.classesToApply = 'italicsClass boldClass';
        this.applyBoldClass = true;
        this.isBold = true;
        this.name = 'Paul';
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent.prototype.onClick = function () {
        console.log("Button clicked!");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                    <div>\n                        <h1>{{getFullName()}}</h1>\n                        <img src='http://www.pragimtech.com/{{imagePath}}'/>\n                        <my-employee></my-employee>\n                        \n                        <pm-products></pm-products>\n                        <button [disabled]='isDisabled'>Click Me</button>\n                        <button class=\"colorClass\" [class]='classesToApply'>My button</button>\n                        <br/><br/>\n                        <button class=\"colorClass\" [class.boldClass]='applyBoldClass'>My button</button>\n                        <button style=\"color:blue\"[style.font-weight]=\"isBold ? 'bold': 'normal'\">style binding</button>\n                        <br/><br/>\n                        <button (click)='onClick()'>Click event</button>\n                        Name : <input [value]='name' (input)='name=$event.target.value'/>\n                        <br/>\n                        You entered : {{name}}\n                    </div>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map