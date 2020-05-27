import { FileService } from './../../../common/services/file.service';
import { Teaser } from './../../../model/teaser/teaser.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeasersHttpService {
  private readonly db: string = 'assets/db.json';

  constructor(private httpClient: HttpClient,
    private fileService: FileService) {
  }

  public fetchTeasers(): Observable<Teaser[]> {
    return this.httpClient.get<Teaser[]>(this.db);
  }

  public getTeaserPdf(url: string): Observable<string> {
    return of(url);
  }
}