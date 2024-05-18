import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')//adding a prefix to all routes in the controller
export class AuthController {
  constructor(private authService: AuthService) { }
  //POST auth/signup
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  //POST auth/signin
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
//dealing with the request and response objects
