import { Greetings } from '@angular-business/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): Greetings {
    return { message: 'Welcome to api!' };
  }
}
