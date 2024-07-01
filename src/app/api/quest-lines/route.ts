import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), 'src/app/data', 'data.json');

const readDataFile = async () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading or parsing data.json', error);
    return {questLines: []};
  }
};

export async function GET() {
  const data = await readDataFile();
  return Response.json(data.questLines);
}