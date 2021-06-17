import { BullMQConnector } from './bullmq.connector';

export function initialize(dataSource: {
    settings: {
        name: string,
        url: string,
        queues: string[]
    },
    connector: any
}, cb: () => void) {
    const connector = new BullMQConnector(dataSource.settings);
    dataSource.connector = connector;
    dataSource.connector.dataSource = dataSource;
    cb();
}
