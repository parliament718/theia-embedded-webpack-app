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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceTreeGenerator = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var PreferenceTreeGenerator = /** @class */ (function () {
    function PreferenceTreeGenerator() {
        var _this = this;
        this.createRootNode = function (preferencesGroups) { return ({
            id: 'root-node-id',
            name: '',
            parent: undefined,
            visible: true,
            children: preferencesGroups
        }); };
        this.createLeafNode = function (property, preferencesGroup) {
            var propertySpecifier = _this.split(property).slice(1);
            var name = propertySpecifier.map(function (word) { return word.slice(0, 1).toLocaleUpperCase() + word.slice(1); }).join(' ').trim();
            return {
                id: property,
                name: name,
                parent: preferencesGroup,
                visible: true,
                selected: false,
            };
        };
        this.createPreferencesGroup = function (group, root) {
            var isSubgroup = 'expanded' in root;
            var _a = __read(group.split('.'), 2), groupname = _a[0], subgroupname = _a[1];
            var label = isSubgroup ? subgroupname : groupname;
            var newNode = {
                id: group + "-id",
                name: _this.toTitleCase(label),
                visible: true,
                parent: root,
                children: [],
                leaves: [],
                expanded: false,
                selected: false,
            };
            return newNode;
        };
    }
    PreferenceTreeGenerator.prototype.generateTree = function () {
        var e_1, _a;
        var preferencesSchema = this.schemaProvider.getCombinedSchema();
        var propertyNames = Object.keys(preferencesSchema.properties).sort(function (a, b) { return a.localeCompare(b); });
        var preferencesGroups = [];
        var groups = new Map();
        var propertyPattern = Object.keys(preferencesSchema.patternProperties)[0]; // TODO: there may be a better way to get this data.
        var overridePropertyIdentifier = new RegExp(propertyPattern, 'i');
        var root = this.createRootNode(preferencesGroups);
        try {
            for (var propertyNames_1 = __values(propertyNames), propertyNames_1_1 = propertyNames_1.next(); !propertyNames_1_1.done; propertyNames_1_1 = propertyNames_1.next()) {
                var propertyName = propertyNames_1_1.value;
                if (!this.preferenceConfigs.isSectionName(propertyName) && !overridePropertyIdentifier.test(propertyName)) {
                    var labels = propertyName.split('.');
                    var group = labels[0];
                    var subgroup = labels.length > 2 && labels.slice(0, 2).join('.');
                    if (!groups.has(group)) {
                        var parentPreferencesGroup = this.createPreferencesGroup(group, root);
                        groups.set(group, parentPreferencesGroup);
                        preferencesGroups.push(parentPreferencesGroup);
                    }
                    if (subgroup && !groups.has(subgroup)) {
                        var remoteParent = groups.get(group);
                        var newBranch = this.createPreferencesGroup(subgroup, remoteParent);
                        groups.set(subgroup, newBranch);
                        browser_1.CompositeTreeNode.addChild(remoteParent, newBranch);
                    }
                    var parent_1 = groups.get(subgroup || group);
                    var leafNode = this.createLeafNode(propertyName, parent_1);
                    parent_1.leaves.push(leafNode);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (propertyNames_1_1 && !propertyNames_1_1.done && (_a = propertyNames_1.return)) _a.call(propertyNames_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return root;
    };
    ;
    PreferenceTreeGenerator.prototype.toTitleCase = function (nonTitle) {
        var _this = this;
        // Any non-word character or the 0-length space between a non-upper-case character and an upper-case character
        return this.split(nonTitle).map(function (word) { return _this.capitalizeFirst(word); }).join(' ').trim();
    };
    PreferenceTreeGenerator.prototype.capitalizeFirst = function (maybeLowerCase) {
        return maybeLowerCase.slice(0, 1).toLocaleUpperCase() + maybeLowerCase.slice(1);
    };
    /**
     * Split based on any non-word character or the 0-length space between a non-upper-case character and an upper-case character
     */
    PreferenceTreeGenerator.prototype.split = function (string) {
        var split = [];
        var regex = /[A-Z]+[a-z0-9]*|[A-Z]*[a-z0-9]+/g;
        // eslint-disable-next-line no-null/no-null
        var match;
        while ((match = regex.exec(string)) !== null) {
            split.push(match[0]);
        }
        return split;
    };
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], PreferenceTreeGenerator.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferenceTreeGenerator.prototype, "preferenceConfigs", void 0);
    PreferenceTreeGenerator = __decorate([
        inversify_1.injectable()
    ], PreferenceTreeGenerator);
    return PreferenceTreeGenerator;
}());
exports.PreferenceTreeGenerator = PreferenceTreeGenerator;
//# sourceMappingURL=preference-tree-generator.js.map