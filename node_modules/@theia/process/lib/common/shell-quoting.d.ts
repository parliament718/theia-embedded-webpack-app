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
/**
 * Defines how an argument should be quoted if it contains
 * spaces or unsupported characters.
 */
export declare const enum ShellQuoting {
    /**
     * Character escaping should be used. This for example
     * uses \ on bash and ` on PowerShell.
     */
    Escape = "escape",
    /**
     * Strong string quoting should be used. This for example
     * uses " for Windows cmd and ' for bash and PowerShell.
     * Strong quoting treats arguments as literal strings.
     * Under PowerShell echo 'The value is $(2 * 3)' will
     * print `The value is $(2 * 3)`
     */
    Strong = "strong",
    /**
     * Weak string quoting should be used. This for example
     * uses " for Windows cmd, bash and PowerShell. Weak quoting
     * still performs some kind of evaluation inside the quoted
     * string.  Under PowerShell echo "The value is $(2 * 3)"
     * will print `The value is 6`
     */
    Weak = "weak"
}
/**
 * A string that will be quoted depending on the used shell.
 */
export interface ShellQuotedString {
    /**
     * The actual string value.
     */
    value: string;
    /**
     * The quoting style to use.
     */
    quoting: ShellQuoting;
}
/**
 * Functions that provide shell quoting capabilities.
 */
export interface ShellQuotingFunctions {
    characters: {
        /** Characters that require quotes, white space is always implied. */
        needQuotes?: string;
        /** The character used to escape sequences. */
        escape?: string;
        /** The character used to quote sequences, preventing variable expansion. */
        strong?: string;
        /** The character used to quote sequences, allowing variable expansion. */
        weak?: string;
    };
    /**
     * Should add escape-characters in front of forbidden characters.
     */
    escape?(this: any, arg: string): string;
    /**
     * Should quote the argument in such a way that variables CANNOT be expanded.
     */
    strong?(this: any, arg: string): string;
    /**
     * Should quote the argument in such a way that variables CAN be expanded.
     */
    weak?(this: any, arg: string): string;
}
/**
 * Converts a list of args into an escaped shell command.
 *
 * There are two main use cases when handling command/arguments for a shell:
 * 1. User already wrote the escaped commandline, then just use that.
 * 2. User wants a specific process to be invoked with some arguments.
 *
 * The `createShellCommandLine` function is useful for the latter.
 *
 * @param args Standard list of spawn/exec arguments, first item is the command.
 * @param quotingFunctions Collection of functions to process arguments.
 */
export declare function createShellCommandLine(args: Array<string | ShellQuotedString>, quotingFunctions?: ShellQuotingFunctions): string;
/**
 * Escape (or quote) a given input.
 *
 * @param arg Input to escape.
 * @param quotingFunctions Collection of functions to process the given `arg`.
 * @param quotingType Override the quoting type specified by the given `arg`.
 */
export declare function escapeForShell(arg: string | ShellQuotedString, quotingFunctions?: ShellQuotingFunctions, quotingType?: ShellQuoting): string;
export declare const BashQuotingFunctions: Required<ShellQuotingFunctions>;
export declare const CmdQuotingFunctions: Required<ShellQuotingFunctions>;
export declare const PowershellQuotingFunctions: Required<ShellQuotingFunctions>;
//# sourceMappingURL=shell-quoting.d.ts.map