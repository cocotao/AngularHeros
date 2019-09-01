import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { InteractionLog } from './InteractionLog'

@Injectable({
  providedIn: 'root',
})

export class InMemoryInteractionLogService implements InMemoryDbService {
  createDb() {
    const interactionLogs = [
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 }
    ];
    return {interactionLogs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: InteractionLog[]): number {
  //   return heroes.length > 0 ? [{id: "18"}] : [{id: "19"}];
  // }
}