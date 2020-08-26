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
import express = require('express');
import { BackendApplicationContribution } from '../../node';
import { ElectronTokenValidator } from './electron-token-validator';
/**
 * This component contributes an Express middleware that will refuse all
 * requests that do not include a specific token.
 */
export declare class ElectronTokenBackendContribution implements BackendApplicationContribution {
    protected readonly tokenValidator: ElectronTokenValidator;
    configure(app: express.Application): void;
    /**
     * Only allow token-bearers.
     */
    protected expressMiddleware(req: express.Request, res: express.Response, next: express.NextFunction): void;
}
//# sourceMappingURL=electron-token-backend-contribution.d.ts.map