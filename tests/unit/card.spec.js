import Vue from "vue";
import { expect } from "chai";
import Card from "@/components/card.vue";

describe("Card", () => {
  it("should be datas", () => {
    const container = document.createElement("div");
    const cardComponent = Vue.extend(Card);
    const vm = new cardComponent({
      propsData: {
        item: [
          {
            id: 1,
            name: "Şampuan",
            price: "13",
            currency: "TRY",
            image:
              "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321"
          }
        ]
      }
    });
    vm.$mount(container);
    expect(vm.item.length).to.equal(1);
  });
});
