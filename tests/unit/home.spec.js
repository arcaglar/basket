import Vue from "vue";
import { expect } from "chai";
import Home from "@/views/Home.vue";

describe("Home", () => {
  it("should be list", () => {
    const container = document.createElement("div");
    const homeComponent = Vue.extend(Home);
    const vm = new homeComponent({
      data() {
        return {
          data: [
            {
              id: 1,
              name: "Şampuan",
              price: "13",
              currency: "TRY",
              image:
                "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321"
            }
          ]
        };
      }
    });
    vm.$mount(container);
    expect(vm.data.length).to.equal(1);
    expect(vm.$el.querySelectorAll(".item-list__item").length).to.equal(1);
  });
});
