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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var uri_1 = require("@theia/core/lib/common/uri");
var chai_1 = require("chai");
var inversify_1 = require("inversify");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var event_1 = require("@theia/core/lib/common/event");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var marker_manager_1 = require("../marker-manager");
var marker_tree_1 = require("../marker-tree");
var problem_container_1 = require("./problem-container");
var problem_manager_1 = require("./problem-manager");
var problem_tree_model_1 = require("./problem-tree-model");
disableJSDOM();
var problemTree;
before(function () {
    disableJSDOM = jsdom_1.enableJSDOM();
    var testContainer = new inversify_1.Container();
    testContainer.bind(marker_manager_1.MarkerManager).toSelf().inSingletonScope();
    testContainer.bind(problem_manager_1.ProblemManager).toSelf();
    testContainer.bind(marker_tree_1.MarkerOptions).toConstantValue(problem_container_1.PROBLEM_OPTIONS);
    testContainer.bind(filesystem_watcher_1.FileSystemWatcher).toConstantValue({
        onFilesChanged: event_1.Event.None
    });
    testContainer.bind(problem_tree_model_1.ProblemTree).toSelf().inSingletonScope();
    problemTree = testContainer.get(problem_tree_model_1.ProblemTree);
});
after(function () {
    disableJSDOM();
});
describe('Problem Tree', function () {
    describe('#sortMarkers', function () {
        describe('should sort markers based on the highest severity', function () {
            it('should sort errors higher than warnings', function () {
                var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
                var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Warning);
                var nodeA = createMockMarkerNode(markerA);
                var nodeB = createMockMarkerNode(markerB);
                chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-1);
                chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(1);
            });
            it('should sort errors higher than infos', function () {
                var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
                var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Information);
                var nodeA = createMockMarkerNode(markerA);
                var nodeB = createMockMarkerNode(markerB);
                chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-2);
                chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(2);
            });
            it('should sort errors higher than hints', function () {
                var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
                var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Hint);
                var nodeA = createMockMarkerNode(markerA);
                var nodeB = createMockMarkerNode(markerB);
                chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-3);
                chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(3);
            });
            it('should sort warnings higher than infos', function () {
                var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Warning);
                var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Information);
                var nodeA = createMockMarkerNode(markerA);
                var nodeB = createMockMarkerNode(markerB);
                chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-1);
                chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(1);
            });
            it('should sort warnings higher than hints', function () {
                var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Warning);
                var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Hint);
                var nodeA = createMockMarkerNode(markerA);
                var nodeB = createMockMarkerNode(markerB);
                chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-2);
                chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(2);
            });
            it('should sort infos higher than hints', function () {
                var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Information);
                var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Hint);
                var nodeA = createMockMarkerNode(markerA);
                var nodeB = createMockMarkerNode(markerB);
                chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-1);
                chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(1);
            });
        });
        it('should sort markers based on lowest line number if their severities are equal', function () {
            var markerA = createMockMarker({ start: { line: 1, character: 10 }, end: { line: 1, character: 20 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
            var markerB = createMockMarker({ start: { line: 5, character: 10 }, end: { line: 5, character: 20 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
            var nodeA = createMockMarkerNode(markerA);
            var nodeB = createMockMarkerNode(markerB);
            chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-4);
            chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(4);
        });
        it('should sort markers based on lowest column number if their severities and line numbers are equal', function () {
            var markerA = createMockMarker({ start: { line: 1, character: 10 }, end: { line: 1, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
            var markerB = createMockMarker({ start: { line: 1, character: 20 }, end: { line: 1, character: 20 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
            var nodeA = createMockMarkerNode(markerA);
            var nodeB = createMockMarkerNode(markerB);
            chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(-10);
            chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(10);
        });
        it('should not sort if markers are equal', function () {
            var markerA = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
            var markerB = createMockMarker({ start: { line: 0, character: 10 }, end: { line: 0, character: 10 } }, vscode_languageserver_types_1.DiagnosticSeverity.Error);
            var nodeA = createMockMarkerNode(markerA);
            var nodeB = createMockMarkerNode(markerB);
            chai_1.expect(problemTree['sortMarkers'](nodeA, nodeB)).equals(0);
            chai_1.expect(problemTree['sortMarkers'](nodeB, nodeA)).equals(0);
        });
    });
});
/**
 * Create a mock marker node with the given diagnostic marker.
 * @param marker the diagnostic marker.
 *
 * @returns a mock marker node.
 */
function createMockMarkerNode(marker) {
    return {
        id: 'id',
        name: 'marker',
        parent: undefined,
        selected: false,
        uri: new uri_1.default(''),
        marker: marker
    };
}
/**
 * Create a mock diagnostic marker.
 * @param range the diagnostic range.
 * @param severity the diagnostic severity.
 *
 * @returns a mock diagnostic marker.
 */
function createMockMarker(range, severity) {
    var data = {
        range: range,
        severity: severity,
        message: 'message'
    };
    return Object.freeze({
        uri: name,
        kind: 'marker',
        owner: 'owner',
        data: data
    });
}
//# sourceMappingURL=problem-tree-model.spec.js.map