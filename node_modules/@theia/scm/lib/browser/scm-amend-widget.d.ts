/********************************************************************************
 * Copyright (C) 2020 Arm and others.
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
import { SelectionService } from '@theia/core/lib/common';
import * as React from 'react';
import { ContextMenuRenderer, ReactWidget, LabelProvider, KeybindingRegistry, StorageService } from '@theia/core/lib/browser';
import { ScmService } from './scm-service';
import { ScmAvatarService } from './scm-avatar-service';
export declare class ScmAmendWidget extends ReactWidget {
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    static ID: string;
    protected readonly scmService: ScmService;
    protected readonly avatarService: ScmAvatarService;
    protected readonly storageService: StorageService;
    protected readonly selectionService: SelectionService;
    protected readonly labelProvider: LabelProvider;
    protected readonly keybindings: KeybindingRegistry;
    protected shouldScrollToRow: boolean;
    constructor(contextMenuRenderer: ContextMenuRenderer);
    protected render(): React.ReactNode;
    protected setInputValue: (event: React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement> | string) => void;
}
//# sourceMappingURL=scm-amend-widget.d.ts.map