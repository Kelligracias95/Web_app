import { Component, ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../../components/translation/translation.component';



@Component({
  
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  dropdown = false;
  merge: string = 'merge';
  isMobileView = false; 

  @ViewChild('productbtn', { read: ElementRef }) productbtn!: ElementRef;

  constructor() {}


  

  ngOnInit() {
    // Initialize isMobileView based on window width
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Update isMobileView on window resize
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    // Set isMobileView based on window width
    this.isMobileView = window.innerWidth <= 767; 
  }

  // Toggle the dropdown directly
  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  hideDropdown(event: MouseEvent): void {
    
    
    // Hide dropdown logic
    const xTouch = event.clientX ?? 0;
    const yTouch = event.clientY ?? 0;

    const rect = this.productbtn?.nativeElement.getBoundingClientRect();
    const topBoundary = rect?.top + 2 ?? 0;
    const leftBoundary = rect?.left + 2 ?? 0;
    const rightBoundary = rect?.right - 2 ?? 0;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }
  
}

