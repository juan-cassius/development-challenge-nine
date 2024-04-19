import express = require('express');
import cors = require('cors');
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(cors());

    this.app.use(express.json());

    // this.app.use((req, res, next) => {
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    //   next();
    // });

    this.routes();

    this.app.get('/', (_req, res) => res.status(200).send('API de PA no ar!'));
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Backend no ar na porta ${PORT}!`));
  }
}

export default App;
