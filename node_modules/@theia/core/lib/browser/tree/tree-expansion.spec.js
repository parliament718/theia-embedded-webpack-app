"use strict";
/********************************************************************************
 * Copyright (C) 2019 Thomas Drosdzoll.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var mock_tree_model_1 = require("./test/mock-tree-model");
var tree_model_1 = require("./tree-model");
var tree_1 = require("./tree");
var tree_test_container_1 = require("./test/tree-test-container");
var promise_util_1 = require("../../common/promise-util");
/* eslint-disable no-unused-expressions */
describe('TreeExpansionService', function () {
    var model;
    beforeEach(function () {
        model = createTreeModel();
        model.root = mock_tree_model_1.MockTreeModel.HIERARCHICAL_MOCK_ROOT();
    });
    describe('expandNode', function () {
        it("won't expand an already expanded node", function (done) {
            var node = retrieveNode('1');
            model.expandNode(node).then(function (result) {
                chai_1.expect(result).to.be.undefined;
                done();
            });
        });
        it('will expand a collapsed node', function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function () {
                model.expandNode(node).then(function (result) {
                    chai_1.expect(result).to.be.eq(result);
                    done();
                });
            });
        });
        it("won't expand an undefined node", function (done) {
            model.expandNode(undefined).then(function (result) {
                chai_1.expect(result).to.be.undefined;
                done();
            });
        });
    });
    describe('collapseNode', function () {
        it('will collapse an expanded node', function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function (result) {
                chai_1.expect(result).to.be.eq(result);
                done();
            });
        });
        it("won't collapse an already collapsed node", function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function () {
                model.collapseNode(node).then(function (result) {
                    chai_1.expect(result).to.be.false;
                    done();
                });
            });
        });
        it('cannot collapse a leaf node', function (done) {
            var node = retrieveNode('1.1.2');
            model.collapseNode(node).then(function (result) {
                chai_1.expect(result).to.be.false;
                done();
            });
        });
    });
    describe('collapseAll', function () {
        it('will collapse all nodes recursively', function (done) {
            model.collapseAll(retrieveNode('1')).then(function (result) {
                chai_1.expect(result).to.be.eq(result);
                done();
            });
        });
        it("won't collapse nodes recursively if the root node is collapsed already", function (done) {
            model.collapseNode(retrieveNode('1')).then(function () {
                model.collapseAll(retrieveNode('1')).then(function (result) {
                    chai_1.expect(result).to.be.eq(result);
                    done();
                });
            });
        });
    });
    describe('toggleNodeExpansion', function () {
        it('changes the expansion state from expanded to collapsed', function (done) {
            var node = retrieveNode('1');
            model.onExpansionChanged(function (e) {
                chai_1.expect(e).to.be.equal(node);
                chai_1.expect(e.expanded).to.be.false;
            });
            model.toggleNodeExpansion(node).then(function () {
                done();
            });
        });
        it('changes the expansion state from collapsed to expanded', function (done) {
            var node = retrieveNode('1');
            model.collapseNode(node).then(function () {
            });
            model.onExpansionChanged(function (e) {
                chai_1.expect(e).to.be.equal(node);
                chai_1.expect(e.expanded).to.be.true;
            });
            model.toggleNodeExpansion(node).then(function () {
                done();
            });
        });
    });
    it('node should be refreshed on expansion', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, root, treeModel, expanding;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = tree_test_container_1.createTreeTestContainer();
                    container.rebind(tree_1.Tree).to(/** @class */ (function (_super) {
                        __extends(class_1, _super);
                        function class_1() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        class_1.prototype.resolveChildren = function (parent) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, promise_util_1.timeout(200)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, [{
                                                        id: 'child',
                                                        parent: parent
                                                    }]];
                                    }
                                });
                            });
                        };
                        return class_1;
                    }(tree_1.TreeImpl)));
                    root = {
                        id: 'parent',
                        parent: undefined,
                        children: [],
                        expanded: false
                    };
                    treeModel = container.get(tree_model_1.TreeModel);
                    treeModel.root = root;
                    chai_1.assert.isFalse(root.expanded, 'before');
                    chai_1.assert.equal(root.children.length, 0, 'before');
                    expanding = treeModel.expandNode(root);
                    chai_1.assert.isFalse(root.expanded, 'between');
                    chai_1.assert.equal(root.children.length, 0, 'between');
                    return [4 /*yield*/, expanding];
                case 1:
                    _a.sent();
                    chai_1.assert.isTrue(root.expanded, 'after');
                    chai_1.assert.equal(root.children.length, 1, 'after');
                    return [2 /*return*/];
            }
        });
    }); });
    function createTreeModel() {
        var container = tree_test_container_1.createTreeTestContainer();
        return container.get(tree_model_1.TreeModel);
    }
    function retrieveNode(id) {
        var readonlyNode = model.getNode(id);
        return readonlyNode;
    }
});
//# sourceMappingURL=tree-expansion.spec.js.map