import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialService } from '../services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historials: any[] = [];

  constructor(
    private historialService:HistorialService,
    private router: Router
  ) {
    setInterval(() => this.reloadPage(), 1000);
  }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.historialService.getAll().subscribe((res: any)=>{
      console.log(res);
      this.historials = res;
    })
  }

  reloadPage(){
    this.ngOnInit();
    // this.router.navigate(["http://localhost:4200/historial"]);
  }
}
