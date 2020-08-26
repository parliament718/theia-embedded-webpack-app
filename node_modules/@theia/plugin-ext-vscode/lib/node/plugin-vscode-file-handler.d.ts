/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { PluginDeployerFileHandler, PluginDeployerEntry, PluginDeployerFileHandlerContext } from '@theia/plugin-ext';
import { PluginVSCodeEnvironment } from '../common/plugin-vscode-environment';
export declare class PluginVsCodeFileHandler implements PluginDeployerFileHandler {
    protected readonly environment: PluginVSCodeEnvironment;
    private readonly systemExtensionsDirUri;
    accept(resolvedPlugin: PluginDeployerEntry): boolean;
    handle(context: PluginDeployerFileHandlerContext): Promise<void>;
    protected getExtensionDir(context: PluginDeployerFileHandlerContext): Promise<string>;
    protected decompress(extensionDir: string, context: PluginDeployerFileHandlerContext): Promise<void>;
}
//# sourceMappingURL=plugin-vscode-file-handler.d.ts.map