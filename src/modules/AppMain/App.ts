import { ObjectManager } from '@100k/intiv/ObjectManager';
import ExpressFactory from 'core/Express/Factory';
import AbstractApp from 'core/Module/AbstractApp';


export default class App
    extends AbstractApp
{

    protected async main()
    {
        const expressFactory = ObjectManager.getInstance(ExpressFactory);
        expressFactory.create();
    }

}
