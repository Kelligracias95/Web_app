import { Component, HostListener , OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'International Office',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Service',
      icon: 'list',
      path: '/service'
    },
    {
      title: 'Sitemap',
      icon: 'map',
      path: '/sitemap'
    }
  ];


  dropdownItems = [
    {
      title: 'Orientation week for Exchange Student',
      icon: 'list',
      path: '/service/orientation-week',
    },
    {
      title: 'Course Selection',
      icon: 'list',
      path: '/service/course-selection',
    },

    {
      title: 'Information Session',
      icon: 'list',
      path: '/service/information-session',
    },
    {
      title: 'Integration Event',
      icon: 'list',
      path: '/service/integration-event',
    },
    {
      title: 'Pickup Service',
      icon: 'list',
      path: '/service/pickup-service',
    },
    {
      title: 'Contact',
      icon: 'list',
      path: '/service/contact',
    },
    
  ];

  title = 'Home';
  

  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event) {
    const newWidth = (event.target as Window).innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width: number) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }

  


  setTitle(title: string) {
    this.title = title
  }

}

