// eslint-disable-next-line @typescript-eslint/no-var-requires
import IORedis from "ioredis";
import { Queue } from "bullmq";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Connector = require('loopback-connector').Connector;

export class BullMQConnector extends Connector {

    queues: Map<string,Queue> = new Map<string, Queue>()

    constructor(settings: {
        name: string,
        url: string,
        queues: string[]
    }) {
        super();
        const connection = new IORedis(settings.url);
        for(const name of settings.queues){
            this.queues.set(name, new Queue(name, { connection }))
        }
    }
}
