/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Users mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new user based on the specified creation request.
     * @param request User creation request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the user wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the user that corresponds to the specified user Id.
     * @param id User Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the user entity.
     * @throws Throws an error when the user wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Load the current session user.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the user entity.
     * @throws Throws an error when the current user wasn't found.
     */
    loadMe(fields?: string[]): Promise<Entity>;
    /**
     * Update the user that corresponds to the specified user Id based on the given update request.
     * @param id User Id.
     * @param request User update request.
     * @returns Returns a promise to get true when the user was updated, false otherwise.
     * @throws Throws an error when the user wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Update the current session user based on the given update request.
     * @param request User update request.
     * @returns Returns a promise to get true when the user was updated, false otherwise.
     * @throws Throws an error when the current user wasn't found.
     */
    modifyMe(request: Requests.Update): Promise<boolean>;
    /**
     * List all users that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the user list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all users that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of users or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the user that corresponds to the specified user Id.
     * @param id User Id.
     * @returns Returns a promise to get true when the user was deleted, false otherwise.
     * @throws Throws an error when the user wasn't found.
     */
    remove(id: string): Promise<boolean | undefined>;
}
