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
import { TabBar, Widget, Title } from '@phosphor/widgets';
import { Message, ContextMenuRenderer, LabelProvider } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { FileStat } from '@theia/filesystem/lib/common';
import { PreferencesEventService } from '../util/preference-event-service';
import { PreferenceScopeCommandManager } from '../util/preference-scope-command-manager';
import { Preference } from '../util/preference-types';
export declare class PreferencesScopeTabBar extends TabBar<Widget> {
    static ID: string;
    protected readonly preferencesEventService: PreferencesEventService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly preferencesMenuFactory: PreferenceScopeCommandManager;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly labelProvider: LabelProvider;
    protected folderTitle: Title<Widget>;
    protected currentWorkspaceRoots: FileStat[];
    protected currentSelection: Preference.SelectedScopeDetails;
    protected editorScrollAtTop: boolean;
    protected setNewScopeSelection(newSelection: Preference.SelectedScopeDetails): void;
    protected init(): void;
    protected setupInitialDisplay(): void;
    protected onUpdateRequest(msg: Message): void;
    protected addTabIndexToTabs(): void;
    protected addUserTab(): void;
    protected addWorkspaceTab(): void;
    protected getWorkspaceDataset(): Preference.SelectedScopeDetails;
    protected addOrUpdateFolderTab(): void;
    protected setFolderTitleProperties(multipleFolderRootsAreAvailable: boolean): void;
    protected folderSelectionCallback: (newScope: Preference.SelectedScopeDetails) => void;
    protected getFolderContextMenu(workspaceRoots?: FileStat[]): void;
    handleEvent(e: Event): void;
    protected openContextMenu(tabRect: DOMRect | ClientRect, folderTabNode: HTMLElement, source: 'click' | 'keypress'): void;
    protected doUpdateDisplay(newRoots: FileStat[]): void;
    protected updateWorkspaceTab(): void;
    protected emitNewScope(): void;
}
//# sourceMappingURL=preference-scope-tabbar-widget.d.ts.map