/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface IVwoData {
    actionResponse: { text: string };
    accountId: number;
    settingsTolerance: number;
    libraryTolerance: number;
    useExistingJquery: boolean;
    isSPA: number;
}
