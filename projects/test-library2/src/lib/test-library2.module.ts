import { NgModule } from '@angular/core';
import { TestLibrary2Component } from './test-library2.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryInteractionLogService }  from './in-memory-interaction-log.service';


@NgModule({
  declarations: [TestLibrary2Component],
  imports: [
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryInteractionLogService, { dataEncapsulation: false }
    )
  ],
  exports: [TestLibrary2Component]
})
export class TestLibrary2Module { }
