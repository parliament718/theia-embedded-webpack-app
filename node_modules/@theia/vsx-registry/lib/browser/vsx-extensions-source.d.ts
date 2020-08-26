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
import { TreeSource, TreeElement } from '@theia/core/lib/browser/source-tree';
import { VSXExtensionsModel } from './vsx-extensions-model';
export declare class VSXExtensionsSourceOptions {
    static INSTALLED: string;
    static BUILT_IN: string;
    static SEARCH_RESULT: string;
    readonly id: string;
}
export declare class VSXExtensionsSource extends TreeSource {
    protected readonly options: VSXExtensionsSourceOptions;
    protected readonly model: VSXExtensionsModel;
    protected init(): Promise<void>;
    getElements(): IterableIterator<TreeElement>;
    protected doGetElements(): IterableIterator<string>;
}
//# sourceMappingURL=vsx-extensions-source.d.ts.map