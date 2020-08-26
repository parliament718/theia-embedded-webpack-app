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
import { VSXExtensionRaw, VSXSearchParam, VSXSearchResult } from './vsx-registry-types';
import { VSXEnvironment } from './vsx-environment';
export interface VSXResponseError extends Error {
    statusCode: number;
}
export declare namespace VSXResponseError {
    function is(error: any): error is VSXResponseError;
}
export declare class VSXRegistryAPI {
    protected readonly environment: VSXEnvironment;
    search(param?: VSXSearchParam): Promise<VSXSearchResult>;
    getExtension(id: string): Promise<VSXExtensionRaw>;
    protected fetchJson<T>(url: string): Promise<T>;
    fetchText(url: string): Promise<string>;
}
//# sourceMappingURL=vsx-registry-api.d.ts.map