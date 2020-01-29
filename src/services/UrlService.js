export default class UrlService {
  constructor(resource) {
    this.resource = resource("url");
  }

  shorter(urlOriginal) {
    return this.resource.save(urlOriginal);
  }
}
