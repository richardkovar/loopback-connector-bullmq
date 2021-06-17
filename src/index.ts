import { BullMQConnector } from './bullmq.connector';

export function initialize(dataSource: { settings: any, connector: any }, cb: () => void) {
    const connector = new BullMQConnector('BullMQ', dataSource.settings);
    dataSource.connector = connector;
    dataSource.connector.dataSource = dataSource;
    console.log('BullMQ Connector Initialized')
    cb();
}
