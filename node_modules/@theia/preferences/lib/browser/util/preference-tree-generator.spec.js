"use strict";
/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var inversify_1 = require("inversify");
var preference_tree_generator_1 = require("./preference-tree-generator");
var browser_1 = require("@theia/core/lib/browser");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
disableJSDOM();
describe('preference-tree-generator', function () {
    var preferenceTreeGenerator;
    beforeEach(function () {
        var container = new inversify_1.Container();
        container.bind(browser_1.PreferenceSchemaProvider).toConstantValue(undefined);
        container.bind(preference_configurations_1.PreferenceConfigurations).toConstantValue(undefined);
        preferenceTreeGenerator = container.resolve(preference_tree_generator_1.PreferenceTreeGenerator);
    });
    it('PreferenceTreeGenerator.split', function () {
        // We want to ensure that our `split` function emulates the following regex properly:
        var splitter = /[\W_]|(?<=[^A-Z])(?=[A-Z])/;
        var testString = 'aaaBbb.Ccc d E fff GGGgg_iiiJ0a';
        chai_1.expect(preferenceTreeGenerator['split'](testString)).deep.eq(testString.split(splitter));
    });
});
//# sourceMappingURL=preference-tree-generator.spec.js.map