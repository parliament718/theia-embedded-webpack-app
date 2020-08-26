/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { Message } from '@phosphor/messaging';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { BaseWidget, StatefulWidget, Panel, PanelLayout } from '@theia/core/lib/browser';
import { ScmCommitWidget } from './scm-commit-widget';
import { ScmAmendWidget } from './scm-amend-widget';
import { ScmNoRepositoryWidget } from './scm-no-repository-widget';
import { ScmService } from './scm-service';
import { ScmTreeWidget } from './scm-tree-widget';
import { ScmPreferences } from './scm-preferences';
export declare class ScmWidget extends BaseWidget implements StatefulWidget {
    protected panel: Panel;
    static ID: string;
    protected readonly scmService: ScmService;
    protected readonly commitWidget: ScmCommitWidget;
    protected readonly resourceWidget: ScmTreeWidget;
    protected readonly amendWidget: ScmAmendWidget;
    protected readonly noRepositoryWidget: ScmNoRepositoryWidget;
    protected readonly scmPreferences: ScmPreferences;
    set viewMode(mode: 'tree' | 'list');
    get viewMode(): 'tree' | 'list';
    constructor();
    protected init(): void;
    get containerLayout(): PanelLayout;
    /**
     * Updates the view mode based on the preference value.
     * @param preference the view mode preference.
     */
    protected updateViewMode(preference: 'tree' | 'list'): void;
    protected readonly toDisposeOnRefresh: DisposableCollection;
    protected refresh(): void;
    protected updateImmediately(): void;
    protected onUpdateRequest(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected onActivateRequest(msg: Message): void;
    protected focusInput(): void;
    storeState(): any;
    restoreState(oldState: any): void;
}
//# sourceMappingURL=scm-widget.d.ts.map