"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindMockPreferenceProviders = exports.MockPreferenceProvider = void 0;
var __1 = require("../");
var preference_scope_1 = require("../preference-scope");
var MockPreferenceProvider = /** @class */ (function (_super) {
    __extends(MockPreferenceProvider, _super);
    function MockPreferenceProvider(scope) {
        var _this = _super.call(this) || this;
        _this.scope = scope;
        _this.prefs = {};
        return _this;
    }
    MockPreferenceProvider.prototype.markReady = function () {
        this._ready.resolve();
    };
    MockPreferenceProvider.prototype.getPreferences = function () {
        return this.prefs;
    };
    MockPreferenceProvider.prototype.setPreference = function (preferenceName, newValue, resourceUri) {
        var oldValue = this.prefs[preferenceName];
        this.prefs[preferenceName] = newValue;
        return this.emitPreferencesChangedEvent([{ preferenceName: preferenceName, oldValue: oldValue, newValue: newValue, scope: this.scope, domain: [] }]);
    };
    return MockPreferenceProvider;
}(__1.PreferenceProvider));
exports.MockPreferenceProvider = MockPreferenceProvider;
function bindMockPreferenceProviders(bind, unbind) {
    unbind(__1.PreferenceProvider);
    bind(__1.PreferenceProvider).toDynamicValue(function (ctx) { return new MockPreferenceProvider(preference_scope_1.PreferenceScope.User); }).inSingletonScope().whenTargetNamed(preference_scope_1.PreferenceScope.User);
    bind(__1.PreferenceProvider).toDynamicValue(function (ctx) { return new MockPreferenceProvider(preference_scope_1.PreferenceScope.Workspace); }).inSingletonScope().whenTargetNamed(preference_scope_1.PreferenceScope.Workspace);
    bind(__1.PreferenceProvider).toDynamicValue(function (ctx) { return new MockPreferenceProvider(preference_scope_1.PreferenceScope.Folder); }).inSingletonScope().whenTargetNamed(preference_scope_1.PreferenceScope.Folder);
}
exports.bindMockPreferenceProviders = bindMockPreferenceProviders;
//# sourceMappingURL=mock-preference-provider.js.map