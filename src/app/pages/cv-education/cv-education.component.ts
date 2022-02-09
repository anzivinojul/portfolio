import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.scss']
})
export class CvEducationComponent implements OnInit {

  constructor() { }

  downloadPDF() {
    const pdfURL = './assets/files/CV Julien Anzivino.pdf';
    const pdfName = 'CV Julien Anzivino';
    FileSaver.saveAs(pdfURL, pdfName);
  }

  ngOnInit(): void {
  }

}
