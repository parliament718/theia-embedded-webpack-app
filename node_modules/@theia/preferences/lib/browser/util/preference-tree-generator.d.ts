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
import { CompositeTreeNode, PreferenceSchemaProvider, SelectableTreeNode } from '@theia/core/lib/browser';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
import { Preference } from './preference-types';
export declare class PreferenceTreeGenerator {
    schemaProvider: PreferenceSchemaProvider;
    preferenceConfigs: PreferenceConfigurations;
    generateTree(): CompositeTreeNode;
    protected createRootNode: (preferencesGroups: Preference.Branch[]) => CompositeTreeNode;
    protected createLeafNode: (property: string, preferencesGroup: Preference.Branch) => SelectableTreeNode;
    protected createPreferencesGroup: (group: string, root: CompositeTreeNode) => Preference.Branch;
    protected toTitleCase(nonTitle: string): string;
    protected capitalizeFirst(maybeLowerCase: string): string;
    /**
     * Split based on any non-word character or the 0-length space between a non-upper-case character and an upper-case character
     */
    private split;
}
//# sourceMappingURL=preference-tree-generator.d.ts.map