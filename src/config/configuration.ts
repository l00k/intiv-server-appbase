import glob from 'glob';

const servicesConfiguration = {};
const servicesConfigurationPath = __dirname + '/services/';
glob.sync('*.ts', { cwd: servicesConfigurationPath })
    .forEach((filename) => {
        const serviceName = filename.replace(/\.ts$/, '');
        servicesConfiguration[serviceName] = require(servicesConfigurationPath + filename).default;
    });

export default {
    core: {},
    services: servicesConfiguration,
};
