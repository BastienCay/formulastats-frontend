import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";
import {LeftSidebarComponent} from "./left-sidebar/left-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftSidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'formulastats-frontend';

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
