import Config from './common/config';
import { app } from './app';

app.listen(Config.PORT, () =>
  console.log(`App is running on http://localhost:${Config.PORT}`)
);
