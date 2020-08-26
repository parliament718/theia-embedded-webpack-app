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
import { Widget } from '@phosphor/widgets';
import { LabelProvider } from '@theia/core/lib/browser';
import { GitFileChange } from '../../common';
import { GitDiffWidget } from '../diff/git-diff-widget';
import { GitRepositoryProvider } from '../git-repository-provider';
import { ScmAvatarService } from '@theia/scm/lib/browser/scm-avatar-service';
import * as React from 'react';
export declare const GitCommitDetailWidgetOptions: unique symbol;
export interface GitCommitDetailWidgetOptions {
    commitSha: string;
    commitMessage: string;
    messageBody?: string;
    authorName: string;
    authorEmail: string;
    authorDate: string;
    authorDateRelative: string;
}
export declare class GitCommitDetailWidget extends GitDiffWidget {
    protected readonly repositoryProvider: GitRepositoryProvider;
    protected readonly labelProvider: LabelProvider;
    protected readonly avatarService: ScmAvatarService;
    protected readonly commitDetailOptions: GitCommitDetailWidgetOptions;
    protected authorAvatar: string;
    constructor(repositoryProvider: GitRepositoryProvider, labelProvider: LabelProvider, avatarService: ScmAvatarService, commitDetailOptions: GitCommitDetailWidgetOptions);
    protected init(): Promise<void>;
    protected renderDiffListHeader(): React.ReactNode;
    protected ref: Widget | undefined;
    protected revealChange(change: GitFileChange): Promise<void>;
}
//# sourceMappingURL=git-commit-detail-widget.d.ts.map