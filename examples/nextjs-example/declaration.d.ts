declare global {
    interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};

declare module "*.svg" {
    const content: any;
    export default content;
}
