// eslint-disable-next-line @typescript-eslint/no-var-requires
const Connector = require('loopback-connector').Connector;

export class BullMQConnector extends Connector {
    constructor(name: string, settings: any) {
        console.log(settings);
        super(name, settings);
    }
}