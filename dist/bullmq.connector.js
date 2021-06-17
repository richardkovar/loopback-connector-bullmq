"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BullMQConnector = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var Connector = require('loopback-connector').Connector;
var BullMQConnector = /** @class */ (function (_super) {
    __extends(BullMQConnector, _super);
    function BullMQConnector(name, settings) {
        var _this = this;
        console.log(settings);
        _this = _super.call(this, name, settings) || this;
        return _this;
    }
    return BullMQConnector;
}(Connector));
exports.BullMQConnector = BullMQConnector;
