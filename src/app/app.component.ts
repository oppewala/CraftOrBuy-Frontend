import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {}
  ngOnInit() {
    for (var i = 0; i < this.router.config.length; i++) {
        var routePath:string = this.router.config[i].path;
    }
  }
}
