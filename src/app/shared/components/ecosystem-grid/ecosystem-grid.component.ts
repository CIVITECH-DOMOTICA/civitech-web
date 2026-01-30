import { Component, OnInit } from '@angular/core';

interface Marca {
  nombre: string;
  logo: string;
  url?: string;
}

interface Categoria {
  titulo: string;
  icono: string;
  marcas: Marca[];
}

@Component({
  selector: 'app-ecosystem-grid',
  templateUrl: './ecosystem-grid.component.html',
  styleUrls: ['./ecosystem-grid.component.scss']
})
export class EcosystemGridComponent implements OnInit {

  categorias: Categoria[] = [
    {
      titulo: 'Cerebro & Voz / Redes',
      icono: 'fa-brain',
      marcas: [
        { nombre: 'Home Assistant', logo: 'assets/logos/home-assistant.svg', url: 'https://www.home-assistant.io' },
        { nombre: 'Google Home', logo: 'assets/logos/google_home_official.png', url: 'https://home.google.com' },
        { nombre: 'Amazon Alexa', logo: 'assets/logos/alexa_official.png', url: 'https://alexa.amazon.com' },
        { nombre: 'Apple HomeKit', logo: 'assets/logos/apple_home_official.png', url: 'https://www.apple.com/ios/home/' }
      ]
    },
    {
      titulo: 'Climatización & Confort',
      icono: 'fa-snowflake',
      marcas: [
        { nombre: 'Daikin', logo: 'assets/logos/daikin.png', url: 'https://www.daikin.eu' },
        { nombre: 'Toshiba', logo: 'assets/logos/toshiba.svg', url: 'https://www.toshiba-aircon.co.uk' },
        { nombre: 'Airzone', logo: 'assets/logos/airzone.svg', url: 'https://www.airzonecontrol.com' }, // Placeholder o descargado
        { nombre: 'Mitsubishi', logo: 'assets/logos/mitsubishi.png', url: 'https://es.mitsubishielectric.com' },
        { nombre: 'Netatmo', logo: 'assets/logos/netatmo_vector.svg', url: 'https://www.netatmo.com' },
        { nombre: 'Somfy', logo: 'assets/logos/somfy_real.png', url: 'https://www.somfy.es' }
      ]
    },
    {
      titulo: 'Energía & EV',
      icono: 'fa-bolt',
      marcas: [
        { nombre: 'Tesla', logo: 'assets/logos/tesla.png', url: 'https://www.tesla.com' },
        { nombre: 'V2C', logo: 'assets/logos/v2c_real.png', url: 'https://v2charge.com' },
        { nombre: 'Solarman', logo: 'assets/logos/solarman.svg', url: 'https://www.solarmanpv.com' },
        { nombre: 'Victron', logo: 'assets/logos/victron.svg', url: 'https://www.victronenergy.com' },
        { nombre: 'Fronius', logo: 'assets/logos/fronius_real.png', url: 'https://www.fronius.com' },
        { nombre: 'Huawei', logo: 'assets/logos/huawei.svg', url: 'https://solar.huawei.com' },
        { nombre: 'NUT (UPS)', logo: 'assets/logos/nut_real.png', url: 'https://networkupstools.org' }
      ]
    },
    {
      titulo: 'Smart Home & IoT',
      icono: 'fa-wifi',
      marcas: [
        { nombre: 'SmartThings', logo: 'assets/logos/smartthings_official.png', url: 'https://www.smartthings.com' },
        { nombre: 'Philips Hue', logo: 'assets/logos/philips_hue.png', url: 'https://www.philips-hue.com' },
        { nombre: 'IKEA Smart', logo: 'assets/logos/ikea.svg', url: 'https://www.ikea.com' },
        { nombre: 'Bosch', logo: 'assets/logos/bosch_alarm_real.png', url: 'https://www.bosch-home.es' },
        { nombre: 'Ajax Systems', logo: 'assets/logos/ajax_real.png', url: 'https://ajax.systems' },
        { nombre: 'LG webOS', logo: 'assets/logos/lg_webos_real.png', url: 'https://www.lg.com' },
        { nombre: 'TP-Link', logo: 'assets/logos/tplink_real.png', url: 'https://www.tp-link.com' },
        { nombre: 'Sonos', logo: 'assets/logos/sonos.png', url: 'https://www.sonos.com' },
        { nombre: 'Yale', logo: 'assets/logos/yale.svg', url: 'https://www.yalehome.com' },
        { nombre: 'Shelly', logo: 'assets/logos/shelly.png', url: 'https://www.shelly.com' },
        { nombre: 'Nuki', logo: 'assets/logos/nuki_real.png', url: 'https://nuki.io' },
        { nombre: 'SwitchBot', logo: 'assets/logos/switchbot_real.png', url: 'https://www.switch-bot.com' },
        { nombre: 'Reolink', logo: 'assets/logos/reolink.png', url: 'https://reolink.com' },
        { nombre: 'Aqara', logo: 'assets/logos/aqara_official.png', url: 'https://www.aqara.com' },
        { nombre: 'Schneider', logo: 'assets/logos/schneider.svg', url: 'https://www.se.com' },
        { nombre: 'Telegram', logo: 'assets/logos/telegram_clean.png?v=fixed', url: 'https://telegram.org' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Fallback si falla una imagen externa (como las de wikipedia)
  handleImageError(event: any) {
    event.target.style.display = 'none'; // Ocultar imagen rota
    // Podríamos mostrar un texto alternativo o icono si quisiéramos
  }

}
