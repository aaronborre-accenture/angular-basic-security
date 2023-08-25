import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { UnsanitizePipe } from '../unsanitize.pipe';

@Component({
  selector: 'app-xss-dom',
  standalone: true,
  imports: [CommonModule, FormsModule, UnsanitizePipe],
  templateUrl: './xss-dom.component.html',
  styleUrls: ['./xss-dom.component.scss']
})
export class XssDOMComponent {
  comment: string = '<script defer>alert("Hi !, I am script and I bypassed angular security")</script>';
  @ViewChild('element')
  
  public element: any;

  constructor(public renderer: Renderer2, public ElementRef: ElementRef, private sanitizer: DomSanitizer) {}

  public ngOnInit()
  {
  //  this.appendHTMLSnippetToDOM();
  
  }
  public appendHTMLSnippetToDOM()
  {

    this.element = this.ElementRef?.nativeElement;
    // const fragment =  document.createRange().createContextualFragment(this.sanitizeInput(this.comment));
    const fragment = document.createRange().createContextualFragment(this.comment);
    this.element.appendChild(fragment);
    console.log(this.sanitizeInput(this.comment));
    
  }

  sanitizeInput(value: string){
    let sanitizedValue = this.sanitizer.sanitize(
      SecurityContext.HTML,
      value
    );
    return sanitizedValue === null ? '' : sanitizedValue; 
  }
}
