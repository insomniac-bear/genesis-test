import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  async getHello() {
    return 'Hello world!!!';
  }

  async getToken(): Promise<string> {
    const res = await axios.get('https://test.gnzs.ru/oauth/get-token.php', {
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': '30878566',
      },
    });

    return res.data;
  }
}
