App.info({
  id: 'com.poeticsystems.XXX',
  name: 'XXX',
  author: 'Poetic Systems',
  email: 'contact@poeticsystems.com',
  website: 'poeticsystems.com',
  version: '1.0.0',
});

// SIZE: http://docs.meteor.com/api/mobile-config.html#App-icons
App.icons({
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'iphone_3x': 'resources/icons/iphone_3x.png',
  'ipad': 'resources/icons/ipad.png',
  'ipad_2x': 'resources/icons/ipad_2x.png',
  'ipad_pro': 'resources/icons/ipad_pro.png',
  'ios_settings': 'resources/icons/ios_settings.png',
  'ios_settings_2x': 'resources/icons/ios_settings_2x.png',
  'ios_settings_3x': 'resources/icons/ios_settings_3x.png',
  'ios_spotlight': 'resources/icons/ios_spotlight.png',
  'ios_spotlight_2x': 'resources/icons/ios_spotlight_2x.png',

  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png',
  'android_xxhdpi': 'resources/icons/android_xxhdpi.png',
  'android_xxxhdpi': 'resources/icons/android_xxxhdpi.png',
});

// SIZE: http://docs.meteor.com/api/mobile-config.html#App-launchScreens
App.launchScreens({
  'iphone_2x': 'resources/launch-screens/iphone_2x.png',
  'iphone5': 'resources/launch-screens/iphone5.png',
  'iphone6': 'resources/launch-screens/iphone6.png',
  'iphone6p_portrait': 'resources/launch-screens/iphone6p_portrait.png',
  'iphone6p_landscape': 'resources/launch-screens/iphone6p_landscape.png',
  'ipad_portrait': 'resources/launch-screens/ipad_portrait.png',
  'ipad_portrait_2x': 'resources/launch-screens/ipad_portrait_2x.png',
  'ipad_landscape': 'resources/launch-screens/ipad_landscape.png',
  'ipad_landscape_2x': 'resources/launch-screens/ipad_landscape_2x.png',

  'android_mdpi_portrait': 'resources/launch-screens/android_mdpi_portrait.png',
  'android_hdpi_portrait': 'resources/launch-screens/android_hdpi_portrait.png',
  'android_xhdpi_portrait': 'resources/launch-screens/android_xhdpi_portrait.png',
  'android_xxhdpi_portrait': 'resources/launch-screens/android_xxhdpi_portrait.png',
});

App.setPreference('Orientation', 'portrait');

App.accessRule('*');
App.accessRule('content://*');
App.accessRule('http://*');
App.accessRule('https://*');
