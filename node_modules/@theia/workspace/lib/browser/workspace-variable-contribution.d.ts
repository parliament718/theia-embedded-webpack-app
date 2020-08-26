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
import URI from '@theia/core/lib/common/uri';
import { FileSystem } from '@theia/filesystem/lib/common';
import { ApplicationShell, NavigatableWidget, WidgetManager } from '@theia/core/lib/browser';
import { VariableContribution, VariableRegistry } from '@theia/variable-resolver/lib/browser';
import { WorkspaceService } from './workspace-service';
export declare class WorkspaceVariableContribution implements VariableContribution {
    protected readonly workspaceService: WorkspaceService;
    protected readonly shell: ApplicationShell;
    protected readonly fileSystem: FileSystem;
    protected readonly widgetManager: WidgetManager;
    protected currentWidget: NavigatableWidget | undefined;
    protected init(): void;
    protected readonly recentlyVisibleIds: string[];
    protected get recentlyVisible(): NavigatableWidget | undefined;
    protected addRecentlyVisible(widget: NavigatableWidget): void;
    protected removeRecentlyVisible(widget: NavigatableWidget): void;
    protected updateCurrentWidget(): void;
    registerVariables(variables: VariableRegistry): void;
    protected registerWorkspaceRootVariables(variables: VariableRegistry): void;
    getWorkspaceRootUri(uri?: URI | undefined): URI | undefined;
    getResourceUri(): URI | undefined;
    getWorkspaceRelativePath(uri: URI, context?: URI): string | undefined;
}
//# sourceMappingURL=workspace-variable-contribution.d.ts.map