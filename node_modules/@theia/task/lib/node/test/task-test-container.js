"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskTestContainer = void 0;
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var inversify_1 = require("inversify");
var logger_backend_module_1 = require("@theia/core/lib/node/logger-backend-module");
var backend_application_module_1 = require("@theia/core/lib/node/backend-application-module");
var process_backend_module_1 = require("@theia/process/lib/node/process-backend-module");
var terminal_backend_module_1 = require("@theia/terminal/lib/node/terminal-backend-module");
var task_backend_module_1 = require("../task-backend-module");
var filesystem_backend_module_1 = require("@theia/filesystem/lib/node/filesystem-backend-module");
var workspace_backend_module_1 = require("@theia/workspace/lib/node/workspace-backend-module");
var messaging_backend_module_1 = require("@theia/core/lib/node/messaging/messaging-backend-module");
var application_package_1 = require("@theia/application-package/lib/application-package");
var node_1 = require("@theia/process/lib/node");
function createTaskTestContainer() {
    var testContainer = new inversify_1.Container();
    testContainer.load(backend_application_module_1.backendApplicationModule);
    testContainer.rebind(application_package_1.ApplicationPackage).toConstantValue({});
    logger_backend_module_1.bindLogger(testContainer.bind.bind(testContainer));
    testContainer.load(messaging_backend_module_1.messagingBackendModule);
    testContainer.load(process_backend_module_1.default);
    testContainer.load(task_backend_module_1.default);
    testContainer.load(filesystem_backend_module_1.default);
    testContainer.load(workspace_backend_module_1.default);
    testContainer.load(terminal_backend_module_1.default);
    // Make it easier to debug processes.
    testContainer.rebind(node_1.TerminalProcess).to(TestTerminalProcess);
    return testContainer;
}
exports.createTaskTestContainer = createTaskTestContainer;
var TestTerminalProcess = /** @class */ (function (_super) {
    __extends(TestTerminalProcess, _super);
    function TestTerminalProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestTerminalProcess.prototype.emitOnStarted = function () {
        var _this = this;
        if (process.env['THEIA_TASK_TEST_DEBUG']) {
            console.log("START " + this.id + " " + JSON.stringify(__spread([this.executable, this.options.commandLine], this.arguments)));
            this.outputStream.on('data', function (data) { return console.debug(_this.id + " OUTPUT: " + data.toString().trim()); });
        }
        _super.prototype.emitOnStarted.call(this);
    };
    return TestTerminalProcess;
}(node_1.TerminalProcess));
//# sourceMappingURL=task-test-container.js.map