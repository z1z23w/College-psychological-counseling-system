(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:edd2fd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00cfc92782635b92b803fc2bde935ced14749c2d6d":"getArticles"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getArticles",
    ()=>getArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getArticles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00cfc92782635b92b803fc2bde935ced14749c2d6d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getArticles"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4g55So5oi3566h55CGICjnrqHnkIblkZjnlKggLSDkuYvliY3kuKLlpLHnmoTpg6jliIYpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLojrflj5bnlKjmiLflpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KFwidXNlcm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBjb2xsZWdlID0gZm9ybURhdGEuZ2V0KFwiY29sbGVnZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIGNvbGxlZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsIC8vIOm7mOiupOWvhueggVxyXG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vYXBpLmRpY2ViZWFyLmNvbS83LngvYXZhdGFhYXJzL3N2Zz9zZWVkPSR7bmFtZX1gXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yib5bu65aSx6LSl77yM5a2m5Y+35Y+v6IO95bey5a2Y5ZyoXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAyLiDorqTor4HkuI7mn6Xor6IgKOmAmueUqClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyDnmbvlvZXpqozor4FcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luQWN0aW9uKHVzZXJuYW1lOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcm5hbWUsIHJvbGUgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLnlKjmiLfkuI3lrZjlnKjmiJbop5LoibLplJnor69cIiB9O1xyXG4gICAgXHJcbiAgICAvLyDov5Tlm57nlKjmiLfkv6Hmga/vvIjkuI3lkKvlr4bnoIHvvIlcclxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnVzZXJJbmZvIH0gPSB1c2VyO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlckluZm8gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaVsOaNruW6k+i/nuaOpeWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDojrflj5bmiYDmnInlkqjor6LluIhcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdW5zZWxvcnMoKSB7XHJcbiAgcmV0dXJuIGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7IHJvbGU6ICdjb3Vuc2Vsb3InIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDMuIOmihOe6puezu+e7nyAoQXBwb2ludG1lbnRzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIOWIm+W7uumihOe6plxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXBwb2ludG1lbnQoc3R1ZGVudElkOiBzdHJpbmcsIGNvdW5zZWxvcklkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgdGltZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3R1ZGVudElkLFxyXG4gICAgICAgIGNvdW5zZWxvcklkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUpLFxyXG4gICAgICAgIHRpbWUsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgbm90ZXM6ICflrabnlJ/lj5HotbfpooTnuqYnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc3R1ZGVudC9ib29raW5nXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Rhc2hib2FyZFwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi6aKE57qm5Yib5bu65aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOiOt+WPlumihOe6puWIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwb2ludG1lbnRzKHVzZXJJZDogc3RyaW5nLCByb2xlOiBzdHJpbmcpIHtcclxuICBjb25zdCB3aGVyZUNvbmRpdGlvbiA9IHJvbGUgPT09ICdzdHVkZW50JyA/IHsgc3R1ZGVudElkOiB1c2VySWQgfSA6IHsgY291bnNlbG9ySWQ6IHVzZXJJZCB9O1xyXG4gIFxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHdoZXJlQ29uZGl0aW9uLFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBzdHVkZW50OiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlIH0gfSxcclxuICAgICAgY291bnNlbG9yOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlIH0gfVxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YS5tYXAoYXB0ID0+ICh7XHJcbiAgICAuLi5hcHQsXHJcbiAgICBkYXRlOiBhcHQuZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgY3JlYXRlZEF0OiBhcHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICB9KSk7XHJcbn1cclxuXHJcbi8vIOabtOaWsOmihOe6pueKtuaAgVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwb2ludG1lbnRTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcclxuICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICBkYXRhOiB7IHN0YXR1cyB9XHJcbiAgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Rhc2hib2FyZFwiKTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Jvb2tpbmdcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gNC4g5paH56ug57O757ufIChBcnRpY2xlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXJ0aWNsZXMoKSB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBwcmlzbWEuYXJ0aWNsZS5maW5kTWFueSh7XHJcbiAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cclxuICB9KTtcclxuICByZXR1cm4gYXJ0aWNsZXMubWFwKGEgPT4gKHtcclxuICAgIC4uLmEsXHJcbiAgICBjcmVhdGVkQXQ6IGEuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBcnRpY2xlKGRhdGE6IGFueSkge1xyXG4gIGF3YWl0IHByaXNtYS5hcnRpY2xlLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcjogJ+euoeeQhuWRmCcsXHJcbiAgICAgIHZpZXdzOiAwLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTIwOTk3NDQzMS0yNzYxZWI0M2E3Njg/dz04MDAmcT04MFwiXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvc3R1ZGVudC9hcnRpY2xlc1wiKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA1LiDmtYvor4Tns7vnu58gKEFzc2Vzc21lbnRzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlQXNzZXNzbWVudChzdHVkZW50SWQ6IHN0cmluZywgc2NvcmU6IG51bWJlciwgcmVzdWx0OiBzdHJpbmcpIHtcclxuICBhd2FpdCBwcmlzbWEuYXNzZXNzbWVudC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBzdHVkZW50SWQsXHJcbiAgICAgIHR5cGU6ICdQSFEtOScsXHJcbiAgICAgIHNjb3JlLFxyXG4gICAgICByZXN1bHRcclxuICAgIH1cclxuICB9KTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Fzc2Vzc21lbnRcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXNzbWVudEhpc3Rvcnkoc3R1ZGVudElkOiBzdHJpbmcpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHsgc3R1ZGVudElkIH0sXHJcbiAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBkYXRhLm1hcChhID0+ICh7XHJcbiAgICAuLi5hLFxyXG4gICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXJ0aWNsZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcnRpY2xlLmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vY29udGVudFwiKTsgLy8g5Yi35paw5ZCO5Y+w5YiX6KGoXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2FydGljbGVzXCIpOyAvLyDliLfmlrDlrabnlJ/nq6/liJfooahcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWIoOmZpOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ29uc3VsdGF0aW9uUmVjb3JkKGlkOiBzdHJpbmcsIG5vdGVzOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFwcG9pbnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgbm90ZXMsIFxyXG4gICAgICAgIHN0YXR1czogJ2NvbXBsZXRlZCcgLy8g5L+d5a2Y5ZCO6Ieq5Yqo5qCH6K6w5Li64oCc5bey5a6M5oiQL+W+heW9kuaho+KAnVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NvdW5zZWxvci9jYXNlc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuabtOaWsOiusOW9leWksei0pTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuS/neWtmOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDliKDpmaTnlKjmiLdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yig6Zmk5aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOabtOaWsOeUqOaIt1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcihpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoXCJ1c2VybmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgcm9sZSA9IGZvcm1EYXRhLmdldChcInJvbGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGNvbGxlZ2UgPSBmb3JtRGF0YS5nZXQoXCJjb2xsZWdlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHJvbGUsXHJcbiAgICAgICAgY29sbGVnZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vdXNlcnNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLmm7TmlrDlpLHotKXvvIzlrablj7flj6/og73lhrLnqoFcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluRGFzaGJvYXJkU3RhdHMoKSB7XHJcbiAgLy9ub1N0b3JlKCk7IC8vIPCfiLIg56aB55So57yT5a2Y77yM56Gu5L+d5pWw5o2u5a6e5pe2XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbc3R1ZGVudENvdW50LCBhcHBvaW50bWVudENvdW50LCBjb21wbGV0ZWRDb3VudCwgcmF3Q2hhcnREYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgLy8gMS4g5rOo5YaM5a2m55Sf5oC75pWwXHJcbiAgICAgIHByaXNtYS51c2VyLmNvdW50KHsgXHJcbiAgICAgICAgd2hlcmU6IHsgcm9sZTogJ3N0dWRlbnQnIH0gXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgLy8gMi4g5pyJ5pWI6aKE57qm5oC76YePICjlhbPplK7kv67mlLnvvIHvvIHvvIEpXHJcbiAgICAgIC8vIOS7peWJjee7n+iuoeS6hiBwZW5kaW5n77yM546w5Zyo5oiR5Lus5Y+q57uf6K6hICdjb25maXJtZWQnIOWSjCAnY29tcGxldGVkJ1xyXG4gICAgICAvLyDov5nmoLfvvJrlrabnlJ/liJrnlLPor7fml7YocGVuZGluZynkuI3ljaDmlbDvvIzogIHluIjngrnkuoblkIzmhI8oY29uZmlybWVkKeaVsOWtl+aJjeS8miArMVxyXG4gICAgICBwcmlzbWEuYXBwb2ludG1lbnQuY291bnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgaW46IFsnY29uZmlybWVkJywgJ2NvbXBsZXRlZCddIC8vIOKchSDlj6rnrpfigJzlt7Lnoa7orqTigJ3lkozigJzlt7LlrozmiJDigJ3nmoRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgLy8gMy4g5bey5a6M5oiQ6aKE57qmXHJcbiAgICAgIHByaXNtYS5hcHBvaW50bWVudC5jb3VudCh7IFxyXG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ2NvbXBsZXRlZCcgfSBcclxuICAgICAgfSksXHJcblxyXG4gICAgICAvLyA0LiDlm77ooajmlbDmja7mupAgKOWQjOagt+WPque7n+iuoeacieaViOeahClcclxuICAgICAgcHJpc21hLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICBndGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSAtIDYpKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICBpbjogWydjb25maXJtZWQnLCAnY29tcGxldGVkJ10gLy8g4pyFIOWbvuihqOS5n+WPquaYvuekuuiAgeW4iOaOpeWNleWQjueahFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IGRhdGU6IHRydWUgfVxyXG4gICAgICB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8g5Y2x5py65bmy6aKE57uf6K6hICjpooTnlZkpXHJcbiAgICBsZXQgY3Jpc2lzQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIOiuoeeul+e7k+ahiOeOh1xyXG4gICAgY29uc3QgY29tcGxldGlvblJhdGUgPSBhcHBvaW50bWVudENvdW50ID4gMCBcclxuICAgICAgPyBNYXRoLnJvdW5kKChjb21wbGV0ZWRDb3VudCAvIGFwcG9pbnRtZW50Q291bnQpICogMTAwKSArIFwiJVwiIFxyXG4gICAgICA6IFwiMCVcIjtcclxuXHJcbiAgICAvLyDnlJ/miJDlm77ooajmlbDmja5cclxuICAgIGNvbnN0IGNoYXJ0RGF0YSA9IFtdO1xyXG4gICAgY29uc3Qgd2Vla01hcCA9IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDY7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgLSBpKTtcclxuICAgICAgY29uc3QgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICBjb25zdCBkYXkgPSBkLmdldERhdGUoKTtcclxuICAgICAgY29uc3QgZGF0ZUtleSA9IGAke21vbnRofS8ke2RheX1gO1xyXG4gICAgICBjb25zdCB3ZWVrTGFiZWwgPSB3ZWVrTWFwW2QuZ2V0RGF5KCldO1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSByYXdDaGFydERhdGEuZmlsdGVyKGFwdCA9PiB7XHJcbiAgICAgICAgY29uc3QgYXB0RGF0ZSA9IG5ldyBEYXRlKGFwdC5kYXRlKTtcclxuICAgICAgICByZXR1cm4gYXB0RGF0ZS5nZXREYXRlKCkgPT09IGRheSAmJiBhcHREYXRlLmdldE1vbnRoKCkgKyAxID09PSBtb250aDtcclxuICAgICAgfSkubGVuZ3RoO1xyXG5cclxuICAgICAgY2hhcnREYXRhLnB1c2goeyBcclxuICAgICAgICBuYW1lOiBkYXRlS2V5LCBcclxuICAgICAgICBkYXk6IHdlZWtMYWJlbCwgXHJcbiAgICAgICAgdmlzaXRzOiBjb3VudCBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBzdHVkZW50czogc3R1ZGVudENvdW50LFxyXG4gICAgICAgICAgYXBwb2ludG1lbnRzOiBhcHBvaW50bWVudENvdW50LCAvLyDov5nph4znjrDlnKjmmL7npLrnmoTmmK/igJznlJ/mlYjpooTnuqbmlbDigJ1cclxuICAgICAgICAgIGNyaXNpczogY3Jpc2lzQ291bnQsXHJcbiAgICAgICAgICByYXRlOiBjb21wbGV0aW9uUmF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhcnQ6IGNoYXJ0RGF0YVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuiOt+WPlueci+adv+aVsOaNruWksei0pTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWKoOi9veWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDojrflj5bns7vnu5/phY3nva4gKOWmguaenOayoeacieWImeWIm+W7uum7mOiupClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN5c3RlbVNldHRpbmdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY29uZmlnID0gYXdhaXQgcHJpc21hLnN5c3RlbUNvbmZpZy5maW5kRmlyc3QoKTtcclxuICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgIGNvbmZpZyA9IGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7fSAvLyDkvb/nlKjpu5jorqTlgLzliJvlu7pcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb25maWcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuiOt+WPlumFjee9ruWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDmm7TmlrDns7vnu5/phY3nva5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN5c3RlbVNldHRpbmdzKGRhdGE6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDlhYjmib7liLDnrKzkuIDmnaHorrDlvZXnmoQgSURcclxuICAgIGNvbnN0IGZpcnN0ID0gYXdhaXQgcHJpc21hLnN5c3RlbUNvbmZpZy5maW5kRmlyc3QoKTtcclxuICAgIFxyXG4gICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZmlyc3QuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwbGF0Zm9ybU5hbWU6IGRhdGEucGxhdGZvcm1OYW1lLFxyXG4gICAgICAgICAgaG90bGluZTogZGF0YS5ob3RsaW5lLFxyXG4gICAgICAgICAgb3BlbkhvdXJzOiBkYXRhLm9wZW5Ib3VycyxcclxuICAgICAgICAgIG1haW50ZW5hbmNlTW9kZTogZGF0YS5tYWludGVuYW5jZU1vZGUgPT09ICd0cnVlJyB8fCBkYXRhLm1haW50ZW5hbmNlTW9kZSA9PT0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLmnKrmib7liLDphY3nva7orrDlvZVcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMS4g6I635Y+W6IGK5aSp6IGU57O75Lq65YiX6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGF0Q29udGFjdHMoY3VycmVudFVzZXJJZDogc3RyaW5nLCByb2xlOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKHJvbGUgPT09ICdzdHVkZW50Jykge1xyXG4gICAgICAvLyDlpoLmnpzmmK/lrabnlJ/vvIzov5Tlm57miYDmnInlkqjor6LluIhcclxuICAgICAgY29uc3QgY291bnNlbG9ycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyByb2xlOiAnY291bnNlbG9yJyB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlLCBjb2xsZWdlOiB0cnVlIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvdW5zZWxvcnMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWmguaenOaYr+WSqOivouW4iO+8jOi/lOWbnue7meWPkei/h+a2iOaBr+eahOWtpueUn++8iOi/memHjOeugOWMlumAu+i+ke+8mui/lOWbnuaJgOacieWtpueUn++8jOaIluiAheS9oOWPr+S7peWBmuabtOWkjeadgueahOafpeivou+8iVxyXG4gICAgICAvLyDkuLrkuobmvJTnpLrmlrnkvr/vvIzmiJHku6zmmoLml7bov5Tlm57miYDmnInlrabnlJ/vvIzlrp7pmYXpobnnm67kuK3lupTor6Xlj6rov5Tlm57mnInpooTnuqbmiJbogYrov4fnmoRcclxuICAgICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgcm9sZTogJ3N0dWRlbnQnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBhdmF0YXI6IHRydWUsIGNvbGxlZ2U6IHRydWUgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogc3R1ZGVudHMgfTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiDojrflj5bmiJHlkozmn5DkurrnmoTogYrlpKnorrDlvZVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKHVzZXJJZDE6IHN0cmluZywgdXNlcklkMjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIE9SOiBbXHJcbiAgICAgICAgICB7IHNlbmRlcklkOiB1c2VySWQxLCByZWNlaXZlcklkOiB1c2VySWQyIH0sXHJcbiAgICAgICAgICB7IHNlbmRlcklkOiB1c2VySWQyLCByZWNlaXZlcklkOiB1c2VySWQxIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnYXNjJyB9LCAvLyDmjInml7bpl7TmraPluo/mjpLliJdcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIHNlbmRlcjogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlIH0gfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2VzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4g5Y+R6YCB5raI5oGvXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShzZW5kZXJJZDogc3RyaW5nLCByZWNlaXZlcklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHNlbmRlcklkLFxyXG4gICAgICAgIHJlY2VpdmVySWQsXHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOazqOaEj++8muiBiuWkqemAmuW4uOS4jemcgOimgSByZXZhbGlkYXRlUGF0aO+8jOWboOS4uuaYr+WNs+aXtuabtOaWsOeKtuaAgVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbWVzc2FnZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Y+R6YCB5aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDEuIOiOt+WPluafkOS9jeWSqOivouW4iOeahOaOkuePrVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnNlbG9yU2NoZWR1bGUoY291bnNlbG9ySWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZXMgPSBhd2FpdCBwcmlzbWEuc2NoZWR1bGUuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBjb3Vuc2Vsb3JJZCwgaXNBdmFpbGFibGU6IHRydWUgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBzY2hlZHVsZXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiDmibnph4/mm7TmlrDmjpLnj60gKOWSqOivouW4iOerr+S9v+eUqClcclxuLy8gc2xvdHMg5qC85byP77yaW3sgZGF5T2ZXZWVrOiAxLCB0aW1lU2xvdDogXCIwODozMCAtIDA5OjIwXCIsIGlzQXZhaWxhYmxlOiB0cnVlIH0sIC4uLl1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNjaGVkdWxlKGNvdW5zZWxvcklkOiBzdHJpbmcsIHNsb3RzOiBhbnlbXSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDkvb/nlKjkuovliqHvvIzlhYjliKDlkI7liqDvvIzmiJbogIXpgJDkuKogdXBzZXJ0XHJcbiAgICAvLyDnroDljZXotbfop4HvvIzmiJHku6zkvb/nlKggdHJhbnNhY3Rpb24g6YCQ5LiqIHVwc2VydFxyXG4gICAgY29uc3Qgb3BzID0gc2xvdHMubWFwKHNsb3QgPT4gXHJcbiAgICAgIHByaXNtYS5zY2hlZHVsZS51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBjb3Vuc2Vsb3JJZF9kYXlPZldlZWtfdGltZVNsb3Q6IHtcclxuICAgICAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgICAgIGRheU9mV2Vlazogc2xvdC5kYXlPZldlZWssXHJcbiAgICAgICAgICAgIHRpbWVTbG90OiBzbG90LnRpbWVTbG90XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IHsgaXNBdmFpbGFibGU6IHNsb3QuaXNBdmFpbGFibGUgfSxcclxuICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgIGNvdW5zZWxvcklkLFxyXG4gICAgICAgICAgZGF5T2ZXZWVrOiBzbG90LmRheU9mV2VlayxcclxuICAgICAgICAgIHRpbWVTbG90OiBzbG90LnRpbWVTbG90LFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHNsb3QuaXNBdmFpbGFibGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKG9wcyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuS/neWtmOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDmoLnmja4gSUQg6I635Y+W5Y2V56+H5paH56ug6K+m5oOFXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCBwcmlzbWEuYXJ0aWNsZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGlkIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAoYXJ0aWNsZSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBhcnRpY2xlIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5paH56ug5pyq5om+5YiwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5p+l6K+i5aSx6LSlXCIgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1SQW9Jc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/student/articles/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // ✅ 1. 引入路由钩子
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$edd2fd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:edd2fd [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const CATEGORIES = [
    "全部",
    "自我成长",
    "学业压力",
    "人际交往",
    "情绪调节",
    "中心公告"
];
function ArticlesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // ✅ 2. 初始化路由
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("全部");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlesPage.useEffect": ()=>{
            async function fetchData() {
                try {
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$edd2fd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getArticles"])();
                    if (Array.isArray(data)) setArticles(data);
                    else setArticles([]);
                } catch (err) {
                    setArticles([]);
                } finally{
                    setLoading(false);
                }
            }
            fetchData();
        }
    }["ArticlesPage.useEffect"], []);
    const filteredArticles = (articles || []).filter((article)=>{
        if (!article) return false;
        const matchesCategory = activeCategory === "全部" || article.category === activeCategory;
        const matchesSearch = (article.title || '').includes(searchQuery) || (article.summary || '').includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    // ✅ 3. 定义跳转函数
    const handleCardClick = (id)=>{
        console.log("正在跳转到文章:", id); // 方便调试，按F12看控制台
        router.push(`/student/articles/${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-[#2C3E50] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-6 h-6 text-[#5D9C59]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/student/articles/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    " 心理知识库"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/articles/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-2 text-sm",
                                children: "在这里探索心理学的奥秘，获取自助成长的力量"
                            }, void 0, false, {
                                fileName: "[project]/app/student/articles/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/student/articles/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-72",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-2.5 w-4 h-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/student/articles/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "搜索文章关键词...",
                                className: "pl-9 bg-white border-slate-200 focus-visible:ring-[#5D9C59]",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/student/articles/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/student/articles/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/student/articles/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(cat),
                        className: `px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-[#5D9C59] text-white shadow-md' : 'bg-white text-slate-600 hover:bg-[#F0F7EF] border border-transparent'}`,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/app/student/articles/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/student/articles/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "animate-spin text-[#5D9C59] w-8 h-8"
                    }, void 0, false, {
                        fileName: "[project]/app/student/articles/page.tsx",
                        lineNumber: 90,
                        columnNumber: 54
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/student/articles/page.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this) : filteredArticles.length > 0 ? filteredArticles.map((article)=>// ✅ 4. 使用 div + onClick 替代 Link
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleCardClick(article.id),
                        className: "group bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:border-[#5D9C59] hover:shadow-md transition-all flex flex-col md:flex-row gap-6 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-64 h-40 rounded-lg overflow-hidden relative flex-shrink-0 bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: article.image || "https://images.unsplash.com/photo-1499209974431-2761eb43a768?w=800&q=80",
                                    alt: article.title,
                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/student/articles/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/student/articles/page.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col justify-between py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: "bg-[#F0F7EF] text-[#3E6D3B] hover:bg-[#F0F7EF] rounded-md font-normal",
                                                        children: article.category || '未分类'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/articles/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: [
                                                            "by ",
                                                            article.author || '管理员'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/student/articles/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/student/articles/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-[#2C3E50] mb-2 group-hover:text-[#5D9C59] transition-colors",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/articles/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-sm leading-relaxed line-clamp-2",
                                                children: article.summary
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/articles/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/student/articles/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mt-4 md:mt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-xs text-slate-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/student/articles/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 63
                                                        }, this),
                                                        " ",
                                                        new Date(article.createdAt).toLocaleDateString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/student/articles/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/articles/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                className: "text-[#5D9C59] hover:bg-[#F0F7EF] hover:text-[#3E6D3B] p-0 h-auto font-medium",
                                                children: [
                                                    "阅读全文 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4 ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/articles/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/student/articles/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/student/articles/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/articles/page.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, article.id, true, {
                        fileName: "[project]/app/student/articles/page.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 bg-white rounded-xl border border-dashed border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500",
                        children: loading ? "加载中..." : "暂无文章，请联系管理员发布内容。"
                    }, void 0, false, {
                        fileName: "[project]/app/student/articles/page.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/student/articles/page.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/student/articles/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/student/articles/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ArticlesPage, "MXnIeYt8T5F/59JzoO6bCJ1rkUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ArticlesPage;
var _c;
__turbopack_context__.k.register(_c, "ArticlesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>BookOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
];
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("book-open", __iconNode);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_be3385ee._.js.map