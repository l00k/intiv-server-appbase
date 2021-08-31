import { ObjectManager } from '@100k/intiv/ObjectManager';
import App from '#/AppMain/App';
import dotenv from 'dotenv';

global['__basedir'] = __dirname;

(async() => {
    dotenv.config();

    const engine = ObjectManager.getInstance(App);
    await engine.run();
})();
