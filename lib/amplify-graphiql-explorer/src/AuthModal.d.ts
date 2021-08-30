import { Component } from 'react';
export declare enum AUTH_MODE {
    API_KEY = "API_KEY",
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
    OPENID_CONNECT = "OPENID_CONNECT",
    AWS_IAM = "AWS_IAM"
}
declare type State = {
    currentCognitoToken?: string;
    currentOIDCToken: string;
    currentOIDCTokenDecoded?: string;
    currentAuthMode: AUTH_MODE;
    userName?: string;
    userGroups: string[];
    email?: string;
    additionalFields?: string;
    issuer?: string;
    apiKey?: string;
    possibleGroups: string[];
    isOpen: boolean;
    supportedAuthModes: AUTH_MODE[];
    oidcTokenError: string;
};
declare type Props = {
    onClose: Function;
    authModes: AUTH_MODE[];
    selectedAuthMode: AUTH_MODE;
    currentCognitoToken?: string;
    currentOIDCToken?: string;
    apiKey?: string;
};
export declare class AuthModal extends Component<Props, State> {
    state: State;
    constructor(props: any);
    onClose(): void;
    onGroupChange(ev: any, data: any): void;
    onGroupAdd(ev: any, data: any): void;
    onUserNameChange(ev: any, data: any): void;
    onOIDCTokenChange(ev: any, data: any): void;
    onAuthModeChange(ev: any, data: any): void;
    changeEmail(ev: any, data: any): void;
    onAdditionalFieldChange: (ev: any, data: any) => void;
    changeAPIKey(ev: any, data: any): void;
    render(): any;
    onGenerate(): void;
    generateCognitoJWTToken(): string;
    generateOIDCJWTToken(): string;
    parseJWTToken(token: any): object;
}
export {};
