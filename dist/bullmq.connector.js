"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMQConnector = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ioredis_1 = __importDefault(require("ioredis"));
const bullmq_1 = require("bullmq");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Connector = require('loopback-connector').Connector;
class BullMQConnector extends Connector {
    constructor(settings) {
        super();
        this.queues = new Map();
        const connection = new ioredis_1.default(settings.url);
        for (const name of settings.queues) {
            this.queues.set(name, new bullmq_1.Queue(name, { connection }));
        }
    }
}
exports.BullMQConnector = BullMQConnector;
