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
import { LabelProvider } from '@theia/core/lib/browser';
import { FileStat } from '@theia/filesystem/lib/common';
import { CommandRegistry, MenuModelRegistry, Command } from '@theia/core/lib/common';
export declare const FOLDER_SCOPE_MENU_PATH: string[];
export declare class PreferenceScopeCommandManager {
    protected readonly commandRegistry: CommandRegistry;
    protected readonly menuModelRegistry: MenuModelRegistry;
    protected readonly labelProvider: LabelProvider;
    protected foldersAsCommands: Command[];
    createFolderWorkspacesMenu(folderWorkspaces: FileStat[], currentFolderURI: string): void;
}
//# sourceMappingURL=preference-scope-command-manager.d.ts.map