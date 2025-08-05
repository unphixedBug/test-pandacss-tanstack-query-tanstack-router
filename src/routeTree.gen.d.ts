import { Route as rootRouteImport } from "./routes/__root";
import { Route as IndexRouteImport } from "./routes";
import { Route as CountryCountryIdRouteImport } from "./routes/country.$countryId";
declare const IndexRoute: import("@tanstack/router-core").Route<import("@tanstack/react-router").RootRoute<undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>, "/Index" | "/country/$countryId", "/Index" | "/country/$countryId", keyof FileRoutesByPath, "/Index" | "/country/$countryId", undefined, import("@tanstack/router-core").ResolveParams<"/Index" | "/country/$countryId">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>;
declare const CountryCountryIdRoute: import("@tanstack/router-core").Route<import("@tanstack/react-router").RootRoute<undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>, "/country/$countryId", "/country/$countryId", "/country/$countryId", "/country/$countryId", undefined, import("@tanstack/router-core").ResolveParams<"/country/$countryId">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown>;
export interface FileRoutesByFullPath {
    "/Index": typeof IndexRoute;
    "/country/$countryId": typeof CountryCountryIdRoute;
}
export interface FileRoutesByTo {
    "/Index": typeof IndexRoute;
    "/country/$countryId": typeof CountryCountryIdRoute;
}
export interface FileRoutesById {
    __root__: typeof rootRouteImport;
    "/Index": typeof IndexRoute;
    "/country/$countryId": typeof CountryCountryIdRoute;
}
export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath;
    fullPaths: "/Index" | "/country/$countryId";
    fileRoutesByTo: FileRoutesByTo;
    to: "/Index" | "/country/$countryId";
    id: "__root__" | "/Index" | "/country/$countryId";
    fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute;
    CountryCountryIdRoute: typeof CountryCountryIdRoute;
}
declare module "@tanstack/react-router" {
    interface FileRoutesByPath {
        "/Index": {
            id: "/Index";
            path: "/Index";
            fullPath: "/Index";
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        "/country/$countryId": {
            id: "/country/$countryId";
            path: "/country/$countryId";
            fullPath: "/country/$countryId";
            preLoaderRoute: typeof CountryCountryIdRouteImport;
            parentRoute: typeof rootRouteImport;
        };
    }
}
export declare const routeTree: import("@tanstack/router-core").Route<any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, RootRouteChildren, FileRouteTypes>;
export {};
