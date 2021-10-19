import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnIsValidStub } from './__mocks__/SingleSignOnIsValidStub';
import { SingleSignOnRegistryFake } from './__mocks__/SingleSignOnRegistryFake';

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

  it('Check user and password are in list', () => {
    const registerFake = new SingleSignOnRegistryFake();

    const service = new MyService(registerFake);

    const response = service.handleRegister('Leire', '1234');

    expect(response).toEqual(new SSOToken('afdsfasdfjñladjsfk'));
  });

  it("Check user and password don't are in list", () => {
    const registerFake = new SingleSignOnRegistryFake();

    const service = new MyService(registerFake);

    const response = service.handleRegister('Turki', '1234');

    expect(response).toEqual(new SSOToken(''));
  });
});
