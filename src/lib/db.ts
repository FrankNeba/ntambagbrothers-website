import fs from 'fs';
import path from 'path';

const contentFilePath = path.join(process.cwd(), 'data', 'content.json');

export function getSiteData() {
  if (!fs.existsSync(contentFilePath)) {
    throw new Error('data/content.json not found');
  }
  const fileData = fs.readFileSync(contentFilePath, 'utf8');
  return JSON.parse(fileData);
}

export function updateSiteData(newData: any) {
  fs.writeFileSync(contentFilePath, JSON.stringify(newData, null, 2), 'utf8');
  return newData;
}
