import { Component, ɵmarkDirty  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ivy-demo';

  stuff() {
    this.title = 'Hello Ivy, it\'s ' + new Date().toLocaleTimeString();
    // ɵmarkDirty(this);
  }
}
