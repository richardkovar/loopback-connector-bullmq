import { Queue } from "bullmq";
declare const Connector: any;
export declare class BullMQConnector extends Connector {
    queues: Map<string, Queue>;
    constructor(settings: {
        name: string;
        url: string;
        queues: string[];
    });
}
export {};
//# sourceMappingURL=bullmq.connector.d.ts.map