/* tslint:disable */
import { SignUpRequest } from './sign-up-request';
export interface JwtAuthenticationResponse {
  accessToken?: string;
  data?: SignUpRequest;
  tokenType?: string;
}
