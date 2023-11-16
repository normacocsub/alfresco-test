import { Injectable } from '@nestjs/common';
import { AlfrescoApi } from '@alfresco/js-api';
import { alfrescoConfig } from './alfresco.config'

const alfrescoAp = new AlfrescoApi(alfrescoConfig);
@Injectable()
export class AlfrescoService {
  
  async getAlfresco() {
    const data = await alfrescoAp.login('admin', 'admin');
    return data;
  }
}