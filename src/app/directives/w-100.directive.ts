import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: 'w100'
})
export class W100Directive {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.width = '100%';
    }
}