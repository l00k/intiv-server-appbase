import { ObjectManager } from 'intiv/utils/ObjectManager';
import App from '#/AppMain/App';
import dotenv from 'dotenv';

global['__basedir'] = __dirname;

(async() => {
    dotenv.config();

    const engine = ObjectManager.getInstance(App);
    await engine.run();
})();
