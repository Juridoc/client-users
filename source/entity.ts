/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

import * as Types from './types';

/**
 * User entity class.
 */
@RestDB.Schema.Entity('users')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * User Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Last update date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public updatedAt?: Date | null;

  /**
   * Last access date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public accessedAt?: Date | null;

  /**
   * User type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Common))
  @Class.Public()
  public type!: Types.Common;

  /**
   * User verification.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Verification))
  @Class.Public()
  public verification!: Types.Verification;

  /**
   * User status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Active user name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Active user email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;
}
