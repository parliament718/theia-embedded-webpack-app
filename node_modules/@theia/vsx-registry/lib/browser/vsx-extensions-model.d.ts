/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
import { Emitter } from '@theia/core/lib/common/event';
import { CancellationToken, CancellationTokenSource } from '@theia/core/lib/common/cancellation';
import { VSXRegistryAPI } from '../common/vsx-registry-api';
import { VSXSearchParam } from '../common/vsx-registry-types';
import { HostedPluginSupport } from '@theia/plugin-ext/lib/hosted/browser/hosted-plugin';
import { VSXExtension, VSXExtensionFactory } from './vsx-extension';
import { ProgressService } from '@theia/core/lib/common/progress-service';
import { VSXExtensionsSearchModel } from './vsx-extensions-search-model';
import { Deferred } from '@theia/core/lib/common/promise-util';
export declare class VSXExtensionsModel {
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("@theia/core/lib/common/event").Event<void>;
    protected readonly api: VSXRegistryAPI;
    protected readonly pluginSupport: HostedPluginSupport;
    protected readonly extensionFactory: VSXExtensionFactory;
    protected readonly progressService: ProgressService;
    readonly search: VSXExtensionsSearchModel;
    protected readonly initialized: Deferred<void>;
    protected init(): Promise<void>;
    protected initInstalled(): Promise<void>;
    protected initSearchResult(): Promise<void>;
    /**
     * single source of all extensions
     */
    protected readonly extensions: Map<string, VSXExtension>;
    protected _installed: Set<string>;
    get installed(): IterableIterator<string>;
    protected _searchResult: Set<string>;
    get searchResult(): IterableIterator<string>;
    getExtension(id: string): VSXExtension | undefined;
    protected setExtension(id: string): VSXExtension;
    protected doChange<T>(task: () => Promise<T>): Promise<T>;
    protected doChange<T>(task: () => Promise<T>, token: CancellationToken): Promise<T | undefined>;
    protected searchCancellationTokenSource: CancellationTokenSource;
    protected updateSearchResult: () => Promise<void>;
    protected doUpdateSearchResult(param: VSXSearchParam, token: CancellationToken): Promise<void>;
    protected updateInstalled(): Promise<void>;
    resolve(id: string): Promise<VSXExtension>;
    protected compileReadme(readmeMarkdown: string): string;
    protected refresh(id: string): Promise<VSXExtension | undefined>;
    protected onDidFailRefresh(id: string, error: any): VSXExtension | undefined;
    /**
     * Compare two extensions based on their display name, and publisher if applicable.
     * @param a the first extension id for comparison.
     * @param b the second extension id for comparison.
     */
    protected compareExtensions(a: string, b: string): number;
}
//# sourceMappingURL=vsx-extensions-model.d.ts.map