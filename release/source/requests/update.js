"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Validators = require("@singleware/types");
const Types = require("../types");
/**
 * User update request.
 */
let Update = class Update extends Class.Null {
};
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Status)),
    Class.Public()
], Update.prototype, "status", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Update.prototype, "name", void 0);
__decorate([
    Validators.Validate(new Validators.Common.Email()),
    RestDB.Schema.String(),
    Class.Public()
], Update.prototype, "email", void 0);
__decorate([
    RestDB.Schema.String(6),
    Class.Public()
], Update.prototype, "password", void 0);
Update = __decorate([
    RestDB.Schema.Entity('users/{id}'),
    Class.Describe()
], Update);
exports.Update = Update;
//# sourceMappingURL=update.js.map