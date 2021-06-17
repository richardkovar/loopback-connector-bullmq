// eslint-disable-next-line @typescript-eslint/no-var-requires
const Connector = require('loopback-connector').Connector;

export class BullMQConnector extends Connector {
    constructor(settings: {
        name: string,
        url: string,
        queues: string[]
    }) {
        super();
    }
}
