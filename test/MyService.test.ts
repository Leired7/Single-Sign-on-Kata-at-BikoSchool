import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnIsValidStub } from './__mocks__/SingleSignOnIsValidStub';

describe('MyService', () => {
  it('valid sso token is accept', () => {
    const stubIsValid = new SingleSignOnIsValidStub(true);
    const service = new MyService(stubIsValid);

    const response = service.handleRequest(
      new Request('Foo', new SSOToken('token'))
    );
    expect(response.getText()).toEqual('hello Foo!');
  });

  it('invalid sso token is rejected', () => {
    const stubIsValid = new SingleSignOnIsValidStub(false);
    const service = new MyService(stubIsValid);

    const response = service.handleRequest(
      new Request('Foo', new SSOToken('token'))
    );
    expect(response.getText()).toEqual('');
  });
});
