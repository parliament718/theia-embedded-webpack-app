/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
import { Emitter, Disposable } from '@theia/core';
import { Git } from '../../common';
import { ScmHistorySupport, HistoryWidgetOptions } from '@theia/scm-extra/lib/browser/history/scm-history-widget';
import { ScmHistoryCommit } from '@theia/scm-extra/lib/browser/scm-file-change-node';
import { GitScmProvider } from '../git-scm-provider';
import { GitRepositoryTracker } from '../git-repository-tracker';
export declare class GitHistorySupport implements ScmHistorySupport {
    protected readonly provider: GitScmProvider;
    protected readonly git: Git;
    protected readonly repositoryTracker: GitRepositoryTracker;
    getCommitHistory(options?: HistoryWidgetOptions): Promise<ScmHistoryCommit[]>;
    protected readonly onDidChangeHistoryEmitter: Emitter<void>;
    readonly onDidChangeHistory: import("@theia/core").Event<void>;
    protected onGitEventDisposable: Disposable | undefined;
    protected onFirstListenerAdd(): void;
    protected onLastListenerRemove(): void;
}
//# sourceMappingURL=git-history-support.d.ts.map