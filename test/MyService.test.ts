import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnIsValidStub } from './__mocks__/SingleSignOnIsValidStub';

describe('MyService', () => {
  it('valid sso token is accept', () => {
    const stubIsValid = new SingleSignOnIsValidStub();
    stubIsValid.setTokenEvaluation(true);
    const service = new MyService(stubIsValid);

    const response = service.handleRequest(
      new Request('Foo', new SSOToken('token'))
    );
    expect(response.getText()).toEqual('hello Foo!');
  });

  it('invalid sso token is rejected', () => {
    const stubIsValid = new SingleSignOnIsValidStub();
    stubIsValid.setTokenEvaluation(false);

    const service = new MyService(stubIsValid);

    const response = service.handleRequest(
      new Request('Foo', new SSOToken('token'))
    );
    expect(response.getText()).toEqual('');
  });
});
