import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
 
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
    id = -1;


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




  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
    } else {
    // handle case where id parameter is missing
    }
  }



}

interface Data {
  id : number;
  name: string;
  age: number;  
}




