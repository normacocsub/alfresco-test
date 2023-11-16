import { Module } from '@nestjs/common';
import { AlfrescoService } from './alfresco.service';
import { AlfrescoController } from './alfresco.controller';

@Module({
  controllers: [AlfrescoController],
  providers: [AlfrescoService],
})
export class AlfrescoModule {}