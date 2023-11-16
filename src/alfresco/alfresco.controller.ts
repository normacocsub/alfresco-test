import { Controller, Get } from '@nestjs/common';
import { AlfrescoService } from './alfresco.service';

@Controller("alfresco")
export class AlfrescoController {
  constructor(private readonly alfrescoService: AlfrescoService) {}

  @Get()
  async getHello() {
    return await this.alfrescoService.getAlfresco();
  }
}
