import fs from 'fs';

export const saveLogsToFile = (
  path: string,
  body: unknown,
  query: unknown
): void => {
  const ws = fs.createWriteStream(`logs/log.txt`, {
    flags: 'a',
  });
  const date = new Date();
  process.stdout.write('input text: ');
  console.log('close');

  ws.write(
    `${date}, url: ${path}, body: ${JSON.stringify(
      body
    )}, query params: ${JSON.stringify(query)}\n`
  );
  ws.close();
};
