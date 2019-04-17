import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';

import { App } from '@chakray/fbc';
import { environment as env } from '@mod/environments/environment';

export function fblib() {
  return firebase;
}
export const apps: App[] = [{ options: env.firebase, name: 'main' }];
