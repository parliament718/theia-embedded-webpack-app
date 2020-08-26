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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglePreferenceDisplayFactory = void 0;
var React = require("react");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var preference_types_1 = require("../../util/preference-types");
var preference_event_service_1 = require("../../util/preference-event-service");
var preference_scope_command_manager_1 = require("../../util/preference-scope-command-manager");
var single_preference_wrapper_1 = require("./single-preference-wrapper");
var SinglePreferenceDisplayFactory = /** @class */ (function () {
    function SinglePreferenceDisplayFactory() {
        var _this = this;
        this.currentScope = preference_types_1.Preference.DEFAULT_SCOPE;
        this.openJSON = function (preferenceNode) {
            _this.commandService.executeCommand(preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR.id, preferenceNode);
        };
    }
    SinglePreferenceDisplayFactory.prototype.init = function () {
        var _this = this;
        this.preferencesEventService.onTabScopeSelected.event(function (e) { return _this.currentScope = e; });
    };
    SinglePreferenceDisplayFactory.prototype.render = function (preferenceNode) {
        return React.createElement(single_preference_wrapper_1.SinglePreferenceWrapper, { contextMenuRenderer: this.contextMenuRenderer, preferenceDisplayNode: preferenceNode, currentScope: Number(this.currentScope.scope), currentScopeURI: this.currentScope.uri, key: preferenceNode.id + "-editor", preferencesService: this.preferenceValueRetrievalService, openJSON: this.openJSON });
    };
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], SinglePreferenceDisplayFactory.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], SinglePreferenceDisplayFactory.prototype, "preferenceValueRetrievalService", void 0);
    __decorate([
        inversify_1.inject(preference_scope_command_manager_1.PreferenceScopeCommandManager),
        __metadata("design:type", preference_scope_command_manager_1.PreferenceScopeCommandManager)
    ], SinglePreferenceDisplayFactory.prototype, "preferencesMenuFactory", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandService),
        __metadata("design:type", Object)
    ], SinglePreferenceDisplayFactory.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", browser_1.ContextMenuRenderer)
    ], SinglePreferenceDisplayFactory.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SinglePreferenceDisplayFactory.prototype, "init", null);
    SinglePreferenceDisplayFactory = __decorate([
        inversify_1.injectable()
    ], SinglePreferenceDisplayFactory);
    return SinglePreferenceDisplayFactory;
}());
exports.SinglePreferenceDisplayFactory = SinglePreferenceDisplayFactory;
//# sourceMappingURL=single-preference-display-factory.js.map