
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), 'src/data', 'data.json');

const readDataFile = (): any => {
  console.log(dataFilePath);
  
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading or parsing data.json', error);
    return {questLines: []};
  }
};

export async function GET(res: NextResponse) {
  const data = readDataFile();
  res = NextResponse.json({ data });
  return res;
}