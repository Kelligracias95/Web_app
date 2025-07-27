import { Component, OnInit } from '@angular/core';
import { ChecklistService, ChecklistItem } from '../services/checklist.service';
import jsPDF from 'jspdf';


import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TranslationComponent } from '../components/translation/translation.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
  checklistItems: ChecklistItem[] | undefined;
  checkedItems: ChecklistItem[] = [];

  constructor(private checklistService: ChecklistService) {}

  ngOnInit() {
    this.loadChecklistItems();
  }
  
  loadChecklistItems() {
    this.checklistService.fetchChecklistItems().subscribe((data: ChecklistItem[]) => {
      this.checklistItems = data;
      console.log('Checklist Items:', this.checklistItems); 
    });
  }

  onCheckboxChange(item: ChecklistItem) {
    const index = this.checkedItems.findIndex(checkedItem => checkedItem.id === item.id);
    if (index !== -1) {
      this.checkedItems.splice(index, 1); 
    } else {
      this.checkedItems.push(item); 
    }
    console.log('Checked Items:', this.checkedItems);
  }

  generatePDF() {
  const doc = new jsPDF();
  let y = 10;

   
   const logo = new Image();
   logo.src = 'assets/icon/thd_logo1.jpg'; 
   const logoWidth = 80; 
   const logoHeight = 40; 
   const pageWidth = doc.internal.pageSize.width;
   const headerMargin = 10; 
   const headerY = headerMargin; 
 
   doc.addImage(logo, 'JPEG', pageWidth - logoWidth - headerMargin, headerY, logoWidth, logoHeight);

  
  y += logoHeight + headerMargin;

  
  const title = 'Checklist';
  const fontSize = 16; 
  const titleWidth = doc.getStringUnitWidth(title) * fontSize / doc.internal.scaleFactor;
  const titleX = (pageWidth - titleWidth) / 2;
  doc.setFontSize(fontSize); 
  doc.text(title, titleX, y);
  y += 10;

  this.checkedItems.forEach(item => {
    y += 10;
    const textToDisplay = `${item.attributes.title}: ${item.attributes.name}`;
    doc.text(textToDisplay, 10, y);
  });

  doc.save('checked_items.pdf');

  console.log('PDF successfully saved with checked items.');

  window.location.reload();
}
}