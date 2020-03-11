import Vue from "vue";
import { expect } from "chai";
import Header from "@/components/header.vue";

describe("Header", () => {
  it("should be instantiated", () => {
    const container = document.createElement("div");
    const headerComponent = Vue.extend(Header);
    const vm = new headerComponent();

    vm.$mount(container);

    expect(vm.$el.firstChild.className).to.equal("header__logo");
  });
});
