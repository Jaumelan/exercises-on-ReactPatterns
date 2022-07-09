import {
  ExtensibleStyle,
  CompoundPattern,
  RenderPropsPage,
  ControlPropsPage,
  PropsGettersPage,
  HOCPage,
  PropsGettersWithRenderPropsPage,
  WelcomePage,
} from "./pages";

const routes = [
  { path: "/", label: "Welcome", Component: WelcomePage, exact: true },
  {
    path: "/render-props",
    label: "Render Props",
    Component: RenderPropsPage,
    element: true,
    exact: true,
  },
  {
    path: "/control-props",
    label: "Control Props",
    Component: ControlPropsPage,
    exact: true,
  },
  {
    path: "/props-getters",
    label: "Props Getters",
    Component: PropsGettersPage,
    exact: true,
  },
  {
    path: "/props-getters-with-render-props",
    label: "Props Getters with Render Props",
    Component: PropsGettersWithRenderPropsPage,
    exact: true,
  },
  { path: "/hoc", label: "HOC", Component: HOCPage, exact: true },
  {
    path: "/extensible-style",
    label: "Extensible Style",
    Component: ExtensibleStyle,
    exact: true,
  },
  {
    path: "/compound-pattern",
    label: "Compound Pattern",
    Component: CompoundPattern,
    exact: true,
  },
];
export default routes;
