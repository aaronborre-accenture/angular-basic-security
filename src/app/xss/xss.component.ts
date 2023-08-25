import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UnsanitizePipe } from '../unsanitize.pipe';

@Component({
  selector: 'app-xss',
  standalone: true,
  imports: [CommonModule, FormsModule, UnsanitizePipe],
  templateUrl: './xss.component.html',
  styleUrls: [ './xss.component.scss'
  ]
})
export class XssComponent {
  username: string = '';
  isSaved: boolean = false;
  constructor(){}


  canDeactivate1(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result); //true || false
    }
    return of(true);
  }
}
