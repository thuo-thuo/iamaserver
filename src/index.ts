require('dotenv').config();
import app from './app';

const microservice = 'im-a-service!';
async function run(): Promise<void> {
  try {
    console.log('im-a-service!  starting 🔧...');

    // start serving application
    app().listen(3000, () => {
      console.log('Listening on port 3000!');
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

run();
