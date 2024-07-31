import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/locations')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':location')
  getData(@Param('location') location: string): any {
    return this.appService.getData(location);
  }
}
