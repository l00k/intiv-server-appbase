import { ObjectManager } from 'intiv/utils/ObjectManager';
import OrmFactory from 'intiv/core/ORM/Factory';


export default {
    'orm': () => ObjectManager.getInstance(OrmFactory).create(),
};
