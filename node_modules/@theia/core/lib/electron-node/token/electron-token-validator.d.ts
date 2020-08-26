/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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
/// <reference types="node" />
import * as http from 'http';
import { ElectronSecurityToken } from '../../electron-common/electron-token';
/**
 * On Electron, we want to make sure that only Electron's browser-windows access the backend services.
 */
export declare class ElectronTokenValidator {
    protected electronSecurityToken: ElectronSecurityToken;
    /**
     * Expects the token to be passed via cookies by default.
     */
    allowRequest(request: http.IncomingMessage): boolean;
    /**
     * Validates a token.
     *
     * This method both checks the shape of the parsed token data and its actual value.
     *
     * @param token Parsed object sent by the client as the token.
     */
    isTokenValid(token: any): boolean;
    /**
     * Returns the token to compare to when authorizing requests.
     */
    protected getToken(): ElectronSecurityToken;
}
//# sourceMappingURL=electron-token-validator.d.ts.map