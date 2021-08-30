import Connection from 'mqtt-connection';
import { MQTTServer } from './server';
export declare class Client {
    private connection;
    private server;
    private logger;
    private subscriptions;
    nextId: number;
    inflight: {};
    inflightCounter: number;
    private keepAlive;
    private _lastDedupId;
    private _closed;
    private _closing;
    private timer;
    private id;
    private will;
    private clean;
    constructor(connection: Connection, server: MQTTServer);
    private setup;
    private handleError;
    private setupTimer;
    private doForward;
    private forward;
    private unsubscribeMapTo;
    private handleConnect;
    private handlePingReq;
    private handlePubAck;
    doSubscribe(s: any, cb: any): void;
    handleEachSub(s: any, cb: any): void;
    handleSubscribe(packet: any): void;
    handlePublish(packet: any): void;
    onNonDisconnectClose(reason: any): void;
    close(callback: any, reason: any): any;
    static calculateGranted(client: any, packet: any): any;
}