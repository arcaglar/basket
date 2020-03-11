import Vue from "vue";
import { expect } from "chai";
import Order from "@/views/Order.vue";

describe("Order", () => {
  it("should be order list", () => {
    const container = document.createElement("div");
    const orderComponent = Vue.extend(Order);
    const vm = new orderComponent({
      data() {
        return {
          basket: [
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
    expect(vm.basket.length).to.equal(1);
    expect(vm.$el.querySelectorAll(".item-list__item").length).to.equal(1);
  });
});
