import * as fb from 'firebase';

interface Option {
    [key: string]: string;
}
export class Sdk {
    SDK_VERSION: string;
    apps: fb.app.App[] = [];
    User: fb.User;
    initializeApp(cfg: Option, name = '[DEFAULT]'): fb.app.App { return; }
}
export class App {
    options: Option;
    name = 'null';
}
