import { resolveComponent as r, createElementBlock as _, openBlock as i, createVNode as p, createBlock as h, createCommentVNode as f, withCtx as s, createElementVNode as l } from "vue";
const k = (n, e) => {
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
  return i(), _("div", null, [
    p(a, {
      model: d.helpItems,
      direction: "up",
      showIcon: "pi pi-question",
      class: "speed-dial-style",
      "button-class": "button-size",
      style: { position: "fixed", bottom: "2rem", right: "2rem" }
    }, null, 8, ["model"]),
    o.hideSupportCard ? f("", !0) : (i(), h(m, {
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
          p(u, {
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
const v = /* @__PURE__ */ k(b, [["render", g], ["__scopeId", "data-v-f998e8f9"]]);
export {
  v as SupportWidget
};
