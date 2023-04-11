import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent {
    przycisk_css: string = "btn btn-primary"
    status : boolean = true;
    data !: Data;
    routeInfo : string = "";


  zmiennaEksport: string[] = ['17:00', 'pływalnią'];


  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    }, 
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];

    onOdpowiedz(otrzymane: string){
    alert(otrzymane);
  } 

  LoadData() {
    this.http.get<Data>('http://localhost:3000/api/data').subscribe(data => {
      this.data = data; 
    });
  }

  
  Klik()
  {
    this.status = !this.status;
    this.przycisk_css = this.status ? "btn btn-primary" : "btn btn-success";
    console.log("Hallooooo");
  }




  constructor(private http: HttpClient) { }



}

interface Data {
  id : number;
  name: string;
  age: number;  
}




