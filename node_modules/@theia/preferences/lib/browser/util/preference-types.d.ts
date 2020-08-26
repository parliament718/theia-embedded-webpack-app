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
import { PreferenceDataProperty, SelectableTreeNode, PreferenceItem, Title, TreeNode, CompositeTreeNode, ExpandableTreeNode } from '@theia/core/lib/browser';
import { Command, MenuPath } from '@theia/core';
export declare namespace Preference {
    interface MaximalTree extends SelectableTreeNode, ExpandableTreeNode {
        leaves: TreeExtension[];
    }
    export type TreeExtension = TreeNode & {
        expanded?: MaximalTree['expanded'];
        selected?: MaximalTree['selected'];
        focus?: MaximalTree['focus'];
        children?: MaximalTree['children'];
        leaves?: MaximalTree['leaves'];
    };
    export interface Branch extends CompositeTreeNode {
        leaves: TreeExtension[];
    }
    export namespace Branch {
        function is(node: TreeNode | Branch): node is Branch;
    }
    export interface ValueInSingleScope {
        value?: PreferenceItem;
        data: PreferenceDataProperty;
    }
    export interface NodeWithValueInSingleScope extends SelectableTreeNode {
        preference: ValueInSingleScope;
    }
    export interface ValuesInAllScopes {
        preferenceName: string;
        defaultValue: PreferenceItem | undefined;
        globalValue: PreferenceItem | undefined;
        workspaceValue: PreferenceItem | undefined;
        workspaceFolderValue: PreferenceItem | undefined;
    }
    export interface PreferenceWithValueInAllScopes {
        values?: ValuesInAllScopes;
        data: PreferenceDataProperty;
    }
    export interface EditorCommandArgs {
        id: string;
        value: string | undefined;
    }
    export namespace EditorCommandArgs {
        function is(prefObject: EditorCommandArgs): prefObject is EditorCommandArgs;
    }
    export interface NodeWithValueInAllScopes extends SelectableTreeNode {
        preference: PreferenceWithValueInAllScopes;
    }
    export enum LookupKeys {
        defaultValue = 0,
        globalValue = 1,
        workspaceValue = 2,
        workspaceFolderValue = 3
    }
    export interface SelectedScopeDetails extends Title.Dataset {
        scope: string;
        uri: string;
        activeScopeIsFolder: string;
    }
    export const DEFAULT_SCOPE: SelectedScopeDetails;
    export interface SearchQuery {
        query: string;
    }
    export interface MouseScrollDetails {
        firstVisibleChildId: string;
        isTop: boolean;
    }
    export interface SelectedTreeNode {
        nodeID: string;
    }
    export interface ContextMenuCallbacks {
        resetCallback(): void;
        copyIDCallback(): void;
        copyJSONCallback(): void;
    }
    export {};
}
export declare namespace PreferencesCommands {
    const OPEN_PREFERENCES_JSON_TOOLBAR: Command;
    const COPY_JSON_NAME: Command;
    const RESET_PREFERENCE: Command;
    const COPY_JSON_VALUE: Command;
}
export declare namespace PreferenceMenus {
    const PREFERENCE_EDITOR_CONTEXT_MENU: MenuPath;
    const PREFERENCE_EDITOR_COPY_ACTIONS: MenuPath;
}
//# sourceMappingURL=preference-types.d.ts.map