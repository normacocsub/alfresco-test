import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlfrescoModule } from './alfresco/alfresco.module';

@Module({
  imports: [AlfrescoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
