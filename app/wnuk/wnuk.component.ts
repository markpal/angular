import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Dane{
  wynik : number;
}

@Component({
  selector: 'app-wnuk',
  templateUrl: './wnuk.component.html',
  styleUrls: ['./wnuk.component.css']
})
export class WnukComponent {
  min : number = 0;
  max : number = 0;
  data !: Dane;

  constructor(private http: HttpClient) { }
  
  Losuj(){
    this.http.get<Dane>('http://localhost:3000/losowa/min/' + this.min + '/max/' + this.max).subscribe(data => {
      this.data = data; 
    });
  }
}
