import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  title = 'Service';
  dropdown = false;
  isMobileView = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Update isMobileView on window resize
    this.checkScreenWidth();
    // Hide dropdown if the screen size is not mobile
    if (!this.isMobileView) {
      this.hideDropdown();
    }
  }

  checkScreenWidth(): void {
    // Set isMobileView based on window width
    this.isMobileView = window.innerWidth <= 768; 
  }

  ngOnInit() {
    // Initialize isMobileView based on window width
    this.checkScreenWidth();
  }

  // Toggle the dropdown directly
  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  hideDropdown(): void {
    this.dropdown = false;
  }

  // Show dropdown when clicking the menu button
  showDropdown(): void {
    if (this.isMobileView) {
      this.toggleDropdown();
    }
  }
}
