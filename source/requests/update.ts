/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

import * as Types from '../types';

/**
 * User update request.
 */
@RestDB.Schema.Entity('users/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * User status.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status?: Types.Status;

  /**
   * User name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

  /**
   * User email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.String()
  @Class.Public()
  public email?: string;

  /**
   * User password.
   */
  @RestDB.Schema.String(6)
  @Class.Public()
  public password?: string;
}
