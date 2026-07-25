import { Module } from '@nestjs/common';
import { SocializAuthModule } from '@socializ/auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SocializAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
