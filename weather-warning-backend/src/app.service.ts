import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private dataDirectory = path.join(__dirname, '..', 'data');

  getData(location: string): any {
    const files = fs.readdirSync(this.dataDirectory);
    for (const file of files) {
      const filePath = path.join(this.dataDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      if (data.location.toLowerCase() === location.toLowerCase()) {
        return data;
      }
    }
    throw new Error(`Data for location ${location} not found`);
  }
}
