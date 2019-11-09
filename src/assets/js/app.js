class cSlider {
  constructor(settings) {
    this.settings = cSlider.mergeSettings(settings);
  }

  // default settings

  mergeSettings = function(userSettings) {
    let settings = {
      selector: '.cSlider',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      loop: false,
      onInit: () => {},
      onChange: () => {}
    }
  }
}
