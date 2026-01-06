import figlet from 'figlet';

import app from './app';

const port = Number(process.env.PORT);
const networkIp = process.env.APP_ROOT;

app.listen(port, () => {
  console.info(
    '\n',
    figlet.textSync('happy _ API'),
    '\n',
    '\n',
    'Application running at',
    '\n',
    `    http://localhost:${port}`,
    '\n',
    `    ${networkIp}`,
    '\n',
  );
});
