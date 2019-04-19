/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

import * as Types from '../types';

/**
 * User creation request.
 */
@RestDB.Schema.Entity('users')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * User type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Common))
  @Class.Public()
  public type!: Types.Common;

  /**
   * User status.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status?: Types.Status;

  /**
   * User name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * User email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;

  /**
   * User password.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(6)
  @Class.Public()
  public password!: string;
}
