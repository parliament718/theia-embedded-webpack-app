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
import { Message } from '@phosphor/messaging';
import * as React from 'react';
import { ScmInput } from './scm-input';
import { ContextMenuRenderer, ReactWidget, KeybindingRegistry, StatefulWidget } from '@theia/core/lib/browser';
import { ScmService } from './scm-service';
export declare class ScmCommitWidget extends ReactWidget implements StatefulWidget {
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    static ID: string;
    protected readonly scmService: ScmService;
    protected readonly keybindings: KeybindingRegistry;
    protected shouldScrollToRow: boolean;
    /**
     * Don't modify DOM use React! only exposed for `focusInput`
     * Use `this.scmService.selectedRepository?.input.value` as a single source of truth!
     */
    protected readonly inputRef: React.RefObject<HTMLTextAreaElement>;
    constructor(contextMenuRenderer: ContextMenuRenderer);
    protected onActivateRequest(msg: Message): void;
    focus(): void;
    protected render(): React.ReactNode;
    /**
     * Create the container attributes for the widget.
     */
    protected createContainerAttributes(): React.HTMLAttributes<HTMLElement>;
    protected renderInput(input: ScmInput): React.ReactNode;
    protected setInputValue: (event: React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement> | string) => void;
    /**
     * Store the tree state.
     */
    storeState(): ScmCommitWidget.State;
    /**
     * Restore the state.
     * @param oldState the old state object.
     */
    restoreState(oldState: ScmCommitWidget.State): void;
}
export declare namespace ScmCommitWidget {
    namespace Styles {
        const INPUT_MESSAGE_CONTAINER = "theia-scm-input-message-container";
        const INPUT_MESSAGE = "theia-scm-input-message";
        const VALIDATION_MESSAGE = "theia-scm-input-validation-message";
        const NO_SELECT = "no-select";
    }
    interface State {
        message?: string;
    }
}
//# sourceMappingURL=scm-commit-widget.d.ts.map