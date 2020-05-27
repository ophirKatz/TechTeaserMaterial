import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }

  public downloadPdfFile(url: string): void {
    let data: Observable<Blob> = this.httpClient.get(url, { responseType: 'blob' });
    data.subscribe((blob: Blob) => {
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  private readonly pdfFileType: string = 'application/pdf';
}
