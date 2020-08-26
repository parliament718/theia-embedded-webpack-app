/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { TreeDataProvider, TreeView, TreeViewExpansionEvent, TreeViewSelectionChangeEvent, TreeViewVisibilityChangeEvent } from '@theia/plugin';
import { Disposable } from '@theia/core/lib/common/disposable';
import { Disposable as PluginDisposable } from '../types-impl';
import { Plugin, TreeViewsExt, TreeViewsMain, TreeViewItem, TreeViewRevealOptions } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { CommandRegistryImpl, CommandsConverter } from '../command-registry';
export declare class TreeViewsExtImpl implements TreeViewsExt {
    readonly commandRegistry: CommandRegistryImpl;
    private proxy;
    private readonly treeViews;
    constructor(rpc: RPCProtocol, commandRegistry: CommandRegistryImpl);
    registerTreeDataProvider<T>(plugin: Plugin, treeViewId: string, treeDataProvider: TreeDataProvider<T>): PluginDisposable;
    createTreeView<T>(plugin: Plugin, treeViewId: string, options: {
        treeDataProvider: TreeDataProvider<T>;
    }): TreeView<T>;
    $getChildren(treeViewId: string, treeItemId: string): Promise<TreeViewItem[] | undefined>;
    $setExpanded(treeViewId: string, treeItemId: string, expanded: boolean): Promise<any>;
    $setSelection(treeViewId: string, treeItemIds: string[]): Promise<void>;
    $setVisible(treeViewId: string, isVisible: boolean): Promise<void>;
    protected getTreeView(treeViewId: string): TreeViewExtImpl<any>;
}
declare class TreeViewExtImpl<T> implements Disposable {
    private plugin;
    private treeViewId;
    private treeDataProvider;
    private proxy;
    readonly commandsConverter: CommandsConverter;
    private readonly onDidExpandElementEmitter;
    readonly onDidExpandElement: import("@theia/core/lib/common/event").Event<TreeViewExpansionEvent<T>>;
    private readonly onDidCollapseElementEmitter;
    readonly onDidCollapseElement: import("@theia/core/lib/common/event").Event<TreeViewExpansionEvent<T>>;
    private readonly onDidChangeSelectionEmitter;
    readonly onDidChangeSelection: import("@theia/core/lib/common/event").Event<TreeViewSelectionChangeEvent<T>>;
    private readonly onDidChangeVisibilityEmitter;
    readonly onDidChangeVisibility: import("@theia/core/lib/common/event").Event<TreeViewVisibilityChangeEvent>;
    private readonly nodes;
    private pendingRefresh;
    private readonly toDispose;
    constructor(plugin: Plugin, treeViewId: string, treeDataProvider: TreeDataProvider<T>, proxy: TreeViewsMain, commandsConverter: CommandsConverter);
    dispose(): void;
    reveal(element: T, options?: Partial<TreeViewRevealOptions>): Promise<void>;
    private _message;
    get message(): string;
    set message(message: string);
    private _title;
    get title(): string;
    set title(title: string);
    getTreeItem(treeItemId: string): T | undefined;
    getChildren(parentId: string): Promise<TreeViewItem[] | undefined>;
    private clearChildren;
    private clear;
    private clearAll;
    onExpanded(treeItemId: string): Promise<any>;
    onCollapsed(treeItemId: string): Promise<any>;
    private selectedItemIds;
    get selectedElements(): T[];
    setSelection(selectedItemIds: string[]): void;
    protected doSetSelection(selectedItemIts: string[]): void;
    private _visible;
    get visible(): boolean;
    setVisible(visible: boolean): void;
}
export {};
//# sourceMappingURL=tree-views.d.ts.map