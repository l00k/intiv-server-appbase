import { ObjectManager } from 'intiv/utils/ObjectManager';
import ExpressFactory from 'intiv/core/Express/Factory';
import AbstractApp from 'intiv/core/Module/AbstractApp';


export default class App
    extends AbstractApp
{

    protected async main()
    {
        const expressFactory = ObjectManager.getInstance(ExpressFactory);
        expressFactory.create();
    }

}
