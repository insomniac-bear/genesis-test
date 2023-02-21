import { Controller, Post, Body } from '@nestjs/common';
import { AmoService } from './amo.service';

@Controller('amo')
export class AmoController {
  constructor(private readonly amoService: AmoService) {}

  @Post('/')
  createCompanies(@Body() body) {
    const { token, baseDomain, objectName } = body;
    return this.amoService.createObject(token, baseDomain, objectName);
  }
}
