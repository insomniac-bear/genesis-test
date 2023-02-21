import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AmoService {
  async createObject(
    token: string,
    baseDomain: string,
    objectName: string,
  ): Promise<string> {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const data = [{ name: `test ${objectName}` }];

    const res = await axios({
      method: 'POST',
      url: `https://${baseDomain}/api/v4/${objectName}`,
      data,
    });

    return res.data;
  }
}
