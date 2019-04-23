// firebase stuff
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';

export function fblib() {
  return firebase;
}

// firebase wrapper
import { App } from '@chakray/fbc';

// app settings
import { environment as env } from '@mod/environments/environment';
export const apps: App[] = [{ options: env.firebase, name: 'main' }];
