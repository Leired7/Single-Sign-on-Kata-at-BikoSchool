import SingleSignOnRegistry from '../../src/sso/SingleSignOnRegistry';
import SSOToken from '../../src/sso/SSOToken';

export class SingleSignOnRegistryFake implements SingleSignOnRegistry {
  isValid(token: string): boolean {
    throw new Error('Dummy: not implemented');
  }

  registerNewSession(userName: string, password: string): SSOToken | undefined {
    if (userName === 'Leire' && password === '1234') {
      return new SSOToken('afdsfasdfjñladjsfk');
    }
    return new SSOToken('');
  }

  unregister(token: string): void {
    throw new Error('Dummy: not implemented');
  }
}
