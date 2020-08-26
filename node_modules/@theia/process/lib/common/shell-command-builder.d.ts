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
import { ShellQuotedString } from '../common/shell-quoting';
export interface ProcessInfo {
    executable: string;
    arguments: string[];
}
export interface CommandLineOptions {
    cwd: string;
    args: string[];
    env?: {
        [key: string]: string | null;
    };
}
/**
 * Create command lines ready to be sent to a shell's stdin for evaluation.
 */
export declare class ShellCommandBuilder {
    /**
     * Constructs a command line to run in a shell. The shell could be
     * re-used/long-lived, this means we cannot spawn a new process with a nice
     * and fresh environment, we need to encode environment modifications into
     * the returned command.
     *
     * Inspired by VS Code implementation, see:
     * https://github.com/microsoft/vscode/blob/f395cac4fff0721a8099126172c01411812bcb4a/src/vs/workbench/contrib/debug/node/terminals.ts#L79
     *
     * @param hostProcessInfo the host terminal process infos
     * @param commandOptions program to execute in the host terminal
     */
    buildCommand(hostProcessInfo: ProcessInfo | undefined, commandOptions: CommandLineOptions): string;
    protected buildForBash(args: Array<string | ShellQuotedString>, cwd?: string, env?: Array<[string, string | null]>): string;
    protected buildForPowershell(args: Array<string | ShellQuotedString>, cwd?: string, env?: Array<[string, string | null]>): string;
    protected buildForCmd(args: Array<string | ShellQuotedString>, cwd?: string, env?: Array<[string, string | null]>): string;
    protected buildForDefault(args: Array<string | ShellQuotedString>, cwd?: string, env?: Array<[string, string | null]>): string;
}
//# sourceMappingURL=shell-command-builder.d.ts.map