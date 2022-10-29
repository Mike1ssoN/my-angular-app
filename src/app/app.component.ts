import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-angular-app';

  products:IProduct[] = []

  ngOnInit(): void {
  }

}
