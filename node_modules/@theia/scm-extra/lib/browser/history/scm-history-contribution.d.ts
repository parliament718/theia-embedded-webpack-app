/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { MenuModelRegistry, CommandRegistry, Command, SelectionService } from '@theia/core';
import { AbstractViewContribution, OpenViewArguments } from '@theia/core/lib/browser';
import { UriCommandHandler, UriAwareCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import URI from '@theia/core/lib/common/uri';
import { ScmHistoryWidget } from './scm-history-widget';
import { ScmService } from '@theia/scm/lib/browser/scm-service';
export declare const SCM_HISTORY_ID = "scm-history";
export declare const SCM_HISTORY_LABEL = "History";
export declare const SCM_HISTORY_TOGGLE_KEYBINDING = "alt+h";
export declare const SCM_HISTORY_MAX_COUNT = 100;
export declare namespace ScmHistoryCommands {
    const OPEN_FILE_HISTORY: Command;
    const OPEN_BRANCH_HISTORY: Command;
}
export interface ScmHistoryOpenViewArguments extends OpenViewArguments {
    uri: string | undefined;
}
export declare class ScmHistoryContribution extends AbstractViewContribution<ScmHistoryWidget> {
    protected readonly selectionService: SelectionService;
    protected readonly scmService: ScmService;
    constructor();
    openView(args?: Partial<ScmHistoryOpenViewArguments>): Promise<ScmHistoryWidget>;
    registerMenus(menus: MenuModelRegistry): void;
    registerCommands(commands: CommandRegistry): void;
    protected refreshWidget(uri: string | undefined): Promise<void>;
    protected newUriAwareCommandHandler(handler: UriCommandHandler<URI>): UriAwareCommandHandler<URI>;
}
//# sourceMappingURL=scm-history-contribution.d.ts.map