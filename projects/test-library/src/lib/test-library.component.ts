import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testLibrary',
  template: `
    <p>
      test-library works!
    </p>
  `,
  styles: []
})
export class TestLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
