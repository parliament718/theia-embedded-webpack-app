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
var common_1 = require("@theia/core/lib/common");
var common_2 = require("@theia/filesystem/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var marker_tree_label_provider_1 = require("./marker-tree-label-provider");
var signaling_1 = require("@phosphor/signaling");
var tree_label_provider_1 = require("@theia/core/lib/browser/tree/tree-label-provider");
var browser_2 = require("@theia/workspace/lib/browser");
var workspace_uri_contribution_1 = require("@theia/workspace/lib/browser/workspace-uri-contribution");
var workspace_variable_contribution_1 = require("@theia/workspace/lib/browser/workspace-variable-contribution");
var mock_filesystem_1 = require("@theia/filesystem/lib/common/test/mock-filesystem");
disableJSDOM();
var markerTreeLabelProvider;
var workspaceService;
before(function () {
    disableJSDOM = jsdom_1.enableJSDOM();
    var testContainer = new inversify_1.Container();
    workspaceService = new browser_2.WorkspaceService();
    testContainer.bind(browser_2.WorkspaceService).toConstantValue(workspaceService);
    testContainer.bind(workspace_variable_contribution_1.WorkspaceVariableContribution).toSelf().inSingletonScope();
    testContainer.bind(browser_1.ApplicationShell).toConstantValue({
        currentChanged: new signaling_1.Signal({}),
        widgets: function () { return []; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    });
    testContainer.bind(browser_1.WidgetManager).toConstantValue({
        onDidCreateWidget: common_1.Event.None
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    });
    testContainer.bind(common_2.FileSystem).to(mock_filesystem_1.MockFilesystem).inSingletonScope();
    testContainer.bind(browser_1.DefaultUriLabelProviderContribution).toSelf().inSingletonScope();
    testContainer.bind(workspace_uri_contribution_1.WorkspaceUriLabelProviderContribution).toSelf().inSingletonScope();
    testContainer.bind(browser_1.LabelProvider).toSelf().inSingletonScope();
    testContainer.bind(marker_tree_label_provider_1.MarkerTreeLabelProvider).toSelf().inSingletonScope();
    testContainer.bind(tree_label_provider_1.TreeLabelProvider).toSelf().inSingletonScope();
    testContainer.bind(common_1.ContributionProvider).toDynamicValue(function (ctx) { return ({
        getContributions: function () {
            return [
                ctx.container.get(marker_tree_label_provider_1.MarkerTreeLabelProvider),
                ctx.container.get(tree_label_provider_1.TreeLabelProvider),
                ctx.container.get(workspace_uri_contribution_1.WorkspaceUriLabelProviderContribution),
                ctx.container.get(browser_1.DefaultUriLabelProviderContribution)
            ];
        }
    }); }).inSingletonScope();
    markerTreeLabelProvider = testContainer.get(marker_tree_label_provider_1.MarkerTreeLabelProvider);
    workspaceService = testContainer.get(browser_2.WorkspaceService);
});
after(function () {
    disableJSDOM();
});
describe('Marker Tree Label Provider', function () {
    describe('#getName', function () {
        it('should return the correct filename and extension', function () {
            var label = markerTreeLabelProvider.getName(createMarkerInfoNode('a/b/c/foo.ts'));
            chai_1.expect(label).equals('foo.ts');
        });
    });
    describe('getLongName', function () {
        describe('single-root workspace', function () {
            beforeEach(function () {
                var root = {
                    uri: 'file:///home/a',
                    lastModification: 0,
                    isDirectory: true
                };
                workspaceService['_workspace'] = root;
                workspaceService['_roots'] = [root];
            });
            it('should return the proper label for a directory', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///home/a/b/c/foo.ts'));
                chai_1.expect(label).equals('b/c');
            });
            it('should return the proper label for a directory starting with \'.\'', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///home/a/b/.c/foo.ts'));
                chai_1.expect(label).equals('b/.c');
            });
            it('should return the proper label when the resource is located at the workspace root', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///home/a/foo.ts'));
                chai_1.expect(label).equals('');
            });
            it('should return the full path when the resource does not exist in the workspace root', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///home/b/foo.ts'));
                chai_1.expect(label).equals('/home/b');
            });
        });
        describe('multi-root workspace', function () {
            beforeEach(function () {
                var uri = 'file:///file';
                var file = {
                    uri: uri,
                    lastModification: 0,
                    isDirectory: false
                };
                var root1 = {
                    uri: 'file:///root1',
                    lastModification: 0,
                    isDirectory: true
                };
                var root2 = {
                    uri: 'file:///root2',
                    lastModification: 0,
                    isDirectory: true
                };
                workspaceService['_workspace'] = file;
                workspaceService['_roots'] = [root1, root2];
            });
            it('should return the proper root \'root1\' and directory', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///root1/foo/foo.ts'));
                chai_1.expect(label).equals('root1 ● foo');
            });
            it('should return the proper root \'root2\' and directory', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///root2/foo/foo.ts'));
                chai_1.expect(label).equals('root2 ● foo');
            });
            it('should only return the root when the resource is located at the workspace root', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///root1/foo.ts'));
                chai_1.expect(label).equals('root1');
            });
            it('should return the full path when the resource does not exist in any workspace root', function () {
                var label = markerTreeLabelProvider.getLongName(createMarkerInfoNode('file:///home/a/b/foo.ts'));
                chai_1.expect(label).equals('/home/a/b');
            });
        });
    });
    describe('#getIcon', function () {
        it('should return a typescript icon for a typescript file', function () {
            var icon = markerTreeLabelProvider.getIcon(createMarkerInfoNode('a/b/c/foo.ts'));
            chai_1.expect(icon).contain('ts-icon');
        });
        it('should return a json icon for a json file', function () {
            var icon = markerTreeLabelProvider.getIcon(createMarkerInfoNode('a/b/c/foo.json'));
            chai_1.expect(icon).contain('database-icon');
        });
        it('should return a generic icon for a file with no extension', function () {
            var icon = markerTreeLabelProvider.getIcon(createMarkerInfoNode('a/b/c/foo.md'));
            chai_1.expect(icon).contain('markdown-icon');
        });
    });
    describe('#getDescription', function () {
        beforeEach(function () {
            var root = {
                uri: 'file:///home/a',
                lastModification: 0,
                isDirectory: true
            };
            workspaceService['_workspace'] = root;
            workspaceService['_roots'] = [root];
        });
        it('should return the parent\' long name', function () {
            var label = markerTreeLabelProvider.getDescription(createMarkerInfoNode('file:///home/a/b/c/foo.ts'));
            chai_1.expect(label).equals('b/c');
        });
    });
    describe('#canHandle', function () {
        it('should successfully handle \'MarkerInfoNodes\'', function () {
            var node = createMarkerInfoNode('a/b/c/foo.ts');
            chai_1.expect(markerTreeLabelProvider.canHandle(node)).greaterThan(0);
        });
    });
});
/**
 * Create a marker info node for test purposes.
 * @param uri the marker uri.
 *
 * @returns a mock marker info node.
 */
function createMarkerInfoNode(uri) {
    return {
        id: 'id',
        parent: {
            id: 'parent-id',
            kind: '',
            parent: undefined,
            children: []
        },
        numberOfMarkers: 1,
        children: [],
        expanded: true,
        selected: true,
        uri: new uri_1.default(uri)
    };
}
//# sourceMappingURL=marker-tree-label-provider.spec.js.map