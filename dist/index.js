"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const bullmq_connector_1 = require("./bullmq.connector");
function initialize(dataSource, cb) {
    const connector = new bullmq_connector_1.BullMQConnector(dataSource.settings);
    dataSource.connector = connector;
    dataSource.connector.dataSource = dataSource;
    cb();
}
exports.initialize = initialize;
//# sourceMappingURL=index.js.map