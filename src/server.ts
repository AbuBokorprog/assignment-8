import { Server } from 'http';
import app from './app';
import config from './app/config';

async function main() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const server: Server = app.listen(config.port, () => {
    console.log(`app is listening on port ${config.port}`);
  });
}

main();
