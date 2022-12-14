import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { RolesGuard } from './guards/roles.guard';
import { NameModule } from './name/name.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [CatModule, NameModule, EmailModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AppService,
  ],
})
export class AppModule {}
