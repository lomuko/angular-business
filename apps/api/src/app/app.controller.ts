import { Greetings } from '@angular-business/models';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Greetings {
    return this.appService.getData();
  }
}
