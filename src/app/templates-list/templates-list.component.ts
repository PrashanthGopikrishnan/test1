import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export interface VulnsList {
  title: string;
  poc: string;
  desc: string;
  severity: string;
  ref: string;
  cvss: number;
  cve: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class TemplatesListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'severity', 'cvss', 'cve'];
  dataSource = new MatTableDataSource<VulnsList[]>();
  getvulnlistStatus = '';
  countvulns = [];
  expandedElement: VulnsList | null;
  sourceSelect = 'VULNREPO';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvulnlistStatus = 'Loading...';
    this.http.get<any>('/assets/vulns.json?v=' + + new Date()).subscribe(res => {

      this.dataSource = new MatTableDataSource<VulnsList[]>(res);
      this.countvulns = res;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.getvulnlistStatus = '';

    });

  }

  changeselect() {

    if (this.sourceSelect === "VULNREPO") {
      
      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/vulns.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource = new MatTableDataSource<VulnsList[]>(res);
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "CWE") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/CWE_V.4.3.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "MMOBILE") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/mobile-attack.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "MENTERPRISE") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/enterprise-attack.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "OWASPTOP2017") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/OWASPtop102017.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "OWASPTOP2021") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/OWASPtop102021.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "OWASPTOP10CICD") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/OWASPtop10cicd.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    } else if (this.sourceSelect === "OWASPTOP10k8s") {

      this.getvulnlistStatus = 'Loading...';
      this.http.get<any>('/assets/OWASPtop10k8s.json?v=' + + new Date()).subscribe(res => {
  
        this.dataSource.data = res;
        this.countvulns = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.getvulnlistStatus = '';
  
      });


    }

  }

}
