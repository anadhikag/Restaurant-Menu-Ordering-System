import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') isHighlighted: boolean | undefined = false;
  @Input() highlightColor: string = '#ffebee'; // Light red/pink by default

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (this.isHighlighted) {
      this.el.nativeElement.style.backgroundColor = this.highlightColor;
      this.el.nativeElement.style.border = `2px solid #ef5350`;
    } else {
      this.el.nativeElement.style.backgroundColor = '';
      this.el.nativeElement.style.border = '';
    }
  }
}
