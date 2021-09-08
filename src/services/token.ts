class TokenService {
  constructor(private storageProvider: Storage) {}

  get() {
    return this.storageProvider.getItem('authorization_token');
  }
}

const tokenService = new TokenService(localStorage);

export default tokenService;
