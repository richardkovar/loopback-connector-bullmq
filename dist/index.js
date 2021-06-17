"use strict";
exports.__esModule = true;
exports.initialize = void 0;
var bullmq_connector_1 = require("./bullmq.connector");
function initialize(dataSource, cb) {
    var connector = new bullmq_connector_1.BullMQConnector('BullMQ', dataSource.settings);
    dataSource.connector = connector;
    dataSource.connector.dataSource = dataSource;
    console.log('BullMQ Connector Initialized');
    cb();
}
exports.initialize = initialize;
