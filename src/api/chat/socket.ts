import {io, Socket} from 'socket.io-client';
import {MAIN_URL} from '@constants';
class SocketService {
  private io: Socket;
  constructor() {
    this.io = io(MAIN_URL);
  }

  public getSocket() {
    return this.io;
  }

  public disconnect() {
    this.io.disconnect();
  }

  public connect() {
    this.io.connect();
  }

  public on(event: string, callback: (...args: any[]) => void) {
    this.io.on(event, callback);
  }

  public emit(event: string, data: any) {
    this.io.emit(event, data);
  }
}

export default new SocketService();
