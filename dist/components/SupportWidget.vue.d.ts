declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    supportFormUrl: {
        type: StringConstructor;
    };
    documentationUrl: {
        type: StringConstructor;
    };
}>, {}, {
    hideSupportCard: boolean;
}, {
    helpItems(): ({
        label: string;
        icon: string;
        tooltipOptions: {
            key: string;
            position: string;
        };
        command: () => void;
    } | {
        label: string;
        icon: string;
        command: () => void;
        tooltipOptions?: undefined;
    })[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    supportFormUrl: {
        type: StringConstructor;
    };
    documentationUrl: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
