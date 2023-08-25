import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xss-dom-avoid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xss-dom-avoid.component.html',
  styleUrls: ['./xss-dom-avoid.component.scss']
})
export class XssDOMAvoidComponent implements OnInit, AfterViewInit {
  
  @ViewChild('spanElement') spanElement: ElementRef;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // this.elementRef.nativeElement.style.color = 'red'; // Avoid this.
    this.spanElement = this.elementRef.nativeElement;
    this.renderer.setStyle(this.spanElement, 'color', 'blue');
    
  }
  ngOnInit(): void{
    

  }
  ngAfterViewInit(): void {
    console.log(this.spanElement);
    
  }
 
}
