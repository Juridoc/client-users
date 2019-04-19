/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Users mapper class.
 */
@Injection.Describe({ singleton: true, name: 'users' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new user based on the specified creation request.
   * @param request User creation request.
   * @returns Returns a promise to get the user Id.
   * @throws Throws an error when the user wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the user that corresponds to the specified user Id.
   * @param id User Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the user entity.
   * @throws Throws an error when the user wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Load the current session user.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the user entity.
   * @throws Throws an error when the current user wasn't found.
   */
  @Class.Public()
  public async loadMe(fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById('me', fields))!;
  }

  /**
   * Update the user that corresponds to the specified user Id based on the given update request.
   * @param id User Id.
   * @param request User update request.
   * @returns Returns a promise to get true when the user was updated, false otherwise.
   * @throws Throws an error when the user wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * Update the current session user based on the given update request.
   * @param request User update request.
   * @returns Returns a promise to get true when the user was updated, false otherwise.
   * @throws Throws an error when the current user wasn't found.
   */
  @Class.Public()
  public async modifyMe(request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, 'me', request))!;
  }

  /**
   * List all users that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the user list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all users that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of users or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the user that corresponds to the specified user Id.
   * @param id User Id.
   * @returns Returns a promise to get true when the user was deleted, false otherwise.
   * @throws Throws an error when the user wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean | undefined> {
    return await this.mapper.deleteById(id);
  }
}
