import { getGroupedEvents } from "./src/googleCalendareService.js";
import { log } from "./src/logger.js";
// const dateFormat = require('dateformat');

log('START!');
await getGroupedEvents();
log('END!');
