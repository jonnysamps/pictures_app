export class Picture {
  constructor(
    public id: string,
    public originUrl: string,
    public width: number,
    public height: number,
    public cacheUrl: String = null
  ) { }
}