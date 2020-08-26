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
import { Emitter, Event } from '@theia/core/lib/common/event';
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import { Resource, ResourceResolver, ResourceVersion } from '@theia/core';
import URI from '@theia/core/lib/common/uri';
import { FileResourceResolver } from '@theia/filesystem/lib/browser';
export declare class UntitledResourceResolver implements ResourceResolver {
    protected readonly fileResourceResolver: FileResourceResolver;
    protected readonly resources: Map<string, UntitledResource>;
    resolve(uri: URI): Promise<UntitledResource>;
    createUntitledResource(fileResourceResolver: FileResourceResolver, content?: string, language?: string, uri?: URI): Promise<UntitledResource>;
}
export declare class UntitledResource implements Resource {
    private resources;
    uri: URI;
    private fileResourceResolver;
    private content?;
    private fileResource?;
    protected readonly onDidChangeContentsEmitter: Emitter<void>;
    readonly onDidChangeContents: Event<void>;
    constructor(resources: Map<string, UntitledResource>, uri: URI, fileResourceResolver: FileResourceResolver, content?: string | undefined);
    dispose(): void;
    readContents(options?: {
        encoding?: string | undefined;
    } | undefined): Promise<string>;
    saveContents(content: string, options?: {
        encoding?: string;
        overwriteEncoding?: string;
    }): Promise<void>;
    saveContentChanges(changes: TextDocumentContentChangeEvent[], options?: {
        encoding?: string;
        overwriteEncoding?: string;
    }): Promise<void>;
    guessEncoding(): Promise<string | undefined>;
    protected fireDidChangeContents(): void;
    get version(): ResourceVersion | undefined;
}
export declare function createUntitledURI(language?: string): URI;
//# sourceMappingURL=untitled-resource.d.ts.map