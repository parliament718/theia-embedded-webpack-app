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
import * as React from 'react';
import { ReactWidget, Message } from '@theia/core/lib/browser/widgets';
import { VSXExtensionsSearchModel } from './vsx-extensions-search-model';
export declare class VSXExtensionsSearchBar extends ReactWidget {
    protected readonly model: VSXExtensionsSearchModel;
    protected init(): void;
    protected input: HTMLInputElement | undefined;
    protected render(): React.ReactNode;
    protected updateQuery: (e: React.ChangeEvent<HTMLInputElement>) => string;
    protected onActivateRequest(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
}
//# sourceMappingURL=vsx-extensions-search-bar.d.ts.map