/**
 * Copyright (c) Microsoft Corporation
 * All rights reserved. See License.txt in the project root for license information.
 * IVwo scriptModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IVwoConfig {
    accountId: number;
    settingsTolerance: number;
    libraryTolerance: number;
    useExistingJquery: boolean;
    isSPA: number;
}

export interface IVwoProps<T> extends Msdyn365.IModule<T> {
    config: IVwoConfig;
}
