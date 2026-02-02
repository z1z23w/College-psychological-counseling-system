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
"[project]/app/data:ce5e00 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00cfc92782635b92b803fc2bde935ced14749c2d6d":"getArticles"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getArticles",
    ()=>getArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getArticles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00cfc92782635b92b803fc2bde935ced14749c2d6d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getArticles"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4g55So5oi3566h55CGICjnrqHnkIblkZjnlKgpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLojrflj5bnlKjmiLflpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KFwidXNlcm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBjb2xsZWdlID0gZm9ybURhdGEuZ2V0KFwiY29sbGVnZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIGNvbGxlZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsIC8vIOm7mOiupOWvhueggVxyXG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vYXBpLmRpY2ViZWFyLmNvbS83LngvYXZhdGFhYXJzL3N2Zz9zZWVkPSR7bmFtZX1gXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yib5bu65aSx6LSl77yM5a2m5Y+35Y+v6IO95bey5a2Y5ZyoXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB1c2VybmFtZSA9IGZvcm1EYXRhLmdldChcInVzZXJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgY29sbGVnZSA9IGZvcm1EYXRhLmdldChcImNvbGxlZ2VcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBuYW1lLCB1c2VybmFtZSwgcm9sZSwgY29sbGVnZSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi91c2Vyc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuabtOaWsOWksei0pe+8jOWtpuWPt+WPr+iDveWGsueqgVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS51c2VyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi91c2Vyc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWIoOmZpOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMi4g6K6k6K+B5LiO5p+l6K+iICjpgJrnlKgpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luQWN0aW9uKHVzZXJuYW1lOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcm5hbWUsIHJvbGUgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLnlKjmiLfkuI3lrZjlnKjmiJbop5LoibLplJnor69cIiB9O1xyXG4gICAgXHJcbiAgICAvLyDov5Tlm57nlKjmiLfkv6Hmga/vvIjkuI3lkKvlr4bnoIHvvIlcclxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnVzZXJJbmZvIH0gPSB1c2VyO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlckluZm8gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaVsOaNruW6k+i/nuaOpeWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnNlbG9ycygpIHtcclxuICByZXR1cm4gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHsgcm9sZTogJ2NvdW5zZWxvcicgfSxcclxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29sbGVnZTogdHJ1ZSwgYXZhdGFyOiB0cnVlIH0gLy8g5piO56Gu6YCJ5oup6ZyA6KaB55qE5a2X5q61XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAzLiDpooTnuqbns7vnu58gKOaguOW/g+S4muWKoSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyDinIUg5L+u5aSN77ya6I635Y+W6aKE57qm5YiX6KGoICjljrvpmaTkuoYgZW1haWwg5a2X5q61KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwb2ludG1lbnRzKHVzZXJJZDogc3RyaW5nLCByb2xlOiAnc3R1ZGVudCcgfCAnY291bnNlbG9yJykge1xyXG4gIGNvbnN0IHdoZXJlID0gcm9sZSA9PT0gJ3N0dWRlbnQnID8geyBzdHVkZW50SWQ6IHVzZXJJZCB9IDogeyBjb3Vuc2Vsb3JJZDogdXNlcklkIH07XHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICB3aGVyZSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgLy8g4pqg77iPIOWFs+mUruS/ruaUue+8mlVzZXLooajmsqHmnIllbWFpbOWtl+aute+8jOaUueafpSB1c2VybmFtZSjlrablj7cpIOWSjCBjb2xsZWdlXHJcbiAgICAgIHN0dWRlbnQ6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIHVzZXJuYW1lOiB0cnVlLCBjb2xsZWdlOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9LFxyXG4gICAgICBjb3Vuc2Vsb3I6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvbGxlZ2U6IHRydWUsIGF2YXRhcjogdHJ1ZSB9IH0sXHJcbiAgICAgIHRlc3RSZXN1bHQ6IHRydWUsIC8vIOiOt+WPluWFs+iBlOeahOa1i+ivhOe7k+aenFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgZGF0ZTogJ2Rlc2MnIH1cclxuICB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8g4pyFIOWIm+W7uuW4puivpue7huaho+ahiOeahOmihOe6plxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXBwb2ludG1lbnRXaXRoRGV0YWlscyhkYXRhOiBhbnkpIHtcclxuICAvLyDmo4Dmn6Xml7bpl7TlhrLnqoFcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgY291bnNlbG9ySWQ6IGRhdGEuY291bnNlbG9ySWQsXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0ZSksXHJcbiAgICAgIHRpbWU6IGRhdGEudGltZSxcclxuICAgICAgc3RhdHVzOiAnY29uZmlybWVkJyBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIuivpeaXtuauteW3suiiq+WNoOeUqFwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0dWRlbnRJZDogZGF0YS5zdHVkZW50SWQsXHJcbiAgICAgICAgY291bnNlbG9ySWQ6IGRhdGEuY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0YS5kYXRlKSxcclxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXHJcbiAgICAgICAgLy8g6K+m57uG5L+h5oGvXHJcbiAgICAgICAgaWRDYXJkOiBkYXRhLmlkQ2FyZCxcclxuICAgICAgICBzdHVkZW50SWROdW06IGRhdGEuc3R1ZGVudElkTnVtLFxyXG4gICAgICAgIHBob25lOiBkYXRhLnBob25lLFxyXG4gICAgICAgIGNvbGxlZ2U6IGRhdGEuY29sbGVnZSxcclxuICAgICAgICBtYWpvcjogZGF0YS5tYWpvcixcclxuICAgICAgICBncmFkZTogZGF0YS5ncmFkZSxcclxuICAgICAgICBjbGFzc0luZm86IGRhdGEuY2xhc3NJbmZvLFxyXG4gICAgICAgIG1lbnRhbEhpc3Rvcnk6IGRhdGEubWVudGFsSGlzdG9yeSxcclxuICAgICAgICBwaHlzaWNhbFN0YXRlOiBkYXRhLnBoeXNpY2FsU3RhdGUsXHJcbiAgICAgICAgcHJvYmxlbVR5cGU6IGRhdGEucHJvYmxlbVR5cGUsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9zdHVkZW50L2Jvb2tpbmcnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY291bnNlbG9yL2Rhc2hib2FyZCcpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIumihOe6puWIm+W7uuW8guW4uFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDmm7TmlrDpooTnuqbnirbmgIEgKOWuoeaJuS/mi5Lnu50v5a6M5oiQKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwb2ludG1lbnRTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcclxuICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICBkYXRhOiB7IHN0YXR1cyB9XHJcbiAgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Rhc2hib2FyZFwiKTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Jvb2tpbmdcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyDmm7TmlrDlkqjor6LorrDlvZUgKOWSqOivouW4iOWGmee7k+ahiOiusOW9lSlcclxuLy8gYXBwL2FjdGlvbnMudHNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb25zdWx0YXRpb25SZWNvcmQoaWQ6IHN0cmluZywgbm90ZXM6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBub3RlcywgXHJcbiAgICAgICAgc3RhdHVzOiAnY29tcGxldGVkJyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jb3Vuc2Vsb3IvZGFzaGJvYXJkXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Nhc2VzXCIpOyAvLyDnoa7kv53liLfmlrDmoaPmoYjpobXpnaJcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuS/neWtmOWSqOivouiusOW9leWksei0pTpcIiwgZXJyb3IpOyAvLyDmiZPljbDplJnor6/ml6Xlv5fmlrnkvr/mjpLmn6VcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDQuIOW/g+eQhua1i+ivhOezu+e7nyAoVGVzdFJlc3VsdClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UHN5Y2hUZXN0KGFwcG9pbnRtZW50SWQ6IHN0cmluZywgYW5zd2VyczogYW55KSB7XHJcbiAgLy8gMS4g6K6h566X5YiG5pWwXHJcbiAgY29uc3QgY2FsY3VsYXRlU2NvcmUgPSAoYXJyOiBudW1iZXJbXSkgPT4gYXJyLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gIGNvbnN0IHNkc1Njb3JlID0gY2FsY3VsYXRlU2NvcmUoYW5zd2Vycy5zZHMgfHwgW10pO1xyXG4gIGNvbnN0IHNhc1Njb3JlID0gY2FsY3VsYXRlU2NvcmUoYW5zd2Vycy5zYXMgfHwgW10pO1xyXG4gIGNvbnN0IHNlc1Njb3JlID0gY2FsY3VsYXRlU2NvcmUoYW5zd2Vycy5zZXMgfHwgW10pO1xyXG5cclxuICAvLyAyLiDpooTorabliKTmlq0gKOmYiOWAvCA+IDYwKVxyXG4gIGxldCBpc0hpZ2hSaXNrID0gZmFsc2U7XHJcbiAgXHJcbiAgaWYgKHNkc1Njb3JlID4gNjAgfHwgc2FzU2NvcmUgPiA2MCkge1xyXG4gICAgaXNIaWdoUmlzayA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gMy4g5L+d5a2Y5rWL6K+E57uT5p6cXHJcbiAgICBhd2FpdCBwcmlzbWEudGVzdFJlc3VsdC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYXBwb2ludG1lbnRJZCxcclxuICAgICAgICByYXdBbnN3ZXJzOiBhbnN3ZXJzLFxyXG4gICAgICAgIHNkc1Njb3JlLFxyXG4gICAgICAgIHNhc1Njb3JlLFxyXG4gICAgICAgIHNlc1Njb3JlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDQuIOWmguaenOaYr+mrmOmjjumZqe+8jOS7heWBmuagh+iusFxyXG4gICAgaWYgKGlzSGlnaFJpc2spIHtcclxuICAgICAgICAvLyBBLiDmoIforrDlvZPliY3pooTnuqbkuLrljbHmnLpcclxuICAgICAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGFwcG9pbnRtZW50SWQgfSxcclxuICAgICAgICAgICAgZGF0YTogeyBpc0NyaXNpczogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEIuIOagh+iusOWtpueUn+aho+ahiOS4uue6ouiJsumihOitplxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcHQgPSBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBhcHBvaW50bWVudElkIH0gfSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBcHQpIHtcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50QXB0LnN0dWRlbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyByaXNrTGV2ZWw6ICdyZWQnIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvc3R1ZGVudC9ib29raW5nJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvdW5zZWxvci9kYXNoYm9hcmQnKTtcclxuICAgIFxyXG4gICAgLy8g4pyFIOenu+mZpOiHquWKqOmihOe6puS7o+egge+8jOS7hei/lOWbnumjjumZqeeKtuaAgVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaXNIaWdoUmlzayB9O1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIua1i+ivhOaPkOS6pOWksei0pTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaPkOS6pOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gNS4g5o6S54+t57O757ufIChTY2hlZHVsZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnNlbG9yU2NoZWR1bGUoY291bnNlbG9ySWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZXMgPSBhd2FpdCBwcmlzbWEuc2NoZWR1bGUuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBjb3Vuc2Vsb3JJZCwgaXNBdmFpbGFibGU6IHRydWUgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBzY2hlZHVsZXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2NoZWR1bGUoY291bnNlbG9ySWQ6IHN0cmluZywgc2xvdHM6IGFueVtdKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9wcyA9IHNsb3RzLm1hcChzbG90ID0+IFxyXG4gICAgICBwcmlzbWEuc2NoZWR1bGUudXBzZXJ0KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgY291bnNlbG9ySWRfZGF5T2ZXZWVrX3RpbWVTbG90OiB7XHJcbiAgICAgICAgICAgIGNvdW5zZWxvcklkLFxyXG4gICAgICAgICAgICBkYXlPZldlZWs6IHNsb3QuZGF5T2ZXZWVrLFxyXG4gICAgICAgICAgICB0aW1lU2xvdDogc2xvdC50aW1lU2xvdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiB7IGlzQXZhaWxhYmxlOiBzbG90LmlzQXZhaWxhYmxlIH0sXHJcbiAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICBjb3Vuc2Vsb3JJZCxcclxuICAgICAgICAgIGRheU9mV2Vlazogc2xvdC5kYXlPZldlZWssXHJcbiAgICAgICAgICB0aW1lU2xvdDogc2xvdC50aW1lU2xvdCxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiBzbG90LmlzQXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihvcHMpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDYuIOiBiuWkqeezu+e7nyAoTWVzc2FnZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYXRDb250YWN0cyhjdXJyZW50VXNlcklkOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocm9sZSA9PT0gJ3N0dWRlbnQnKSB7XHJcbiAgICAgIGNvbnN0IGNvdW5zZWxvcnMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgcm9sZTogJ2NvdW5zZWxvcicgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGF2YXRhcjogdHJ1ZSwgY29sbGVnZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjb3Vuc2Vsb3JzIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzdHVkZW50cyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyByb2xlOiAnc3R1ZGVudCcgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGF2YXRhcjogdHJ1ZSwgY29sbGVnZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBzdHVkZW50cyB9O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogW10gfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlcyh1c2VySWQxOiBzdHJpbmcsIHVzZXJJZDI6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHByaXNtYS5tZXNzYWdlLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBzZW5kZXJJZDogdXNlcklkMSwgcmVjZWl2ZXJJZDogdXNlcklkMiB9LFxyXG4gICAgICAgICAgeyBzZW5kZXJJZDogdXNlcklkMiwgcmVjZWl2ZXJJZDogdXNlcklkMSB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIHNlbmRlcjogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlIH0gfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1lc3NhZ2VzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHNlbmRlcklkOiBzdHJpbmcsIHJlY2VpdmVySWQ6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBwcmlzbWEubWVzc2FnZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHNlbmRlcklkLCByZWNlaXZlcklkLCBjb250ZW50IH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbWVzc2FnZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Y+R6YCB5aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA3LiDmlofnq6Dns7vnu58gKEFydGljbGVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlcygpIHtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHByaXNtYS5hcnRpY2xlLmZpbmRNYW55KHtcclxuICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhcnRpY2xlcy5tYXAoYSA9PiAoe1xyXG4gICAgLi4uYSxcclxuICAgIGNyZWF0ZWRBdDogYS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKVxyXG4gIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydGljbGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHByaXNtYS5hcnRpY2xlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgaWYgKGFydGljbGUpIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGFydGljbGUgfTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLmlofnq6DmnKrmib7liLBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5p+l6K+i5aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBcnRpY2xlKGRhdGE6IGFueSkge1xyXG4gIGF3YWl0IHByaXNtYS5hcnRpY2xlLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIGF1dGhvcjogJ+euoeeQhuWRmCcsXHJcbiAgICAgIHZpZXdzOiAwLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTIwOTk3NDQzMS0yNzYxZWI0M2E3Njg/dz04MDAmcT04MFwiXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvc3R1ZGVudC9hcnRpY2xlc1wiKTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb250ZW50XCIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFydGljbGUoaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXJ0aWNsZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vY29udGVudFwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3N0dWRlbnQvYXJ0aWNsZXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLliKDpmaTlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDguIOezu+e7n+euoeeQhuS4jueci+adv1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZG1pbkRhc2hib2FyZFN0YXRzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbc3R1ZGVudENvdW50LCBhcHBvaW50bWVudENvdW50LCBjb21wbGV0ZWRDb3VudCwgcmF3Q2hhcnREYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgcHJpc21hLnVzZXIuY291bnQoeyB3aGVyZTogeyByb2xlOiAnc3R1ZGVudCcgfSB9KSxcclxuICAgICAgXHJcbiAgICAgIC8vIOe7n+iuoeaJgOaciemihOe6piAo5YyF5ous562J5b6F5Lit55qE77yM55So5LqO5pi+56S654Ot5bqmKVxyXG4gICAgICBwcmlzbWEuYXBwb2ludG1lbnQuY291bnQoKSwgXHJcblxyXG4gICAgICAvLyDnu5/orqHlt7LlrozmiJBcclxuICAgICAgcHJpc21hLmFwcG9pbnRtZW50LmNvdW50KHsgd2hlcmU6IHsgc3RhdHVzOiAnY29tcGxldGVkJyB9IH0pLFxyXG5cclxuICAgICAgLy8g5Zu+6KGo5pWw5o2uICjnu5/orqHmnIDov5E35aSpKVxyXG4gICAgICBwcmlzbWEuYXBwb2ludG1lbnQuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBkYXRlOiB7IGd0ZTogbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gNikpIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBkYXRlOiB0cnVlIH1cclxuICAgICAgfSlcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRpb25SYXRlID0gYXBwb2ludG1lbnRDb3VudCA+IDAgXHJcbiAgICAgID8gTWF0aC5yb3VuZCgoY29tcGxldGVkQ291bnQgLyBhcHBvaW50bWVudENvdW50KSAqIDEwMCkgKyBcIiVcIiBcclxuICAgICAgOiBcIjAlXCI7XHJcblxyXG4gICAgY29uc3QgY2hhcnREYXRhID0gW107XHJcbiAgICBjb25zdCB3ZWVrTWFwID0gWyflkajml6UnLCAn5ZGo5LiAJywgJ+WRqOS6jCcsICflkajkuIknLCAn5ZGo5ZubJywgJ+WRqOS6lCcsICflkajlha0nXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gNjsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSAtIGkpO1xyXG4gICAgICBjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXRlS2V5ID0gYCR7bW9udGh9LyR7ZGF5fWA7XHJcbiAgICAgIGNvbnN0IHdlZWtMYWJlbCA9IHdlZWtNYXBbZC5nZXREYXkoKV07XHJcblxyXG4gICAgICBjb25zdCBjb3VudCA9IHJhd0NoYXJ0RGF0YS5maWx0ZXIoYXB0ID0+IHtcclxuICAgICAgICBjb25zdCBhcHREYXRlID0gbmV3IERhdGUoYXB0LmRhdGUpO1xyXG4gICAgICAgIHJldHVybiBhcHREYXRlLmdldERhdGUoKSA9PT0gZGF5ICYmIGFwdERhdGUuZ2V0TW9udGgoKSArIDEgPT09IG1vbnRoO1xyXG4gICAgICB9KS5sZW5ndGg7XHJcblxyXG4gICAgICBjaGFydERhdGEucHVzaCh7IG5hbWU6IGRhdGVLZXksIGRheTogd2Vla0xhYmVsLCB2aXNpdHM6IGNvdW50IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0czoge1xyXG4gICAgICAgICAgc3R1ZGVudHM6IHN0dWRlbnRDb3VudCxcclxuICAgICAgICAgIGFwcG9pbnRtZW50czogYXBwb2ludG1lbnRDb3VudCxcclxuICAgICAgICAgIGNyaXNpczogMCwgLy8g5pqC5peg5Y2x5py66aKE6K2m6YC76L6RXHJcbiAgICAgICAgICByYXRlOiBjb21wbGV0aW9uUmF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhcnQ6IGNoYXJ0RGF0YVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIueci+adv+aVsOaNruWKoOi9veWksei0pTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWKoOi9veWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3lzdGVtU2V0dGluZ3MoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjb25maWcgPSBhd2FpdCBwcmlzbWEuc3lzdGVtQ29uZmlnLmZpbmRGaXJzdCgpO1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgY29uZmlnID0gYXdhaXQgcHJpc21hLnN5c3RlbUNvbmZpZy5jcmVhdGUoeyBkYXRhOiB7fSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbmZpZyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi6I635Y+W6YWN572u5aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTeXN0ZW1TZXR0aW5ncyhkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZmlyc3QgPSBhd2FpdCBwcmlzbWEuc3lzdGVtQ29uZmlnLmZpbmRGaXJzdCgpO1xyXG4gICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZmlyc3QuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwbGF0Zm9ybU5hbWU6IGRhdGEucGxhdGZvcm1OYW1lLFxyXG4gICAgICAgICAgaG90bGluZTogZGF0YS5ob3RsaW5lLFxyXG4gICAgICAgICAgb3BlbkhvdXJzOiBkYXRhLm9wZW5Ib3VycyxcclxuICAgICAgICAgIG1haW50ZW5hbmNlTW9kZTogZGF0YS5tYWludGVuYW5jZU1vZGUgPT09ICd0cnVlJyB8fCBkYXRhLm1haW50ZW5hbmNlTW9kZSA9PT0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLmnKrmib7liLDphY3nva7orrDlvZVcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5L+d5a2Y5aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVJBd1dzQiJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$ce5e00__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:ce5e00 [app-client] (ecmascript) <text/javascript>");
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
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$ce5e00__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getArticles"])();
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

//# sourceMappingURL=_a2162ac9._.js.map