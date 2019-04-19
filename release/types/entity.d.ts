/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from './types';
/**
 * User entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * User Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date | null;
    /**
     * Last access date.
     */
    accessedAt?: Date | null;
    /**
     * User type.
     */
    type: Types.Common;
    /**
     * User verification.
     */
    verification: Types.Verification;
    /**
     * User status.
     */
    status: Types.Status;
    /**
     * Active user name.
     */
    name: string;
    /**
     * Active user email.
     */
    email: string;
}
