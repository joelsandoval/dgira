import { Component, ViewChild } from '@angular/core';
import { Puestos } from '../model/puestos';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {
  
  puestos: Puestos[] = [];
  displayedColumns: string[] = ['id', 'nombrePuesto', 'nivelEstructura', 'codigoPuesto', 'area', 'direccion', 'actualiza'];
  dataSource = new MatTableDataSource<Puestos>([]);
  paginator!: MatPaginator;


  @ViewChild(MatPaginator, { static: true })
  set appBacon(paginator: MatPaginator) {
    this.paginator = paginator;
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private service: EmpleadosService
    ) { }

  ngOnInit(): void {
    this.service.getPuestoLista().subscribe(
      lista => {
        console.log (lista)
        this.dataSource = new MatTableDataSource(lista);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
