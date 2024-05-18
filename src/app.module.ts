import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
})
export class AppModule { }
//controllers are responsible for handling incoming requests and returning responses to the client.
//providers are responsible for handling business logic and executing tasks that controllers delegate to them.
//nest js is powered by express js, so it uses the same request and response objects as express js and can use express middleware and structure and so on...
