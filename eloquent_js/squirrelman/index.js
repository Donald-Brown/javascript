import JOURNAL from "./functions/journal.js";
import { phi } from "./functions/phi.js";
import { tableFor } from "./functions/tableFor.js";
import { journalEvents } from "./functions/journalEvents.js";

// console.log(phi([76, 9, 4, 1]));
// console.log(tableFor("pizza", JOURNAL));
// console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if(correlation > 0.1 || correlation < -0.1){
    console.log(event + ":", correlation);
  }
}

for(let entry of JOURNAL){
  if(entry.events.includes('peanuts') && !entry.events.includes('brushed teeth')){
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor('peanut teeth', JOURNAL)));
// console.log(phi(tableFor('peanuts', JOURNAL)));
// console.log(JOURNAL);
