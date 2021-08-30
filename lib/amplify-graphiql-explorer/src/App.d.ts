import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import { GraphQLSchema } from 'graphql';
import { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { AUTH_MODE } from './AuthModal';
declare type AmplifyAppSyncSimulatorAuthInfo = {
    authenticationType: string;
};
declare type AmplifyAppSyncSimulatorApiInfo = {
    name: string;
    defaultAuthenticationType: AmplifyAppSyncSimulatorAuthInfo;
    apiKey: string;
    additionalAuthenticationProviders: AmplifyAppSyncSimulatorAuthInfo[];
};
declare type State = {
    schema?: GraphQLSchema | null;
    query?: string;
    explorerIsOpen: boolean;
    authModalVisible: boolean;
    jwtToken?: string;
    apiKey?: string;
    apiInfo: AmplifyAppSyncSimulatorApiInfo;
    currentAuthMode: AUTH_MODE;
    credentials: {
        apiKey?: string;
        cognitoJWTToken?: string;
        oidcJWTToken?: string;
        iam?: string;
    };
};
declare class App extends Component<{}, State> {
    _graphiql?: GraphiQL;
    state: State;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    toggleAuthModal: () => any;
    switchAuthMode: (val: any) => void;
    _handleInspectOperation: (cm: any, mousePos: {
        line: Number;
        ch: Number;
    }) => any;
    _handleEditQuery: (query: string | undefined) => void;
    _handleToggleExplorer: () => void;
    fetch(params: any): Promise<any>;
    storeCredentials(credentials: any): void;
    loadCredentials(apiInfo?: AmplifyAppSyncSimulatorApiInfo): {};
    render(): any;
}
export default App;
