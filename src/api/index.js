// Simula recebimento de dados de API

class Api {
  static getData() {
    return new Promise((resolve, reject) => {
      const data = require('./data.json');
      resolve(data);
    });
  }
}

export default Api;