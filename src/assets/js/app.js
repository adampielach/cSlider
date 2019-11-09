class CSlider {
  constructor(settings) {
    this.settings = CSlider.mergeSettings(settings);

    this.selector =
      typeof this.settings.selector === "string"
        ? document.querySelector(this.settings.selector)
        : this.settings.selector;
    if (this.selector === null) {
      throw new Error("Selector '" + this.selector + "' doesn't exist!");
    }

    // general settings
    this.selectorWidth = this.selector.clientWidth;
    this.selectorChildren = Array.prototype.slice.call(this.selector.children);
    this.currentIndex = this.settings.startIndex % this.selectorChildren.length;

    this.init();
  }

  // default settings

  static mergeSettings(userSettings) {
    let settings = {
      selector: ".cSlider",
      duration: 200,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      loop: false,
      onInit: () => {},
      onChange: () => {}
    };

    for (let attrname in userSettings) {
      settings[attrname] = userSettings[attrname];
    }

    return settings;
  }

  init() {}
}

let s = new CSlider({ selector: ".c-slide" });
console.log(s);
