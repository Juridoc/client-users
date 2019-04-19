/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * User update request.
 */
export declare class Update extends Class.Null {
    /**
     * User status.
     */
    status?: Types.Status;
    /**
     * User name.
     */
    name?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * User password.
     */
    password?: string;
}
