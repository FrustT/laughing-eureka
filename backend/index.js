import { start } from './server.js';

start();
process.on('unhandledRejection', (err, _) => {
  console.log(`Server error: ${err}`);
});
