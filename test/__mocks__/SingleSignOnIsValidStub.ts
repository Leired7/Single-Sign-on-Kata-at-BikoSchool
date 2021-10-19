import SingleSignOnRegistry from '../../src/sso/SingleSignOnRegistry';
import SSOToken from '../../src/sso/SSOToken';

export class SingleSignOnIsValidStub implements SingleSignOnRegistry {
  constructor(public state: boolean) {
    this.state = state;
  }

  isValid(token: string): boolean {
    if (this.state === true) {
      return true;
    } else if (this.state === false) {
      return false;
    }
    return false;
  }

  registerNewSession(userName: string, password: string): SSOToken | undefined {
    throw new Error('Dummy: not implemented');
  }

  unregister(token: string): void {
    throw new Error('Dummy: not implemented');
  }
}
