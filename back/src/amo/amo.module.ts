import { Module } from '@nestjs/common';
import { AmoController } from './amo.controller';
import { AmoService } from './amo.service';

@Module({
  imports: [],
  controllers: [AmoController],
  providers: [AmoService],
})
export class AmoModule {}
