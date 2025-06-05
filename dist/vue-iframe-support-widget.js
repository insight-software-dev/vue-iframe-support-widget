import { resolveComponent as r, createElementBlock as _, openBlock as p, createVNode as i, createBlock as h, createCommentVNode as k, withCtx as s, createElementVNode as l } from "vue";
const f = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [c, o] of e)
    t[c] = o;
  return t;
}, b = {
  name: "SupportWidget",
  components: {},
  props: {
    supportFormUrl: {
      type: String
    },
    documentationUrl: {
      type: String
    }
  },
  data() {
    return {
      hideSupportCard: !0
    };
  },
  computed: {
    helpItems() {
      return [
        {
          label: "Documentation",
          icon: "pi pi-book",
          tooltipOptions: {
            key: "Docs",
            position: "left"
          },
          command: () => {
            window.open(this.documentationUrl, "_blank");
          }
        },
        {
          label: "Support Desk",
          icon: "pi pi-question",
          command: () => {
            this.hideSupportCard = !1;
          }
        }
      ];
    }
  }
}, C = ["src"], S = { class: "flex justify-content-end gap-0" };
function g(n, e, t, c, o, d) {
  const a = r("SpeedDial"), u = r("Button"), m = r("Card");
  return p(), _("div", null, [
    i(a, {
      model: d.helpItems,
      direction: "up",
      showIcon: "pi pi-question",
      class: "speed-dial-style",
      "button-class": "button-size"
    }, null, 8, ["model"]),
    o.hideSupportCard ? k("", !0) : (p(), h(m, {
      key: 0,
      class: "clickup-embed-card"
    }, {
      content: s(() => [
        l("iframe", {
          class: "clickup-embed clickup-dynamic-height",
          src: t.supportFormUrl,
          onwheel: "",
          width: "100%",
          height: "850px",
          style: { background: "transparent", border: "1px solid #ccc" }
        }, null, 8, C)
      ]),
      footer: s(() => [
        l("div", S, [
          i(u, {
            label: "Close",
            icon: "pi pi-times",
            onClick: e[0] || (e[0] = (y) => o.hideSupportCard = !0)
          })
        ])
      ]),
      _: 1
    }))
  ]);
}
const x = /* @__PURE__ */ f(b, [["render", g], ["__scopeId", "data-v-9a4285a7"]]);
export {
  x as SupportWidget
};
