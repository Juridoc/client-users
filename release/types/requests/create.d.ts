/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * User creation request.
 */
export declare class Create extends Class.Null {
    /**
     * User type.
     */
    type: Types.Common;
    /**
     * User status.
     */
    status?: Types.Status;
    /**
     * User name.
     */
    name: string;
    /**
     * User email.
     */
    email: string;
    /**
     * User password.
     */
    password: string;
}
