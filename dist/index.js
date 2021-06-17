"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const bullmq_connector_1 = require("./bullmq.connector");
function initialize(dataSource, cb) {
    const connector = new bullmq_connector_1.BullMQConnector('BullMQ', dataSource.settings);
    dataSource.connector = connector;
    dataSource.connector.dataSource = dataSource;
    console.log('BullMQ Connector Initialized');
    cb();
}
exports.initialize = initialize;
