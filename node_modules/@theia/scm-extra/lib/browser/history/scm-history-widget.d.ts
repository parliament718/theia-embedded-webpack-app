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
import { Event as TheiaEvent, DisposableCollection } from '@theia/core';
import { OpenerService, StatefulWidget, WidgetManager, ApplicationShell } from '@theia/core/lib/browser';
import { Message } from '@phosphor/messaging';
import { List, ListRowRenderer, IndexRange, ScrollParams, CellMeasurerCache } from 'react-virtualized';
import { ScmService } from '@theia/scm/lib/browser/scm-service';
import { ScmHistoryCommit, ScmFileChange } from '../scm-file-change-node';
import { FileSystem } from '@theia/filesystem/lib/common';
import { ScmAvatarService } from '@theia/scm/lib/browser/scm-avatar-service';
import { ScmFileChangeNode } from '../scm-file-change-node';
import { ScmNavigableListWidget } from '../scm-navigable-list-widget';
import * as React from 'react';
export declare const ScmHistorySupport: unique symbol;
export interface ScmHistorySupport {
    getCommitHistory(options?: HistoryWidgetOptions): Promise<ScmHistoryCommit[]>;
    readonly onDidChangeHistory: TheiaEvent<void>;
}
export interface ScmCommitNode {
    commitDetails: ScmHistoryCommit;
    authorAvatar: string;
    fileChangeNodes: ScmFileChangeNode[];
    expanded: boolean;
    selected: boolean;
}
export declare namespace ScmCommitNode {
    function is(node: any): node is ScmCommitNode;
}
export interface HistoryWidgetOptions {
    readonly range?: {
        readonly toRevision?: string;
        readonly fromRevision?: string;
    };
    readonly uri?: string;
    readonly maxCount?: number;
}
export declare type ScmHistoryListNode = (ScmCommitNode | ScmFileChangeNode);
export declare class ScmHistoryWidget extends ScmNavigableListWidget<ScmHistoryListNode> implements StatefulWidget {
    protected readonly scmService: ScmService;
    protected readonly openerService: OpenerService;
    protected readonly shell: ApplicationShell;
    protected readonly fileSystem: FileSystem;
    protected readonly avatarService: ScmAvatarService;
    protected readonly widgetManager: WidgetManager;
    protected options: HistoryWidgetOptions;
    protected singleFileMode: boolean;
    private cancelIndicator;
    protected listView: ScmHistoryList | undefined;
    protected hasMoreCommits: boolean;
    protected allowScrollToSelected: boolean;
    protected status: {
        state: 'loading';
    } | {
        state: 'ready';
        commits: ScmCommitNode[];
    } | {
        state: 'error';
        errorMessage: React.ReactNode;
    };
    protected readonly toDisposeOnRepositoryChange: DisposableCollection;
    protected historySupport: ScmHistorySupport | undefined;
    constructor(scmService: ScmService, openerService: OpenerService, shell: ApplicationShell, fileSystem: FileSystem, avatarService: ScmAvatarService, widgetManager: WidgetManager);
    protected init(): void;
    protected refreshOnRepositoryChange(): void;
    protected readonly toDisposeOnRefresh: DisposableCollection;
    protected refresh(): void;
    protected onAfterAttach(msg: Message): void;
    update(): void;
    setContent(options?: HistoryWidgetOptions): Promise<void>;
    protected resetState(options?: HistoryWidgetOptions): void;
    protected addCommits(options?: HistoryWidgetOptions): Promise<void>;
    protected addOrRemoveFileChangeNodes(commit: ScmCommitNode): Promise<void>;
    protected addFileChangeNodes(commit: ScmCommitNode, scmNodesArrayIndex: number): Promise<void>;
    protected removeFileChangeNodes(commit: ScmCommitNode, scmNodesArrayIndex: number): void;
    storeState(): object;
    restoreState(oldState: any): void;
    protected onDataReady(): void;
    protected render(): React.ReactNode;
    protected renderHistoryHeader(): React.ReactNode;
    protected renderCommitList(): React.ReactNode;
    protected readonly handleScroll: (info: ScrollParams) => void;
    protected doHandleScroll(info: ScrollParams): void;
    protected readonly loadMoreRows: (params: IndexRange) => Promise<any>;
    protected doLoadMoreRows(params: IndexRange): Promise<any>;
    protected readonly renderCommit: (commit: ScmCommitNode) => React.ReactNode;
    protected doRenderCommit(commit: ScmCommitNode): React.ReactNode;
    protected openDetailWidget(commitNode: ScmCommitNode): Promise<void>;
    protected readonly renderFileChangeList: (fileChange: ScmFileChangeNode) => React.ReactNode;
    protected doRenderFileChangeList(fileChange: ScmFileChangeNode): React.ReactNode;
    protected renderScmItem(change: ScmFileChangeNode, commitSha: string): React.ReactNode;
    protected navigateLeft(): void;
    protected navigateRight(): void;
    protected handleListEnter(): void;
    protected openFile(change: ScmFileChange): void;
}
export declare namespace ScmHistoryList {
    interface Props {
        readonly rows: ScmHistoryListNode[];
        readonly indexOfSelected: number;
        readonly hasMoreRows: boolean;
        readonly handleScroll: (info: {
            clientHeight: number;
            scrollHeight: number;
            scrollTop: number;
        }) => void;
        readonly loadMoreRows: (params: IndexRange) => Promise<any>;
        readonly renderCommit: (commit: ScmCommitNode) => React.ReactNode;
        readonly renderFileChangeList: (fileChange: ScmFileChangeNode) => React.ReactNode;
    }
}
export declare class ScmHistoryList extends React.Component<ScmHistoryList.Props> {
    list: List | undefined;
    protected readonly checkIfRowIsLoaded: (opts: {
        index: number;
    }) => boolean;
    protected doCheckIfRowIsLoaded(opts: {
        index: number;
    }): boolean;
    render(): React.ReactNode;
    componentWillUpdate(): void;
    protected measureCache: CellMeasurerCache;
    protected measureRowRenderer: ListRowRenderer;
    protected renderRow: ListRowRenderer;
}
//# sourceMappingURL=scm-history-widget.d.ts.map