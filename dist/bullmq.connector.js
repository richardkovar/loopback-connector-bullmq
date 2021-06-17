"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMQConnector = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Connector = require('loopback-connector').Connector;
class BullMQConnector extends Connector {
    constructor(name, settings) {
        console.log(settings);
        super(name, settings);
    }
}
exports.BullMQConnector = BullMQConnector;
