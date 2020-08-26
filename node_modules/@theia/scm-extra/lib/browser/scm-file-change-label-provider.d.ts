/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { LabelProviderContribution, DidChangeLabelEvent, LabelProvider } from '@theia/core/lib/browser/label-provider';
import { ScmFileChangeNode } from './scm-file-change-node';
import URI from '@theia/core/lib/common/uri';
import { ScmService } from '@theia/scm/lib/browser/scm-service';
export declare class ScmFileChangeLabelProvider implements LabelProviderContribution {
    protected readonly labelProvider: LabelProvider;
    protected readonly scmService: ScmService;
    canHandle(element: object): number;
    getIcon(node: ScmFileChangeNode): string;
    getName(node: ScmFileChangeNode): string;
    getDescription(node: ScmFileChangeNode): string;
    affects(node: ScmFileChangeNode, event: DidChangeLabelEvent): boolean;
    getCaption(node: ScmFileChangeNode): string;
    relativePath(uri: URI | string): string;
    getStatusCaption(node: ScmFileChangeNode): string;
}
//# sourceMappingURL=scm-file-change-label-provider.d.ts.map