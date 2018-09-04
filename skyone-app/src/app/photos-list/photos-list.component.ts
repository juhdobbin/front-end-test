import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent, MatSort } from '@angular/material';

import { SkyoneService } from '../services/skyone.service';
import {PhotoData} from './photo-data.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  providers: [SkyoneService],
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private displayedColumns: string[] = ['id', 'title', 'thumbnailUrl' ];
  private photosList;
  public pageEvent: PageEvent;
  public dataSource: MatTableDataSource<PhotoData>;
  public pageSize = 10;
  public resultsLength = 0;

  constructor(
    private skyoneService: SkyoneService
  ) {}

  ngOnInit() {
     this.listPhotos();
  }

  listPhotos() {
    this.skyoneService
      .getPhotos()
      .subscribe(
        data => {
          this.photosList = data;
          this.dataSource = new MatTableDataSource(this.photosList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.resultsLength = this.photosList.length;
        }
      );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
