export class User {
  public name: string;
  public email: string;
  public avatar: string;
  public creationDate: Date;
  public preferredLang: string;
  public occupation: string;
  public connected = false;

  public constructor(data: any = {}) {
    this.name = data.name || '';
    this.email = data.email || '';
    this.avatar = data.avatar || '';
    this.occupation = data.occupation || '';
    this.creationDate = data.creation_date || null;
    this.preferredLang = data.preferredLang || null;
    this.connected = data.connected || false;
  }

  public getName() {
    return this.name;
  }
}
