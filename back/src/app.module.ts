import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AmoModule } from './amo/amo.module';

@Module({
  imports: [AuthModule, AmoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
