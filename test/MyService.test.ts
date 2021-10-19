import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnValidStub } from './__mocks__/SingleSignOnValidStub';

describe('MyService', () => {
  it('valid sso token is accept', () => {
    const stubIsValid = new SingleSignOnValidStub();
    const service = new MyService(stubIsValid);

    const response = service.handleRequest(
      new Request('Foo', new SSOToken('token'))
    );

    expect(response.getText()).toEqual('hello Foo!');
  });
});
