import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { UnsanitizePipe } from '../unsanitize.pipe';

@Component({
  selector: 'app-xss-sanitization-disabled',
  standalone: true,
  imports: [CommonModule, FormsModule, UnsanitizePipe],
  templateUrl: './xss-sanitization-disabled.component.html',
  styles: [
  ]
})
export class XssSanitizationDisabledComponent implements OnInit {
  comment: string = '<span style="color:red">This is red</span>';
  public xssDisabledSanitization: any;

  constructor(protected sanitizer: DomSanitizer){
    this.sanitizer.bypassSecurityTrustHtml(this.comment)
    console.log("sda");
  }
  public ngOnInit()
  {
    this.sanitizer.bypassSecurityTrustHtml(this.comment)
  }

  
  
}
