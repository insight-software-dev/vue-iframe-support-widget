import { resolveComponent as r, createElementBlock as _, openBlock as c, createVNode as i, createBlock as h, createCommentVNode as k, withCtx as s, createElementVNode as l } from "vue";
const f = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [p, o] of e)
    t[p] = o;
  return t;
}, C = {
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
}, S = ["src"], b = { class: "flex justify-content-end gap-0" };
function g(n, e, t, p, o, d) {
  const a = r("SpeedDial"), m = r("Button"), u = r("Card");
  return c(), _("div", null, [
    i(a, {
      model: d.helpItems,
      direction: "up",
      showIcon: "pi pi-question",
      style: { position: "fixed", bottom: "2rem", right: "2rem" }
    }, null, 8, ["model"]),
    o.hideSupportCard ? k("", !0) : (c(), h(u, {
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
        }, null, 8, S)
      ]),
      footer: s(() => [
        l("div", b, [
          i(m, {
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
const v = /* @__PURE__ */ f(C, [["render", g], ["__scopeId", "data-v-d605e36e"]]);
export {
  v as SupportWidget
};
