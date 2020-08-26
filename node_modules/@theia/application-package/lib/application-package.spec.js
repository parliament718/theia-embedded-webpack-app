"use strict";
/********************************************************************************
 * Copyright (C) 2020 Maksim Ryzhikov and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var temp = require("temp");
var fs = require("fs-extra");
var path = require("path");
var application_package_1 = require("./application-package");
var application_props_1 = require("./application-props");
var sinon = require("sinon");
var track = temp.track();
var sandbox = sinon.createSandbox();
describe('application-package', function () {
    after(function () {
        sandbox.restore();
        track.cleanupSync();
    });
    it('should print warning if user set unknown target in package.json and use browser as a default value', function () {
        var warn = sandbox.stub(console, 'warn');
        var root = createProjectWithTarget('foo');
        var applicationPackage = new application_package_1.ApplicationPackage({ projectPath: root });
        assert.equal(applicationPackage.target, application_props_1.ApplicationProps.ApplicationTarget.browser);
        assert.equal(warn.called, true);
    });
    it('should set target from package.json', function () {
        var target = 'electron';
        var root = createProjectWithTarget(target);
        var applicationPackage = new application_package_1.ApplicationPackage({ projectPath: root });
        assert.equal(applicationPackage.target, target);
    });
    it('should prefer target from passed options over target from package.json', function () {
        var pckTarget = 'electron';
        var optTarget = 'browser';
        var root = createProjectWithTarget(pckTarget);
        var applicationPackage = new application_package_1.ApplicationPackage({ projectPath: root, appTarget: optTarget });
        assert.equal(applicationPackage.target, optTarget);
    });
    function createProjectWithTarget(target) {
        var root = track.mkdirSync('foo-project');
        fs.writeFileSync(path.join(root, 'package.json'), "{\"theia\": {\"target\": \"" + target + "\"}}");
        return root;
    }
});
//# sourceMappingURL=application-package.spec.js.map