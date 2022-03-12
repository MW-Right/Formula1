import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: 'w50'
})
export class W50Directive {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.width = '50%';
    }
}