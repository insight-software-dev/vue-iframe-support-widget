import { SpeedDial, Card, Button } from 'primevue';
import { resolveComponent, createElementBlock, openBlock, createVNode, createBlock, createCommentVNode, withCtx, createElementVNode } from 'vue';

var script = {
  name: 'SupportWidget',
  components: {
    Button,
    Card,
    SpeedDial
  },
  props: {
    supportFormUrl: {
      type: String
    },
    documentationUrl: {
      type: String
    },
    buttonClass: {
      type: String
    },
    iframeClass: {
      type: String,
    }
  },
  data() {
    return {
      hideSupportCard: true
    }
  },
  computed: {
    helpItems() {
      return [
        {
          label: 'Documentation',
          icon: 'pi pi-book',
          tooltipOptions: {
            key: 'Docs',
            position: 'left'
          },
          command: () => {
            window.open(this.documentationUrl, '_blank');
          }
        },
        {
          label: 'Support Desk',
          icon: 'pi pi-question',
          command: () => {
            this.hideSupportCard = false;
          }
        }
      ]
    }
  }
};

const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "flex justify-content-end" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SpeedDial = resolveComponent("SpeedDial");
  const _component_Button = resolveComponent("Button");
  const _component_Card = resolveComponent("Card");

  return (openBlock(), createElementBlock("div", null, [
    createVNode(_component_SpeedDial, {
      model: $options.helpItems,
      direction: "up",
      showIcon: "pi pi-question",
      style: {"position":"fixed","bottom":"2rem","right":"2rem"},
      class: "p-button-secondary"
    }, null, 8 /* PROPS */, ["model"]),
    (!$data.hideSupportCard)
      ? (openBlock(), createBlock(_component_Card, {
          key: 0,
          class: "embed-card"
        }, {
          content: withCtx(() => [
            createElementVNode("iframe", {
              class: "clickup-embed clickup-dynamic-height",
              src: $props.supportFormUrl,
              onwheel: "",
              width: "100%",
              height: "850px",
              style: {"background":"transparent","border":"1px solid #ccc"}
            }, null, 8 /* PROPS */, _hoisted_1)
          ]),
          footer: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              createVNode(_component_Button, {
                label: "Close",
                icon: "pi pi-times",
                onClick: _cache[0] || (_cache[0] = $event => ($data.hideSupportCard = true)),
                class: "p-button-secondary"
              })
            ])
          ]),
          _: 1 /* STABLE */
        }))
      : createCommentVNode("v-if", true)
  ]))
}

script.render = render;
script.__scopeId = "data-v-e9b52b6c";
script.__file = "src/SupportWidget.vue";

var components = { SupportWidget: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
