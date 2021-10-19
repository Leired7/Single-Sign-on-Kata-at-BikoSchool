import SingleSignOnRegistry from '../../src/sso/SingleSignOnRegistry';
import SSOToken from '../../src/sso/SSOToken';

export class SingleSignOnIsValidStub implements SingleSignOnRegistry {
  tokenValidity: any;

  isValid(token: string): boolean {
    if (this.tokenValidity) {
      return true;
    }
    return false;
  }

  setTokenEvaluation(state: boolean) {
    this.tokenValidity = state;
  }

  registerNewSession(userName: string, password: string): SSOToken | undefined {
    throw new Error('Dummy: not implemented');
  }

  unregister(token: string): void {
    throw new Error('Dummy: not implemented');
  }
}
