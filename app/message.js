'use strict';

import {I18n} from "./i18next";
import _ from "lodash"

export default class Message {
  constructor(params) {
    this.params = params;
  }

  text() {
    const type = this.params.event.type;

    switch (type) {
      case "channel_created":
        return _.sample(I18n.t(this.params.event.type, {returnObjects: true, name: this.params.event.channel.name}));
      case "emoji_changed":
        if (this.params.event.subtype === "add") {
          return I18n.t([this.params.event.type, this.params.event.subtype].join('.'), {name: this.params.event.name});
        }
        break;
    }
  }
}

