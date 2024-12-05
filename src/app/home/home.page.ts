import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { Device } from '@capacitor/device';

interface DeviceInfo {
  model: string;
  platform: string;
  operatingSystem: string;
  osVersion: string;
  manufacturer: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle
  ],
})
export class HomePage {
  deviceInfo?: DeviceInfo;

  constructor() {}

  async getDeviceInfo() {
    const info = await Device.getInfo();
    this.deviceInfo = {
      model: info.model,
      platform: info.platform,
      operatingSystem: info.operatingSystem,
      osVersion: info.osVersion,
      manufacturer: info.manufacturer
    };
  }
}
