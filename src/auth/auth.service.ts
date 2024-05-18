import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'I am signed in' };
  }
  signup() {
    return { msg: 'I am signed up' };
  }
}
//look into dependency injection
//dealing with the business logic like connecting to the database, editing the fields and so on...
