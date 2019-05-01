/**
 * This argument is empty. This is for consistency so `pluginOptions` is always second argument.
 * @typedef {undefined} emptyArg
 */

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Called when the Gatsby browser runtime first starts.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onClientEntry = () => {
 *   console.log("We've started!")
 *   callAnalyticsAPI()
 * }
 */
exports.onClientEntry = true

/**
 * Called when the initial (but not subsequent) render of Gatsby App is done on the client.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onInitialClientRender = () => {
 *   console.log("ReactDOM.render has executed")
 * }
 */
exports.onInitialClientRender = true

/**
 * Called when changing location is started.
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object|null} $0.prevLocation The previous location object
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onPreRouteUpdate = ({ location, prevLocation }) => {
 *   console.log("Gatsby started to change location to", location.pathname)
 *   console.log("Gatsby started to change location from", prevLocation ? prevLocation.pathname : null)
 * }
 */
exports.onPreRouteUpdate = true

/**
 * Called when changing location is longer than 1 second.
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object} $0.action The "action" that caused the route change
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onRouteUpdateDelayed = () => {
 *   console.log("We can show loading indicator now")
 * }
 */
exports.onRouteUpdateDelayed = true

/**
 * Called when the user changes routes
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object|null} $0.prevLocation The previous location object
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onRouteUpdate = ({ location, prevLocation }) => {
 *   console.log('new pathname', location.pathname)
 *   console.log('old pathname', prevLocation ? prevLocation.pathname : null)
 *
 *   // Track pageview with google analytics
 *   window.ga(
 *     `set`,
 *     `page`,
 *     location.pathname + location.search + location.hash,
 *   )
 *   window.ga(`send`, `pageview`)
 * }
 */
exports.onRouteUpdate = true

/**
 * Allow a plugin to decide if the scroll position should update or
 * not on a route change.
 * @param {object} $0
 * @param {object} $0.prevRouterProps The previous state of the router before the route change.
 * @param {object} $0.routerProps The current state of the router.
 * @param {string} $0.pathname The new pathname (for backwards compatibility with v1).
 * @param {function} $0.getSavedScrollPosition Takes a location and returns the
 * coordinates of the last scroll position for that location, or `null`. Gatsby
 * saves scroll positions for each route in `SessionStorage`, so they are
 * available after page reload.
 * @returns {(boolean|string|Array)} Should return either an [x, y] Array of
 * coordinates to scroll to, a string of the `id` or `name` of an element to
 * scroll to, `false` to not update the scroll position, or `true` for the
 * default behavior.
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.shouldUpdateScroll = ({
 *   routerProps: { location },
 *   getSavedScrollPosition
 * }) => {
 *   const currentPosition = getSavedScrollPosition(location)
 *   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })
 *
 *   window.scrollTo(...(currentPosition || [0, 0]))
 *
 *   return false
 * }
 */
exports.shouldUpdateScroll = true

/**
 * Allow a plugin to register a Service Worker. Should be a function that returns true.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @returns {boolean} Should Gatsby register `/sw.js` service worker
 * @example
 * exports.registerServiceWorker = () => true
 */
exports.registerServiceWorker = true

/**
 * Allow a plugin to replace the page component renderer.
 * @deprecated Use [wrapPageElement](#wrapPageElement) to decorate page element.
 * @param {object} $0
 * @param {object} $0.props The props of the page.
 * @param {object} $0.loader The gatsby loader.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Replaced default page renderer
 */
exports.replaceComponentRenderer = true

/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in SSR API](/docs/ssr-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout")
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */
exports.wrapPageElement = true

/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in SSR API](/docs/ssr-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */
exports.wrapRootElement = true

/**
 * Called when prefetching for a pathname is triggered. Allows
 * for plugins with custom prefetching logic.
 * @param {object} $0
 * @param {string} $0.pathname The pathname whose resources should now be prefetched
 * @param {function} $0.getResourcesForPathname Function for fetching resources related to pathname
 * @param {pluginOptions} pluginOptions
 */
exports.onPrefetchPathname = true

/**
 * Called when prefetching for a pathname is successful. Allows
 * for plugins with custom prefetching logic.
 * @param {object} $0
 * @param {string} $0.pathname The pathname whose resources have now been prefetched
 * @param {function} $0.getResourceURLsForPathname Function for fetching URLs for resources related to the pathname
 * @param {pluginOptions} pluginOptions
 */
exports.onPostPrefetchPathname = true

/**
 * Plugins can take over prefetching logic. If they do, they should call this
 * to disable the now duplicate core prefetching logic.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @returns {boolean} Should disable core prefetching
 * @example
 * exports.disableCorePrefetching = () => true
 */
exports.disableCorePrefetching = true

/**
 * Allow a plugin to replace the `ReactDOM.render`/`ReactDOM.hydrate` function call by a custom renderer.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @returns {Function} This method should return a function with same signature as `ReactDOM.render()`
 *
 * _Note:_ it's very important to call the `callback` after rendering, otherwise Gatsby will not be able to call `onInitialClientRender`
 * @example
 * exports.replaceHydrateFunction = () => {
 *   return (element, container, callback) => {
 *     console.log("rendering!");
 *     ReactDOM.render(element, container, callback);
 *   };
 * };
 */
exports.replaceHydrateFunction = true

/**
 * Inform plugins when a service worker has been installed.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerInstalled = true

/**
 * Inform plugins of when a service worker has an update available.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerUpdateFound = true

/**
 * Inform plugins when a service worker has been updated in the background
 * and the page is ready to reload to apply changes.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerUpdateReady = true

/**
 * Inform plugins when a service worker has become active.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerActive = true

/**
 * Inform plugins when a service worker is redundant.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerRedundant = true
