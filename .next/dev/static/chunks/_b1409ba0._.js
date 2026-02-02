(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:38fe7f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c2fcb384938738311a223be1b7121afc514580e9":"checkPendingInterventions"},"app/actions.ts",""] */ __turbopack_context__.s([
    "checkPendingInterventions",
    ()=>checkPendingInterventions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var checkPendingInterventions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c2fcb384938738311a223be1b7121afc514580e9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "checkPendingInterventions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4g55So5oi3566h55CGICjnrqHnkIblkZjnlKgpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLojrflj5bnlKjmiLflpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KFwidXNlcm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBjb2xsZWdlID0gZm9ybURhdGEuZ2V0KFwiY29sbGVnZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIGNvbGxlZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsIC8vIOm7mOiupOWvhueggVxyXG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vYXBpLmRpY2ViZWFyLmNvbS83LngvYXZhdGFhYXJzL3N2Zz9zZWVkPSR7bmFtZX1gXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yib5bu65aSx6LSl77yM5a2m5Y+35Y+v6IO95bey5a2Y5ZyoXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB1c2VybmFtZSA9IGZvcm1EYXRhLmdldChcInVzZXJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgY29sbGVnZSA9IGZvcm1EYXRhLmdldChcImNvbGxlZ2VcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBuYW1lLCB1c2VybmFtZSwgcm9sZSwgY29sbGVnZSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi91c2Vyc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuabtOaWsOWksei0pe+8jOWtpuWPt+WPr+iDveWGsueqgVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS51c2VyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi91c2Vyc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWIoOmZpOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMi4g6K6k6K+B5LiO5p+l6K+iICjpgJrnlKgpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luQWN0aW9uKHVzZXJuYW1lOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcm5hbWUsIHJvbGUgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLnlKjmiLfkuI3lrZjlnKjmiJbop5LoibLplJnor69cIiB9O1xyXG4gICAgXHJcbiAgICAvLyDov5Tlm57nlKjmiLfkv6Hmga/vvIjkuI3lkKvlr4bnoIHvvIlcclxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnVzZXJJbmZvIH0gPSB1c2VyO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlckluZm8gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaVsOaNruW6k+i/nuaOpeWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnNlbG9ycygpIHtcclxuICByZXR1cm4gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHsgcm9sZTogJ2NvdW5zZWxvcicgfSxcclxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29sbGVnZTogdHJ1ZSwgYXZhdGFyOiB0cnVlIH0gLy8g5piO56Gu6YCJ5oup6ZyA6KaB55qE5a2X5q61XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAzLiDpooTnuqbns7vnu58gKOaguOW/g+S4muWKoSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyDinIUg5L+u5aSN77ya6I635Y+W6aKE57qm5YiX6KGoICjljrvpmaTkuoYgZW1haWwg5a2X5q61KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwb2ludG1lbnRzKHVzZXJJZDogc3RyaW5nLCByb2xlOiAnc3R1ZGVudCcgfCAnY291bnNlbG9yJykge1xyXG4gIGNvbnN0IHdoZXJlID0gcm9sZSA9PT0gJ3N0dWRlbnQnID8geyBzdHVkZW50SWQ6IHVzZXJJZCB9IDogeyBjb3Vuc2Vsb3JJZDogdXNlcklkIH07XHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICB3aGVyZSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgLy8g4pqg77iPIOWFs+mUruS/ruaUue+8mlVzZXLooajmsqHmnIllbWFpbOWtl+aute+8jOaUueafpSB1c2VybmFtZSjlrablj7cpIOWSjCBjb2xsZWdlXHJcbiAgICAgIHN0dWRlbnQ6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIHVzZXJuYW1lOiB0cnVlLCBjb2xsZWdlOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9LFxyXG4gICAgICBjb3Vuc2Vsb3I6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvbGxlZ2U6IHRydWUsIGF2YXRhcjogdHJ1ZSB9IH0sXHJcbiAgICAgIHRlc3RSZXN1bHQ6IHRydWUsIC8vIOiOt+WPluWFs+iBlOeahOa1i+ivhOe7k+aenFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgZGF0ZTogJ2Rlc2MnIH1cclxuICB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8g4pyFIOWIm+W7uuW4puivpue7huaho+ahiOeahOmihOe6plxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXBwb2ludG1lbnRXaXRoRGV0YWlscyhkYXRhOiBhbnkpIHtcclxuICAvLyDmo4Dmn6Xml7bpl7TlhrLnqoFcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgY291bnNlbG9ySWQ6IGRhdGEuY291bnNlbG9ySWQsXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0ZSksXHJcbiAgICAgIHRpbWU6IGRhdGEudGltZSxcclxuICAgICAgc3RhdHVzOiAnY29uZmlybWVkJyBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIuivpeaXtuauteW3suiiq+WNoOeUqFwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0dWRlbnRJZDogZGF0YS5zdHVkZW50SWQsXHJcbiAgICAgICAgY291bnNlbG9ySWQ6IGRhdGEuY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0YS5kYXRlKSxcclxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXHJcbiAgICAgICAgLy8g6K+m57uG5L+h5oGvXHJcbiAgICAgICAgaWRDYXJkOiBkYXRhLmlkQ2FyZCxcclxuICAgICAgICBzdHVkZW50SWROdW06IGRhdGEuc3R1ZGVudElkTnVtLFxyXG4gICAgICAgIHBob25lOiBkYXRhLnBob25lLFxyXG4gICAgICAgIGNvbGxlZ2U6IGRhdGEuY29sbGVnZSxcclxuICAgICAgICBtYWpvcjogZGF0YS5tYWpvcixcclxuICAgICAgICBncmFkZTogZGF0YS5ncmFkZSxcclxuICAgICAgICBjbGFzc0luZm86IGRhdGEuY2xhc3NJbmZvLFxyXG4gICAgICAgIG1lbnRhbEhpc3Rvcnk6IGRhdGEubWVudGFsSGlzdG9yeSxcclxuICAgICAgICBwaHlzaWNhbFN0YXRlOiBkYXRhLnBoeXNpY2FsU3RhdGUsXHJcbiAgICAgICAgcHJvYmxlbVR5cGU6IGRhdGEucHJvYmxlbVR5cGUsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9zdHVkZW50L2Jvb2tpbmcnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY291bnNlbG9yL2Rhc2hib2FyZCcpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIumihOe6puWIm+W7uuW8guW4uFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDmm7TmlrDpooTnuqbnirbmgIEgKOWuoeaJuS/mi5Lnu50v5a6M5oiQKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwb2ludG1lbnRTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcclxuICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICBkYXRhOiB7IHN0YXR1cyB9XHJcbiAgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Rhc2hib2FyZFwiKTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Jvb2tpbmdcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyDmm7TmlrDlkqjor6LorrDlvZUgKOWSqOivouW4iOWGmee7k+ahiOiusOW9lSlcclxuLy8gYXBwL2FjdGlvbnMudHNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb25zdWx0YXRpb25SZWNvcmQoaWQ6IHN0cmluZywgbm90ZXM6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBub3RlcywgXHJcbiAgICAgICAgc3RhdHVzOiAnY29tcGxldGVkJyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jb3Vuc2Vsb3IvZGFzaGJvYXJkXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Nhc2VzXCIpOyAvLyDnoa7kv53liLfmlrDmoaPmoYjpobXpnaJcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuS/neWtmOWSqOivouiusOW9leWksei0pTpcIiwgZXJyb3IpOyAvLyDmiZPljbDplJnor6/ml6Xlv5fmlrnkvr/mjpLmn6VcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDQuIOW/g+eQhua1i+ivhOezu+e7nyAoVGVzdFJlc3VsdClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBb5L+u5pS5XSDmj5DkuqTlv4PnkIbmtYvor4Tnu5PmnpwgKOS/ruWkjeeJiO+8muaUr+aMgSBTRFMvU0FTIOagh+WHhuWIhiArIOmYsuatoumHjeWkjeaKpemUmSlcclxuLy8gW+S/ruaUuV0g5o+Q5Lqk6aKE57qm5YmN5rWLICjnuq/orrDlvZXniYjvvJrlj6rlrZjliIbvvIzkuI3miqXorabvvIzkuI3op6blj5HljbHmnLrlubLpooQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRQc3ljaFRlc3QoYXBwb2ludG1lbnRJZDogc3RyaW5nLCBhbnN3ZXJzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBzZHMsIHNhcywgc2VzIH0gPSBhbnN3ZXJzO1xyXG5cclxuICAgIC8vIDEuIOiuoeeul+WOn+Wni+WIhlxyXG4gICAgY29uc3Qgc2RzUmF3ID0gKHNkcyB8fCBbXSkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApO1xyXG4gICAgY29uc3Qgc2FzUmF3ID0gKHNhcyB8fCBbXSkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApO1xyXG4gICAgY29uc3Qgc2VzU2NvcmUgPSAoc2VzIHx8IFtdKS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICsgYiwgMCk7XHJcblxyXG4gICAgLy8gMi4g6K6h566X5qCH5YeG5YiGICjku4XlgZrorrDlvZUpXHJcbiAgICBjb25zdCBzZHNTY29yZSA9IE1hdGguZmxvb3Ioc2RzUmF3ICogMS4yNSk7XHJcbiAgICBjb25zdCBzYXNTY29yZSA9IE1hdGguZmxvb3Ioc2FzUmF3ICogMS4yNSk7XHJcblxyXG4gICAgLy8gMy4g6L+Z6YeM55qEIGlzSGlnaFJpc2sg5LuF55So5LqO5Y2V5qyh6K6w5b2V77yM5LiN5YaN6IGU5Yqo57O757uf5oql6K2mXHJcbiAgICBsZXQgaXNIaWdoUmlzayA9IGZhbHNlO1xyXG4gICAgbGV0IHJpc2tMZXZlbCA9ICdub3JtYWwnO1xyXG5cclxuICAgIGlmIChzZHNTY29yZSA+PSA1MyB8fCBzYXNTY29yZSA+PSA1MCkge1xyXG4gICAgICAgIGlzSGlnaFJpc2sgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzZHNTY29yZSA+PSA2MyB8fCBzYXNTY29yZSA+PSA2MCkge1xyXG4gICAgICAgICAgICByaXNrTGV2ZWwgPSAncmVkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaXNrTGV2ZWwgPSAneWVsbG93JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4g5L+d5a2Y57uT5p6c5Yiw5pWw5o2u5bqTIChVcHNlcnTpmLLmraLph43lpI3miqXplJkpXHJcbiAgICBhd2FpdCBwcmlzbWEudGVzdFJlc3VsdC51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGFwcG9pbnRtZW50SWQ6IGFwcG9pbnRtZW50SWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICBhcHBvaW50bWVudElkLFxyXG4gICAgICAgICAgICBzZHNTY29yZSxcclxuICAgICAgICAgICAgc2FzU2NvcmUsXHJcbiAgICAgICAgICAgIHNlc1Njb3JlLFxyXG4gICAgICAgICAgICByYXdBbnN3ZXJzOiBKU09OLnN0cmluZ2lmeShhbnN3ZXJzKSxcclxuICAgICAgICAgICAgaXNIaWdoUmlzaywgLy8g5a2Y5YWl5pWw5o2u5bqT5L6b5ZKo6K+i5biI5p+l55yL77yM5L2G5LiN6Kem5Y+R57O757uf5Yqo5L2cXHJcbiAgICAgICAgICAgIHJpc2tMZXZlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgICAgIHNkc1Njb3JlLFxyXG4gICAgICAgICAgICBzYXNTY29yZSxcclxuICAgICAgICAgICAgc2VzU2NvcmUsXHJcbiAgICAgICAgICAgIHJhd0Fuc3dlcnM6IEpTT04uc3RyaW5naWZ5KGFuc3dlcnMpLFxyXG4gICAgICAgICAgICBpc0hpZ2hSaXNrLFxyXG4gICAgICAgICAgICByaXNrTGV2ZWwsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOKdjCDlt7LliKDpmaTvvJpwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlICjmoIforrDpooTnuqbkuLrljbHmnLopIOeahOS7o+eggVxyXG4gICAgLy8g4p2MIOW3suWIoOmZpO+8mnByaXNtYS51c2VyLnVwZGF0ZSAo5qCH6K6w5a2m55Sf5Li657qi5ZCNKSDnmoTku6PnoIFcclxuICAgIC8vIOKdjCDlt7LliKDpmaTvvJpDcmlzaXMg55u45YWz55qE6aG16Z2i5Yi35pawXHJcblxyXG4gICAgLy8gNS4g5LuF5Yi35paw6aKE57qm5YiX6KGoXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3N0dWRlbnQvYm9va2luZycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb3Vuc2Vsb3IvY2FzZXMnKTtcclxuXHJcbiAgICAvLyDov5Tlm57miJDlip/vvIzkuI3lho3ov5Tlm54gaXNIaWdoUmlzayDnu5nliY3nq6/lvLnnqpdcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLmj5DkuqTmtYvor4TlpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwi5o+Q5Lqk5aSx6LSl77yM6K+36YeN6K+VXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA1LiDmjpLnj63ns7vnu58gKFNjaGVkdWxlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vuc2Vsb3JTY2hlZHVsZShjb3Vuc2Vsb3JJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNjaGVkdWxlcyA9IGF3YWl0IHByaXNtYS5zY2hlZHVsZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGNvdW5zZWxvcklkLCBpc0F2YWlsYWJsZTogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHNjaGVkdWxlcyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogW10gfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTY2hlZHVsZShjb3Vuc2Vsb3JJZDogc3RyaW5nLCBzbG90czogYW55W10pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb3BzID0gc2xvdHMubWFwKHNsb3QgPT4gXHJcbiAgICAgIHByaXNtYS5zY2hlZHVsZS51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBjb3Vuc2Vsb3JJZF9kYXlPZldlZWtfdGltZVNsb3Q6IHtcclxuICAgICAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgICAgIGRheU9mV2Vlazogc2xvdC5kYXlPZldlZWssXHJcbiAgICAgICAgICAgIHRpbWVTbG90OiBzbG90LnRpbWVTbG90XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IHsgaXNBdmFpbGFibGU6IHNsb3QuaXNBdmFpbGFibGUgfSxcclxuICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgIGNvdW5zZWxvcklkLFxyXG4gICAgICAgICAgZGF5T2ZXZWVrOiBzbG90LmRheU9mV2VlayxcclxuICAgICAgICAgIHRpbWVTbG90OiBzbG90LnRpbWVTbG90LFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHNsb3QuaXNBdmFpbGFibGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKG9wcyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuS/neWtmOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gNi4g6IGK5aSp57O757ufIChNZXNzYWdlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhdENvbnRhY3RzKGN1cnJlbnRVc2VySWQ6IHN0cmluZywgcm9sZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChyb2xlID09PSAnc3R1ZGVudCcpIHtcclxuICAgICAgY29uc3QgY291bnNlbG9ycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyByb2xlOiAnY291bnNlbG9yJyB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlLCBjb2xsZWdlOiB0cnVlIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvdW5zZWxvcnMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHN0dWRlbnRzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJvbGU6ICdzdHVkZW50JyB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlLCBjb2xsZWdlOiB0cnVlIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHN0dWRlbnRzIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKHVzZXJJZDE6IHN0cmluZywgdXNlcklkMjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIE9SOiBbXHJcbiAgICAgICAgICB7IHNlbmRlcklkOiB1c2VySWQxLCByZWNlaXZlcklkOiB1c2VySWQyIH0sXHJcbiAgICAgICAgICB7IHNlbmRlcklkOiB1c2VySWQyLCByZWNlaXZlcklkOiB1c2VySWQxIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnYXNjJyB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgc2VuZGVyOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbWVzc2FnZXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2Uoc2VuZGVySWQ6IHN0cmluZywgcmVjZWl2ZXJJZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHByaXNtYS5tZXNzYWdlLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgc2VuZGVySWQsIHJlY2VpdmVySWQsIGNvbnRlbnQgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLlj5HpgIHlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDcuIOaWh+eroOezu+e7nyAoQXJ0aWNsZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydGljbGVzKCkge1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcHJpc21hLmFydGljbGUuZmluZE1hbnkoe1xyXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFydGljbGVzLm1hcChhID0+ICh7XHJcbiAgICAuLi5hLFxyXG4gICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXJ0aWNsZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgcHJpc21hLmFydGljbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoYXJ0aWNsZSkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYXJ0aWNsZSB9O1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaWh+eroOacquaJvuWIsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLmn6Xor6LlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFydGljbGUoZGF0YTogYW55KSB7XHJcbiAgYXdhaXQgcHJpc21hLmFydGljbGUuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9yOiAn566h55CG5ZGYJyxcclxuICAgICAgdmlld3M6IDAsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5MjA5OTc0NDMxLTI3NjFlYjQzYTc2OD93PTgwMCZxPTgwXCJcclxuICAgIH1cclxuICB9KTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2FydGljbGVzXCIpO1xyXG4gIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2NvbnRlbnRcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXJ0aWNsZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcnRpY2xlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb250ZW50XCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc3R1ZGVudC9hcnRpY2xlc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWIoOmZpOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gOC4g57O757uf566h55CG5LiO55yL5p2/XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluRGFzaGJvYXJkU3RhdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFtzdHVkZW50Q291bnQsIGFwcG9pbnRtZW50Q291bnQsIGNvbXBsZXRlZENvdW50LCByYXdDaGFydERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBwcmlzbWEudXNlci5jb3VudCh7IHdoZXJlOiB7IHJvbGU6ICdzdHVkZW50JyB9IH0pLFxyXG4gICAgICBcclxuICAgICAgLy8g57uf6K6h5omA5pyJ6aKE57qmICjljIXmi6znrYnlvoXkuK3nmoTvvIznlKjkuo7mmL7npLrng63luqYpXHJcbiAgICAgIHByaXNtYS5hcHBvaW50bWVudC5jb3VudCgpLCBcclxuXHJcbiAgICAgIC8vIOe7n+iuoeW3suWujOaIkFxyXG4gICAgICBwcmlzbWEuYXBwb2ludG1lbnQuY291bnQoeyB3aGVyZTogeyBzdGF0dXM6ICdjb21wbGV0ZWQnIH0gfSksXHJcblxyXG4gICAgICAvLyDlm77ooajmlbDmja4gKOe7n+iuoeacgOi/kTflpKkpXHJcbiAgICAgIHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGRhdGU6IHsgZ3RlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgLSA2KSkgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IGRhdGU6IHRydWUgfVxyXG4gICAgICB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGlvblJhdGUgPSBhcHBvaW50bWVudENvdW50ID4gMCBcclxuICAgICAgPyBNYXRoLnJvdW5kKChjb21wbGV0ZWRDb3VudCAvIGFwcG9pbnRtZW50Q291bnQpICogMTAwKSArIFwiJVwiIFxyXG4gICAgICA6IFwiMCVcIjtcclxuXHJcbiAgICBjb25zdCBjaGFydERhdGEgPSBbXTtcclxuICAgIGNvbnN0IHdlZWtNYXAgPSBbJ+WRqOaXpScsICflkajkuIAnLCAn5ZGo5LqMJywgJ+WRqOS4iScsICflkajlm5snLCAn5ZGo5LqUJywgJ+WRqOWFrSddO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSA2OyBpID49IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gaSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcclxuICAgICAgY29uc3QgZGF5ID0gZC5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRhdGVLZXkgPSBgJHttb250aH0vJHtkYXl9YDtcclxuICAgICAgY29uc3Qgd2Vla0xhYmVsID0gd2Vla01hcFtkLmdldERheSgpXTtcclxuXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gcmF3Q2hhcnREYXRhLmZpbHRlcihhcHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwdERhdGUgPSBuZXcgRGF0ZShhcHQuZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGFwdERhdGUuZ2V0RGF0ZSgpID09PSBkYXkgJiYgYXB0RGF0ZS5nZXRNb250aCgpICsgMSA9PT0gbW9udGg7XHJcbiAgICAgIH0pLmxlbmd0aDtcclxuXHJcbiAgICAgIGNoYXJ0RGF0YS5wdXNoKHsgbmFtZTogZGF0ZUtleSwgZGF5OiB3ZWVrTGFiZWwsIHZpc2l0czogY291bnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBzdHVkZW50czogc3R1ZGVudENvdW50LFxyXG4gICAgICAgICAgYXBwb2ludG1lbnRzOiBhcHBvaW50bWVudENvdW50LFxyXG4gICAgICAgICAgY3Jpc2lzOiAwLCAvLyDmmoLml6DljbHmnLrpooTorabpgLvovpFcclxuICAgICAgICAgIHJhdGU6IGNvbXBsZXRpb25SYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFydDogY2hhcnREYXRhXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi55yL5p2/5pWw5o2u5Yqg6L295aSx6LSlOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yqg6L295aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTeXN0ZW1TZXR0aW5ncygpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGNvbmZpZyA9IGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcuZmluZEZpcnN0KCk7XHJcbiAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICBjb25maWcgPSBhd2FpdCBwcmlzbWEuc3lzdGVtQ29uZmlnLmNyZWF0ZSh7IGRhdGE6IHt9IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29uZmlnIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLojrflj5bphY3nva7lpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN5c3RlbVNldHRpbmdzKGRhdGE6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcuZmluZEZpcnN0KCk7XHJcbiAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgYXdhaXQgcHJpc21hLnN5c3RlbUNvbmZpZy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBmaXJzdC5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBsYXRmb3JtTmFtZTogZGF0YS5wbGF0Zm9ybU5hbWUsXHJcbiAgICAgICAgICBob3RsaW5lOiBkYXRhLmhvdGxpbmUsXHJcbiAgICAgICAgICBvcGVuSG91cnM6IGRhdGEub3BlbkhvdXJzLFxyXG4gICAgICAgICAgbWFpbnRlbmFuY2VNb2RlOiBkYXRhLm1haW50ZW5hbmNlTW9kZSA9PT0gJ3RydWUnIHx8IGRhdGEubWFpbnRlbmFuY2VNb2RlID09PSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuacquaJvuWIsOmFjee9ruiusOW9lVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8g5L+d5a2Y6Ieq5Yqp5rWL6K+E57uT5p6cXHJcbi8vIFvkv67mlLldIOiHquWKqea1i+ivhOezu+e7nyAtIOS/neWtmOe7k+aenOW5tuabtOaWsOeUqOaIt+eKtuaAgVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUFzc2Vzc21lbnQoc3R1ZGVudElkOiBzdHJpbmcsIHNjb3JlOiBudW1iZXIsIHJlc3VsdDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIOS/neWtmOa1i+ivhOiusOW9lVxyXG4gICAgYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0dWRlbnRJZCxcclxuICAgICAgICB0eXBlOiAnUEhRLTknLFxyXG4gICAgICAgIHNjb3JlLFxyXG4gICAgICAgIHJlc3VsdFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiDinIUg5paw5aKe77ya5aaC5p6c5YiG5pWw6auY77yM55u05o6l5oqK55So5oi35qCH6K6w5Li66auY6aOO6ZmpXHJcbiAgICAvLyDlgYforr4gPiAxMCDliIbkuLrpu4ToibLpooTorabvvIw+IDE1IOWIhuS4uue6ouiJsuWNseaculxyXG4gICAgaWYgKHNjb3JlID4gMTApIHtcclxuICAgICAgICBjb25zdCBuZXdMZXZlbCA9IHNjb3JlID4gMTUgPyAncmVkJyA6ICd5ZWxsb3cnO1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzdHVkZW50SWQgfSxcclxuICAgICAgICAgICAgZGF0YTogeyByaXNrTGV2ZWw6IG5ld0xldmVsIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Fzc2Vzc21lbnRcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLkv53lrZjmtYvor4TlpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8g6I635Y+W5Y6G5Y+y5rWL6K+E6K6w5b2VICjnlKjkuo7nlLvlm74pXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3Nlc3NtZW50SGlzdG9yeShzdHVkZW50SWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzdHVkZW50SWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdhc2MnIH0gLy8g5oyJ5pe26Ze05q2j5bqP5o6S5YiX77yM5pa55L6/5Zu+6KGo5pi+56S66LaL5Yq/XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi6I635Y+W5Y6G5Y+y5aSx6LSlOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDExLiDljbHmnLrlubLpooQv5Li75Yqo5o+Q6YaS57O757ufIChJbnRlcnZlbnRpb24pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gW+WSqOivouW4iOerr10g6I635Y+W6ZyA6KaB5YWz5rOo55qE6auY6aOO6Zmp5a2m55Sf5YiX6KGoXHJcbi8vIFvkv67mlLldIOiOt+WPlumcgOimgeWFs+azqOeahOmrmOmjjumZqeWtpueUn+WIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Umlza1N0dWRlbnRzKCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDmraXpqqQgMTog5om+5Ye65omA5pyJ6auY5YiG5rWL6K+E55qEIHN0dWRlbnRJZCAo5YiG5pWwID4gMTApXHJcbiAgICBjb25zdCBoaWdoUmlza0Fzc2Vzc21lbnRzID0gYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHNjb3JlOiB7IGd0OiAxMCB9IH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHN0dWRlbnRJZDogdHJ1ZSB9LFxyXG4gICAgICAgIGRpc3RpbmN0OiBbJ3N0dWRlbnRJZCddIC8vIOWOu+mHjVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoaWdoUmlza0lkcyA9IGhpZ2hSaXNrQXNzZXNzbWVudHMubWFwKGEgPT4gYS5zdHVkZW50SWQpO1xyXG5cclxuICAgIC8vIOatpemqpCAyOiDmib7lh7rooqvmoIforrDkuLogcmVkL3llbGxvdyDnmoTnlKjmiLdcclxuICAgIC8vIOatpemqpCAzOiDlkIjlubbmn6Xor6IgLSDlj6ropoHmu6HotrPlhbbkuK3kuIDkuKrmnaHku7blsLHnrpfpq5jpo47pmalcclxuICAgIGNvbnN0IHJpc2tVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICByb2xlOiAnc3R1ZGVudCcsXHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgICAgeyByaXNrTGV2ZWw6IHsgaW46IFsncmVkJywgJ3llbGxvdyddIH0gfSwgLy8g5bey57uP6KKr5qCH6K6w55qEXHJcbiAgICAgICAgICAgIHsgaWQ6IHsgaW46IGhpZ2hSaXNrSWRzIH0gfSAgICAgICAgICAgICAgIC8vIOaIluiAheiZveacquagh+iusOS9huWIhumrmOeahFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIC8vIOafpeacgOi/keeahOW5sumihOiusOW9lVxyXG4gICAgICAgIHN0dWRlbnRJbnRlcnZlbnRpb25zOiB7XHJcbiAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sXHJcbiAgICAgICAgICB0YWtlOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8g5q2l6aqkIDQ6IOihpeWFqOaVsOaNriAo5p+l5pyA6L+R5LiA5qyh5YiG5pWwKVxyXG4gICAgY29uc3QgZW5yaWNoZWRVc2VycyA9IGF3YWl0IFByb21pc2UuYWxsKHJpc2tVc2Vycy5tYXAoYXN5bmMgKHUpID0+IHtcclxuICAgICAgY29uc3QgbGFzdFRlc3QgPSBhd2FpdCBwcmlzbWEuYXNzZXNzbWVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHN0dWRlbnRJZDogdS5pZCB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi51LFxyXG4gICAgICAgIGxhc3RTY29yZTogbGFzdFRlc3Q/LnNjb3JlIHx8IDAsXHJcbiAgICAgICAgbGFzdFRlc3RUaW1lOiBsYXN0VGVzdD8uY3JlYXRlZEF0LFxyXG4gICAgICAgIGxhdGVzdEludGVydmVudGlvbjogdS5zdHVkZW50SW50ZXJ2ZW50aW9uc1swXSB8fCBudWxsXHJcbiAgICAgIH07XHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8g5pyA5ZCO5YaN6L+H5ruk5LiA6YGN77yM56Gu5L+d5Y+q5pi+56S656Gu5a6e5pyJ6aOO6Zmp55qEXHJcbiAgICByZXR1cm4gZW5yaWNoZWRVc2Vycy5maWx0ZXIodSA9PiB1Lmxhc3RTY29yZSA+IDEwIHx8IHUucmlza0xldmVsID09PSAncmVkJyB8fCB1LnJpc2tMZXZlbCA9PT0gJ3llbGxvdycpO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuiOt+WPlumjjumZqeWQjeWNleWksei0pTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gW+WSqOivouW4iOerr10g5Y+R6YCB5o+Q6YaSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kSW50ZXJ2ZW50aW9uUmVtaW5kZXIoc3R1ZGVudElkOiBzdHJpbmcsIGNvdW5zZWxvcklkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW50ZXJ2ZW50aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdHVkZW50SWQsXHJcbiAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY291bnNlbG9yL2ludGVydmVudGlvbnMnKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWPkemAgeWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBb5a2m55Sf56uvXSDmo4Dmn6XmmK/lkKbmnInmnKrlpITnkIbnmoTmj5DphpJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUGVuZGluZ0ludGVydmVudGlvbnMoc3R1ZGVudElkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaW50ZXJ2ZW50aW9uID0gYXdhaXQgcHJpc21hLmludGVydmVudGlvbi5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHN0dWRlbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyAvLyDlj6rmib7mnKrlpITnkIbnmoRcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgY291bnNlbG9yOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGludGVydmVudGlvbjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBb5a2m55Sf56uvXSDlk43lupTmj5DphpIgKOaOpeWPl+aIluaLkue7nSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3BvbmRUb0ludGVydmVudGlvbihpbnRlcnZlbnRpb25JZDogc3RyaW5nLCByZXNwb25zZTogJ2FjY2VwdGVkJyB8ICdyZWplY3RlZCcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludGVydmVudGlvbi51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogaW50ZXJ2ZW50aW9uSWQgfSxcclxuICAgICAgZGF0YTogeyBzdGF0dXM6IHJlc3BvbnNlIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAocmVzcG9uc2UgPT09ICdhY2NlcHRlZCcpIHtcclxuICAgICAgIC8vIOWmguaenOaOpeWPl++8jOmhuuS+v+WPr+S7peWcqOi/memHjOiusOW9leaXpeW/l+aIluiAheWPkemAmuefpVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3N0dWRlbnQvZGFzaGJvYXJkJyk7IC8vIOWIt+aWsOeKtuaAgVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEyLiDmmbrog73pooTnuqbpgLvovpEgKOaguOW/g+eul+azlSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlU2xvdHNGb3JEYXRlKGNvdW5zZWxvcklkOiBzdHJpbmcsIGRhdGVTdHI6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XHJcbiAgICBcclxuICAgIC8vIDEuIOiOt+WPluKAnOaYn+acn+WHoOKAnSAo5rOo5oSP77yaSlMgZ2V0RGF5KCkg5pivIDAtNiAo5ZGo5pelLeWRqOWFrSnvvIzmiJHku6zpnIDopoHovazmiJAgMS03IOaIluiAhei3n+S9oOaVsOaNruW6kyBTY2hlZHVsZSDooajkv53mjIHkuIDoh7QpXHJcbiAgICAvLyDlgYforr7mlbDmja7lupPlrZjnmoTmmK/vvJoxPeWRqOS4gCAuLi4gNT3lkajkupQsIDY95ZGo5YWtLCA3PeWRqOaXpVxyXG4gICAgbGV0IGRheU9mV2VlayA9IHRhcmdldERhdGUuZ2V0RGF5KCk7XHJcbiAgICBpZiAoZGF5T2ZXZWVrID09PSAwKSBkYXlPZldlZWsgPSA3OyAvLyDmiorlkajml6Xku44w5Y+Y5Li6N1xyXG5cclxuICAgIC8vIDIuIOiOt+WPluWSqOivouW4iOeahOOAkOWfuuWHhuaOkuePreOAkShCYXNlIFNjaGVkdWxlKVxyXG4gICAgY29uc3QgYmFzZVNjaGVkdWxlcyA9IGF3YWl0IHByaXNtYS5zY2hlZHVsZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF5T2ZXZWVrLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlIC8vIOWPquaJvuiAgeW4iOW8gOaUvueahOaXtumXtFxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHsgdGltZVNsb3Q6IHRydWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g5aaC5p6c6ICB5biI6L+Z5aSp5Y6L5qC55rKh5o6S54+t77yM55u05o6l6L+U5Zue56m6XHJcbiAgICBpZiAoYmFzZVNjaGVkdWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogW10gfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiDojrflj5bor6Xml6XjgJDlt7LooqvljaDnlKjjgJHnmoTml7bmrrUgKEFwcG9pbnRtZW50cylcclxuICAgIC8vIOaIkeS7rOmcgOimgeafpeivoueKtuaAgeS4uiBwZW5kaW5nKOW+heWuoeaguCkg5ZKMIGNvbmZpcm1lZCjlt7Lnoa7orqQpIOeahO+8jHJlamVjdGVkKOW3suaLkue7nSkg55qE5LiN5Y2g5L2NXHJcbiAgICBjb25zdCBzdGFydE9mRGF5ID0gbmV3IERhdGUoZGF0ZVN0cik7IHN0YXJ0T2ZEYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGRhdGVTdHIpOyBlbmRPZkRheS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG5cclxuICAgIGNvbnN0IGJvb2tlZEFwcG9pbnRtZW50cyA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgZ3RlOiBzdGFydE9mRGF5LFxyXG4gICAgICAgICAgbHRlOiBlbmRPZkRheVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICBpbjogWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddIC8vIOKaoO+4jyDlhbPplK7vvJrlvoXlrqHmoLjlkozlt7Lnoa7orqTpg73nrpfljaDnlKjvvIzpmLLmraLph43lpI3nlLPor7dcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDogeyB0aW1lOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOaPkOWPluW3suiiq+WNoOeUqOeahOaXtumXtOWtl+espuS4suaVsOe7hFxyXG4gICAgY29uc3QgYm9va2VkVGltZXMgPSBib29rZWRBcHBvaW50bWVudHMubWFwKGFwcCA9PiBhcHAudGltZSk7XHJcblxyXG4gICAgLy8gNC4g6K6h566X44CQ6YC76L6R5Y+v55So44CRID0g5Z+65YeG5o6S54+tIC0g5bey6KKr5Y2g55SoXHJcbiAgICBsZXQgYXZhaWxhYmxlU2xvdHMgPSBiYXNlU2NoZWR1bGVzXHJcbiAgICAgIC5tYXAocyA9PiBzLnRpbWVTbG90KVxyXG4gICAgICAuZmlsdGVyKHNsb3QgPT4gIWJvb2tlZFRpbWVzLmluY2x1ZGVzKHNsb3QpKTtcclxuXHJcbiAgICAvLyA1LiDjgJDml7bpl7Tov4fmu6TjgJHvvJrlpoLmnpzmmK/igJzku4rlpKnigJ3vvIzlv4Xpobvov4fmu6Tmjonlt7Lnu4/ov4fljrvnmoTml7bpl7RcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBpc1RvZGF5ID0gbm93LnRvRGF0ZVN0cmluZygpID09PSB0YXJnZXREYXRlLnRvRGF0ZVN0cmluZygpO1xyXG5cclxuICAgIGlmIChpc1RvZGF5KSB7XHJcbiAgICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtCBcIkhIOm1tXCIg5qC85byPXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBjdXJyZW50TWludXRlID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RyID0gYCR7Y3VycmVudEhvdXJ9OiR7Y3VycmVudE1pbnV0ZX1gO1xyXG5cclxuICAgICAgLy8g6L+H5ruk77ya5Y+q5L+d55WZ5byA5aeL5pe26Ze05pma5LqO5b2T5YmN5pe26Ze055qEIHNsb3RcclxuICAgICAgLy8g5YGH6K6+IHNsb3Qg5qC85byP5Li6IFwiMDg6MzAgLSAwOToyMFwi77yM5oiR5Lus5Y+W5YmNNeS9jSBcIjA4OjMwXCIg6L+b6KGM5q+U6L6DXHJcbiAgICAgIGF2YWlsYWJsZVNsb3RzID0gYXZhaWxhYmxlU2xvdHMuZmlsdGVyKHNsb3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHNsb3Quc3BsaXQoJyAtICcpWzBdOyAvLyDlj5blh7ogXCIwODozMFwiXHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZSA+IGN1cnJlbnRUaW1lU3RyOyAvLyDlrZfnrKbkuLLmr5TovoMgXCIwOTozMFwiID4gXCIwODozMFwiIOaYr+acieaViOeahFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBhdmFpbGFibGVTbG90cy5zb3J0KCkgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLorqHnrpflj6/nlKjml7bpl7TlpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBa29Cc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:7c9b46 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60d06e6e862e7cff8c80ec7e8674ceb819581ce006":"respondToIntervention"},"app/actions.ts",""] */ __turbopack_context__.s([
    "respondToIntervention",
    ()=>respondToIntervention
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var respondToIntervention = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d06e6e862e7cff8c80ec7e8674ceb819581ce006", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "respondToIntervention"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4g55So5oi3566h55CGICjnrqHnkIblkZjnlKgpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXJzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLojrflj5bnlKjmiLflpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KFwidXNlcm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBjb2xsZWdlID0gZm9ybURhdGEuZ2V0KFwiY29sbGVnZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIGNvbGxlZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsIC8vIOm7mOiupOWvhueggVxyXG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vYXBpLmRpY2ViZWFyLmNvbS83LngvYXZhdGFhYXJzL3N2Zz9zZWVkPSR7bmFtZX1gXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3VzZXJzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yib5bu65aSx6LSl77yM5a2m5Y+35Y+v6IO95bey5a2Y5ZyoXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB1c2VybmFtZSA9IGZvcm1EYXRhLmdldChcInVzZXJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgY29sbGVnZSA9IGZvcm1EYXRhLmdldChcImNvbGxlZ2VcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBuYW1lLCB1c2VybmFtZSwgcm9sZSwgY29sbGVnZSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi91c2Vyc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuabtOaWsOWksei0pe+8jOWtpuWPt+WPr+iDveWGsueqgVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS51c2VyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi91c2Vyc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWIoOmZpOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMi4g6K6k6K+B5LiO5p+l6K+iICjpgJrnlKgpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luQWN0aW9uKHVzZXJuYW1lOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgdXNlcm5hbWUsIHJvbGUgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLnlKjmiLfkuI3lrZjlnKjmiJbop5LoibLplJnor69cIiB9O1xyXG4gICAgXHJcbiAgICAvLyDov5Tlm57nlKjmiLfkv6Hmga/vvIjkuI3lkKvlr4bnoIHvvIlcclxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnVzZXJJbmZvIH0gPSB1c2VyO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlckluZm8gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaVsOaNruW6k+i/nuaOpeWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnNlbG9ycygpIHtcclxuICByZXR1cm4gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHsgcm9sZTogJ2NvdW5zZWxvcicgfSxcclxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29sbGVnZTogdHJ1ZSwgYXZhdGFyOiB0cnVlIH0gLy8g5piO56Gu6YCJ5oup6ZyA6KaB55qE5a2X5q61XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAzLiDpooTnuqbns7vnu58gKOaguOW/g+S4muWKoSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyDinIUg5L+u5aSN77ya6I635Y+W6aKE57qm5YiX6KGoICjljrvpmaTkuoYgZW1haWwg5a2X5q61KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwb2ludG1lbnRzKHVzZXJJZDogc3RyaW5nLCByb2xlOiAnc3R1ZGVudCcgfCAnY291bnNlbG9yJykge1xyXG4gIGNvbnN0IHdoZXJlID0gcm9sZSA9PT0gJ3N0dWRlbnQnID8geyBzdHVkZW50SWQ6IHVzZXJJZCB9IDogeyBjb3Vuc2Vsb3JJZDogdXNlcklkIH07XHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICB3aGVyZSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgLy8g4pqg77iPIOWFs+mUruS/ruaUue+8mlVzZXLooajmsqHmnIllbWFpbOWtl+aute+8jOaUueafpSB1c2VybmFtZSjlrablj7cpIOWSjCBjb2xsZWdlXHJcbiAgICAgIHN0dWRlbnQ6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIHVzZXJuYW1lOiB0cnVlLCBjb2xsZWdlOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9LFxyXG4gICAgICBjb3Vuc2Vsb3I6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvbGxlZ2U6IHRydWUsIGF2YXRhcjogdHJ1ZSB9IH0sXHJcbiAgICAgIHRlc3RSZXN1bHQ6IHRydWUsIC8vIOiOt+WPluWFs+iBlOeahOa1i+ivhOe7k+aenFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgZGF0ZTogJ2Rlc2MnIH1cclxuICB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8g4pyFIOWIm+W7uuW4puivpue7huaho+ahiOeahOmihOe6plxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXBwb2ludG1lbnRXaXRoRGV0YWlscyhkYXRhOiBhbnkpIHtcclxuICAvLyDmo4Dmn6Xml7bpl7TlhrLnqoFcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgY291bnNlbG9ySWQ6IGRhdGEuY291bnNlbG9ySWQsXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0ZSksXHJcbiAgICAgIHRpbWU6IGRhdGEudGltZSxcclxuICAgICAgc3RhdHVzOiAnY29uZmlybWVkJyBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIuivpeaXtuauteW3suiiq+WNoOeUqFwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0dWRlbnRJZDogZGF0YS5zdHVkZW50SWQsXHJcbiAgICAgICAgY291bnNlbG9ySWQ6IGRhdGEuY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0YS5kYXRlKSxcclxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXHJcbiAgICAgICAgLy8g6K+m57uG5L+h5oGvXHJcbiAgICAgICAgaWRDYXJkOiBkYXRhLmlkQ2FyZCxcclxuICAgICAgICBzdHVkZW50SWROdW06IGRhdGEuc3R1ZGVudElkTnVtLFxyXG4gICAgICAgIHBob25lOiBkYXRhLnBob25lLFxyXG4gICAgICAgIGNvbGxlZ2U6IGRhdGEuY29sbGVnZSxcclxuICAgICAgICBtYWpvcjogZGF0YS5tYWpvcixcclxuICAgICAgICBncmFkZTogZGF0YS5ncmFkZSxcclxuICAgICAgICBjbGFzc0luZm86IGRhdGEuY2xhc3NJbmZvLFxyXG4gICAgICAgIG1lbnRhbEhpc3Rvcnk6IGRhdGEubWVudGFsSGlzdG9yeSxcclxuICAgICAgICBwaHlzaWNhbFN0YXRlOiBkYXRhLnBoeXNpY2FsU3RhdGUsXHJcbiAgICAgICAgcHJvYmxlbVR5cGU6IGRhdGEucHJvYmxlbVR5cGUsXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9zdHVkZW50L2Jvb2tpbmcnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY291bnNlbG9yL2Rhc2hib2FyZCcpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIumihOe6puWIm+W7uuW8guW4uFwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDmm7TmlrDpooTnuqbnirbmgIEgKOWuoeaJuS/mi5Lnu50v5a6M5oiQKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwb2ludG1lbnRTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcclxuICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICBkYXRhOiB7IHN0YXR1cyB9XHJcbiAgfSk7XHJcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Rhc2hib2FyZFwiKTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Jvb2tpbmdcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyDmm7TmlrDlkqjor6LorrDlvZUgKOWSqOivouW4iOWGmee7k+ahiOiusOW9lSlcclxuLy8gYXBwL2FjdGlvbnMudHNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb25zdWx0YXRpb25SZWNvcmQoaWQ6IHN0cmluZywgbm90ZXM6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBub3RlcywgXHJcbiAgICAgICAgc3RhdHVzOiAnY29tcGxldGVkJyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jb3Vuc2Vsb3IvZGFzaGJvYXJkXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY291bnNlbG9yL2Nhc2VzXCIpOyAvLyDnoa7kv53liLfmlrDmoaPmoYjpobXpnaJcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuS/neWtmOWSqOivouiusOW9leWksei0pTpcIiwgZXJyb3IpOyAvLyDmiZPljbDplJnor6/ml6Xlv5fmlrnkvr/mjpLmn6VcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDQuIOW/g+eQhua1i+ivhOezu+e7nyAoVGVzdFJlc3VsdClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBb5L+u5pS5XSDmj5DkuqTlv4PnkIbmtYvor4Tnu5PmnpwgKOS/ruWkjeeJiO+8muaUr+aMgSBTRFMvU0FTIOagh+WHhuWIhiArIOmYsuatoumHjeWkjeaKpemUmSlcclxuLy8gW+S/ruaUuV0g5o+Q5Lqk6aKE57qm5YmN5rWLICjnuq/orrDlvZXniYjvvJrlj6rlrZjliIbvvIzkuI3miqXorabvvIzkuI3op6blj5HljbHmnLrlubLpooQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRQc3ljaFRlc3QoYXBwb2ludG1lbnRJZDogc3RyaW5nLCBhbnN3ZXJzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBzZHMsIHNhcywgc2VzIH0gPSBhbnN3ZXJzO1xyXG5cclxuICAgIC8vIDEuIOiuoeeul+WOn+Wni+WIhlxyXG4gICAgY29uc3Qgc2RzUmF3ID0gKHNkcyB8fCBbXSkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApO1xyXG4gICAgY29uc3Qgc2FzUmF3ID0gKHNhcyB8fCBbXSkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApO1xyXG4gICAgY29uc3Qgc2VzU2NvcmUgPSAoc2VzIHx8IFtdKS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICsgYiwgMCk7XHJcblxyXG4gICAgLy8gMi4g6K6h566X5qCH5YeG5YiGICjku4XlgZrorrDlvZUpXHJcbiAgICBjb25zdCBzZHNTY29yZSA9IE1hdGguZmxvb3Ioc2RzUmF3ICogMS4yNSk7XHJcbiAgICBjb25zdCBzYXNTY29yZSA9IE1hdGguZmxvb3Ioc2FzUmF3ICogMS4yNSk7XHJcblxyXG4gICAgLy8gMy4g6L+Z6YeM55qEIGlzSGlnaFJpc2sg5LuF55So5LqO5Y2V5qyh6K6w5b2V77yM5LiN5YaN6IGU5Yqo57O757uf5oql6K2mXHJcbiAgICBsZXQgaXNIaWdoUmlzayA9IGZhbHNlO1xyXG4gICAgbGV0IHJpc2tMZXZlbCA9ICdub3JtYWwnO1xyXG5cclxuICAgIGlmIChzZHNTY29yZSA+PSA1MyB8fCBzYXNTY29yZSA+PSA1MCkge1xyXG4gICAgICAgIGlzSGlnaFJpc2sgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzZHNTY29yZSA+PSA2MyB8fCBzYXNTY29yZSA+PSA2MCkge1xyXG4gICAgICAgICAgICByaXNrTGV2ZWwgPSAncmVkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaXNrTGV2ZWwgPSAneWVsbG93JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4g5L+d5a2Y57uT5p6c5Yiw5pWw5o2u5bqTIChVcHNlcnTpmLLmraLph43lpI3miqXplJkpXHJcbiAgICBhd2FpdCBwcmlzbWEudGVzdFJlc3VsdC51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGFwcG9pbnRtZW50SWQ6IGFwcG9pbnRtZW50SWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICBhcHBvaW50bWVudElkLFxyXG4gICAgICAgICAgICBzZHNTY29yZSxcclxuICAgICAgICAgICAgc2FzU2NvcmUsXHJcbiAgICAgICAgICAgIHNlc1Njb3JlLFxyXG4gICAgICAgICAgICByYXdBbnN3ZXJzOiBKU09OLnN0cmluZ2lmeShhbnN3ZXJzKSxcclxuICAgICAgICAgICAgaXNIaWdoUmlzaywgLy8g5a2Y5YWl5pWw5o2u5bqT5L6b5ZKo6K+i5biI5p+l55yL77yM5L2G5LiN6Kem5Y+R57O757uf5Yqo5L2cXHJcbiAgICAgICAgICAgIHJpc2tMZXZlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgICAgIHNkc1Njb3JlLFxyXG4gICAgICAgICAgICBzYXNTY29yZSxcclxuICAgICAgICAgICAgc2VzU2NvcmUsXHJcbiAgICAgICAgICAgIHJhd0Fuc3dlcnM6IEpTT04uc3RyaW5naWZ5KGFuc3dlcnMpLFxyXG4gICAgICAgICAgICBpc0hpZ2hSaXNrLFxyXG4gICAgICAgICAgICByaXNrTGV2ZWwsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOKdjCDlt7LliKDpmaTvvJpwcmlzbWEuYXBwb2ludG1lbnQudXBkYXRlICjmoIforrDpooTnuqbkuLrljbHmnLopIOeahOS7o+eggVxyXG4gICAgLy8g4p2MIOW3suWIoOmZpO+8mnByaXNtYS51c2VyLnVwZGF0ZSAo5qCH6K6w5a2m55Sf5Li657qi5ZCNKSDnmoTku6PnoIFcclxuICAgIC8vIOKdjCDlt7LliKDpmaTvvJpDcmlzaXMg55u45YWz55qE6aG16Z2i5Yi35pawXHJcblxyXG4gICAgLy8gNS4g5LuF5Yi35paw6aKE57qm5YiX6KGoXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3N0dWRlbnQvYm9va2luZycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb3Vuc2Vsb3IvY2FzZXMnKTtcclxuXHJcbiAgICAvLyDov5Tlm57miJDlip/vvIzkuI3lho3ov5Tlm54gaXNIaWdoUmlzayDnu5nliY3nq6/lvLnnqpdcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLmj5DkuqTmtYvor4TlpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwi5o+Q5Lqk5aSx6LSl77yM6K+36YeN6K+VXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA1LiDmjpLnj63ns7vnu58gKFNjaGVkdWxlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vuc2Vsb3JTY2hlZHVsZShjb3Vuc2Vsb3JJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNjaGVkdWxlcyA9IGF3YWl0IHByaXNtYS5zY2hlZHVsZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGNvdW5zZWxvcklkLCBpc0F2YWlsYWJsZTogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHNjaGVkdWxlcyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogW10gfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTY2hlZHVsZShjb3Vuc2Vsb3JJZDogc3RyaW5nLCBzbG90czogYW55W10pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb3BzID0gc2xvdHMubWFwKHNsb3QgPT4gXHJcbiAgICAgIHByaXNtYS5zY2hlZHVsZS51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBjb3Vuc2Vsb3JJZF9kYXlPZldlZWtfdGltZVNsb3Q6IHtcclxuICAgICAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgICAgIGRheU9mV2Vlazogc2xvdC5kYXlPZldlZWssXHJcbiAgICAgICAgICAgIHRpbWVTbG90OiBzbG90LnRpbWVTbG90XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IHsgaXNBdmFpbGFibGU6IHNsb3QuaXNBdmFpbGFibGUgfSxcclxuICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgIGNvdW5zZWxvcklkLFxyXG4gICAgICAgICAgZGF5T2ZXZWVrOiBzbG90LmRheU9mV2VlayxcclxuICAgICAgICAgIHRpbWVTbG90OiBzbG90LnRpbWVTbG90LFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHNsb3QuaXNBdmFpbGFibGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKG9wcyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuS/neWtmOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gNi4g6IGK5aSp57O757ufIChNZXNzYWdlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhdENvbnRhY3RzKGN1cnJlbnRVc2VySWQ6IHN0cmluZywgcm9sZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChyb2xlID09PSAnc3R1ZGVudCcpIHtcclxuICAgICAgY29uc3QgY291bnNlbG9ycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyByb2xlOiAnY291bnNlbG9yJyB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlLCBjb2xsZWdlOiB0cnVlIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvdW5zZWxvcnMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHN0dWRlbnRzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHJvbGU6ICdzdHVkZW50JyB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYXZhdGFyOiB0cnVlLCBjb2xsZWdlOiB0cnVlIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHN0dWRlbnRzIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKHVzZXJJZDE6IHN0cmluZywgdXNlcklkMjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIE9SOiBbXHJcbiAgICAgICAgICB7IHNlbmRlcklkOiB1c2VySWQxLCByZWNlaXZlcklkOiB1c2VySWQyIH0sXHJcbiAgICAgICAgICB7IHNlbmRlcklkOiB1c2VySWQyLCByZWNlaXZlcklkOiB1c2VySWQxIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnYXNjJyB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgc2VuZGVyOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbWVzc2FnZXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2Uoc2VuZGVySWQ6IHN0cmluZywgcmVjZWl2ZXJJZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHByaXNtYS5tZXNzYWdlLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgc2VuZGVySWQsIHJlY2VpdmVySWQsIGNvbnRlbnQgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtZXNzYWdlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLlj5HpgIHlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDcuIOaWh+eroOezu+e7nyAoQXJ0aWNsZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydGljbGVzKCkge1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcHJpc21hLmFydGljbGUuZmluZE1hbnkoe1xyXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFydGljbGVzLm1hcChhID0+ICh7XHJcbiAgICAuLi5hLFxyXG4gICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXJ0aWNsZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgcHJpc21hLmFydGljbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoYXJ0aWNsZSkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYXJ0aWNsZSB9O1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuaWh+eroOacquaJvuWIsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLmn6Xor6LlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFydGljbGUoZGF0YTogYW55KSB7XHJcbiAgYXdhaXQgcHJpc21hLmFydGljbGUuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYXV0aG9yOiAn566h55CG5ZGYJyxcclxuICAgICAgdmlld3M6IDAsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5MjA5OTc0NDMxLTI3NjFlYjQzYTc2OD93PTgwMCZxPTgwXCJcclxuICAgIH1cclxuICB9KTtcclxuICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2FydGljbGVzXCIpO1xyXG4gIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2NvbnRlbnRcIik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXJ0aWNsZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcnRpY2xlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb250ZW50XCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc3R1ZGVudC9hcnRpY2xlc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWIoOmZpOWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gOC4g57O757uf566h55CG5LiO55yL5p2/XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluRGFzaGJvYXJkU3RhdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFtzdHVkZW50Q291bnQsIGFwcG9pbnRtZW50Q291bnQsIGNvbXBsZXRlZENvdW50LCByYXdDaGFydERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBwcmlzbWEudXNlci5jb3VudCh7IHdoZXJlOiB7IHJvbGU6ICdzdHVkZW50JyB9IH0pLFxyXG4gICAgICBcclxuICAgICAgLy8g57uf6K6h5omA5pyJ6aKE57qmICjljIXmi6znrYnlvoXkuK3nmoTvvIznlKjkuo7mmL7npLrng63luqYpXHJcbiAgICAgIHByaXNtYS5hcHBvaW50bWVudC5jb3VudCgpLCBcclxuXHJcbiAgICAgIC8vIOe7n+iuoeW3suWujOaIkFxyXG4gICAgICBwcmlzbWEuYXBwb2ludG1lbnQuY291bnQoeyB3aGVyZTogeyBzdGF0dXM6ICdjb21wbGV0ZWQnIH0gfSksXHJcblxyXG4gICAgICAvLyDlm77ooajmlbDmja4gKOe7n+iuoeacgOi/kTflpKkpXHJcbiAgICAgIHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGRhdGU6IHsgZ3RlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgLSA2KSkgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IGRhdGU6IHRydWUgfVxyXG4gICAgICB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGlvblJhdGUgPSBhcHBvaW50bWVudENvdW50ID4gMCBcclxuICAgICAgPyBNYXRoLnJvdW5kKChjb21wbGV0ZWRDb3VudCAvIGFwcG9pbnRtZW50Q291bnQpICogMTAwKSArIFwiJVwiIFxyXG4gICAgICA6IFwiMCVcIjtcclxuXHJcbiAgICBjb25zdCBjaGFydERhdGEgPSBbXTtcclxuICAgIGNvbnN0IHdlZWtNYXAgPSBbJ+WRqOaXpScsICflkajkuIAnLCAn5ZGo5LqMJywgJ+WRqOS4iScsICflkajlm5snLCAn5ZGo5LqUJywgJ+WRqOWFrSddO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSA2OyBpID49IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gaSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcclxuICAgICAgY29uc3QgZGF5ID0gZC5nZXREYXRlKCk7XHJcbiAgICAgIGNvbnN0IGRhdGVLZXkgPSBgJHttb250aH0vJHtkYXl9YDtcclxuICAgICAgY29uc3Qgd2Vla0xhYmVsID0gd2Vla01hcFtkLmdldERheSgpXTtcclxuXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gcmF3Q2hhcnREYXRhLmZpbHRlcihhcHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwdERhdGUgPSBuZXcgRGF0ZShhcHQuZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGFwdERhdGUuZ2V0RGF0ZSgpID09PSBkYXkgJiYgYXB0RGF0ZS5nZXRNb250aCgpICsgMSA9PT0gbW9udGg7XHJcbiAgICAgIH0pLmxlbmd0aDtcclxuXHJcbiAgICAgIGNoYXJ0RGF0YS5wdXNoKHsgbmFtZTogZGF0ZUtleSwgZGF5OiB3ZWVrTGFiZWwsIHZpc2l0czogY291bnQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBzdHVkZW50czogc3R1ZGVudENvdW50LFxyXG4gICAgICAgICAgYXBwb2ludG1lbnRzOiBhcHBvaW50bWVudENvdW50LFxyXG4gICAgICAgICAgY3Jpc2lzOiAwLCAvLyDmmoLml6DljbHmnLrpooTorabpgLvovpFcclxuICAgICAgICAgIHJhdGU6IGNvbXBsZXRpb25SYXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFydDogY2hhcnREYXRhXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi55yL5p2/5pWw5o2u5Yqg6L295aSx6LSlOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi5Yqg6L295aSx6LSlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTeXN0ZW1TZXR0aW5ncygpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGNvbmZpZyA9IGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcuZmluZEZpcnN0KCk7XHJcbiAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICBjb25maWcgPSBhd2FpdCBwcmlzbWEuc3lzdGVtQ29uZmlnLmNyZWF0ZSh7IGRhdGE6IHt9IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY29uZmlnIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLojrflj5bphY3nva7lpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN5c3RlbVNldHRpbmdzKGRhdGE6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGF3YWl0IHByaXNtYS5zeXN0ZW1Db25maWcuZmluZEZpcnN0KCk7XHJcbiAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgYXdhaXQgcHJpc21hLnN5c3RlbUNvbmZpZy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBmaXJzdC5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBsYXRmb3JtTmFtZTogZGF0YS5wbGF0Zm9ybU5hbWUsXHJcbiAgICAgICAgICBob3RsaW5lOiBkYXRhLmhvdGxpbmUsXHJcbiAgICAgICAgICBvcGVuSG91cnM6IGRhdGEub3BlbkhvdXJzLFxyXG4gICAgICAgICAgbWFpbnRlbmFuY2VNb2RlOiBkYXRhLm1haW50ZW5hbmNlTW9kZSA9PT0gJ3RydWUnIHx8IGRhdGEubWFpbnRlbmFuY2VNb2RlID09PSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuacquaJvuWIsOmFjee9ruiusOW9lVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8g5L+d5a2Y6Ieq5Yqp5rWL6K+E57uT5p6cXHJcbi8vIFvkv67mlLldIOiHquWKqea1i+ivhOezu+e7nyAtIOS/neWtmOe7k+aenOW5tuabtOaWsOeUqOaIt+eKtuaAgVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUFzc2Vzc21lbnQoc3R1ZGVudElkOiBzdHJpbmcsIHNjb3JlOiBudW1iZXIsIHJlc3VsdDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIOS/neWtmOa1i+ivhOiusOW9lVxyXG4gICAgYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0dWRlbnRJZCxcclxuICAgICAgICB0eXBlOiAnUEhRLTknLFxyXG4gICAgICAgIHNjb3JlLFxyXG4gICAgICAgIHJlc3VsdFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiDinIUg5paw5aKe77ya5aaC5p6c5YiG5pWw6auY77yM55u05o6l5oqK55So5oi35qCH6K6w5Li66auY6aOO6ZmpXHJcbiAgICAvLyDlgYforr4gPiAxMCDliIbkuLrpu4ToibLpooTorabvvIw+IDE1IOWIhuS4uue6ouiJsuWNseaculxyXG4gICAgaWYgKHNjb3JlID4gMTApIHtcclxuICAgICAgICBjb25zdCBuZXdMZXZlbCA9IHNjb3JlID4gMTUgPyAncmVkJyA6ICd5ZWxsb3cnO1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBzdHVkZW50SWQgfSxcclxuICAgICAgICAgICAgZGF0YTogeyByaXNrTGV2ZWw6IG5ld0xldmVsIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zdHVkZW50L2Fzc2Vzc21lbnRcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLkv53lrZjmtYvor4TlpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLkv53lrZjlpLHotKVcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8g6I635Y+W5Y6G5Y+y5rWL6K+E6K6w5b2VICjnlKjkuo7nlLvlm74pXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBc3Nlc3NtZW50SGlzdG9yeShzdHVkZW50SWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzdHVkZW50SWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdhc2MnIH0gLy8g5oyJ5pe26Ze05q2j5bqP5o6S5YiX77yM5pa55L6/5Zu+6KGo5pi+56S66LaL5Yq/XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi6I635Y+W5Y6G5Y+y5aSx6LSlOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDExLiDljbHmnLrlubLpooQv5Li75Yqo5o+Q6YaS57O757ufIChJbnRlcnZlbnRpb24pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gW+WSqOivouW4iOerr10g6I635Y+W6ZyA6KaB5YWz5rOo55qE6auY6aOO6Zmp5a2m55Sf5YiX6KGoXHJcbi8vIFvkv67mlLldIOiOt+WPlumcgOimgeWFs+azqOeahOmrmOmjjumZqeWtpueUn+WIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Umlza1N0dWRlbnRzKCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDmraXpqqQgMTog5om+5Ye65omA5pyJ6auY5YiG5rWL6K+E55qEIHN0dWRlbnRJZCAo5YiG5pWwID4gMTApXHJcbiAgICBjb25zdCBoaWdoUmlza0Fzc2Vzc21lbnRzID0gYXdhaXQgcHJpc21hLmFzc2Vzc21lbnQuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IHNjb3JlOiB7IGd0OiAxMCB9IH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHN0dWRlbnRJZDogdHJ1ZSB9LFxyXG4gICAgICAgIGRpc3RpbmN0OiBbJ3N0dWRlbnRJZCddIC8vIOWOu+mHjVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoaWdoUmlza0lkcyA9IGhpZ2hSaXNrQXNzZXNzbWVudHMubWFwKGEgPT4gYS5zdHVkZW50SWQpO1xyXG5cclxuICAgIC8vIOatpemqpCAyOiDmib7lh7rooqvmoIforrDkuLogcmVkL3llbGxvdyDnmoTnlKjmiLdcclxuICAgIC8vIOatpemqpCAzOiDlkIjlubbmn6Xor6IgLSDlj6ropoHmu6HotrPlhbbkuK3kuIDkuKrmnaHku7blsLHnrpfpq5jpo47pmalcclxuICAgIGNvbnN0IHJpc2tVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICByb2xlOiAnc3R1ZGVudCcsXHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgICAgeyByaXNrTGV2ZWw6IHsgaW46IFsncmVkJywgJ3llbGxvdyddIH0gfSwgLy8g5bey57uP6KKr5qCH6K6w55qEXHJcbiAgICAgICAgICAgIHsgaWQ6IHsgaW46IGhpZ2hSaXNrSWRzIH0gfSAgICAgICAgICAgICAgIC8vIOaIluiAheiZveacquagh+iusOS9huWIhumrmOeahFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIC8vIOafpeacgOi/keeahOW5sumihOiusOW9lVxyXG4gICAgICAgIHN0dWRlbnRJbnRlcnZlbnRpb25zOiB7XHJcbiAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sXHJcbiAgICAgICAgICB0YWtlOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8g5q2l6aqkIDQ6IOihpeWFqOaVsOaNriAo5p+l5pyA6L+R5LiA5qyh5YiG5pWwKVxyXG4gICAgY29uc3QgZW5yaWNoZWRVc2VycyA9IGF3YWl0IFByb21pc2UuYWxsKHJpc2tVc2Vycy5tYXAoYXN5bmMgKHUpID0+IHtcclxuICAgICAgY29uc3QgbGFzdFRlc3QgPSBhd2FpdCBwcmlzbWEuYXNzZXNzbWVudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHN0dWRlbnRJZDogdS5pZCB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi51LFxyXG4gICAgICAgIGxhc3RTY29yZTogbGFzdFRlc3Q/LnNjb3JlIHx8IDAsXHJcbiAgICAgICAgbGFzdFRlc3RUaW1lOiBsYXN0VGVzdD8uY3JlYXRlZEF0LFxyXG4gICAgICAgIGxhdGVzdEludGVydmVudGlvbjogdS5zdHVkZW50SW50ZXJ2ZW50aW9uc1swXSB8fCBudWxsXHJcbiAgICAgIH07XHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8g5pyA5ZCO5YaN6L+H5ruk5LiA6YGN77yM56Gu5L+d5Y+q5pi+56S656Gu5a6e5pyJ6aOO6Zmp55qEXHJcbiAgICByZXR1cm4gZW5yaWNoZWRVc2Vycy5maWx0ZXIodSA9PiB1Lmxhc3RTY29yZSA+IDEwIHx8IHUucmlza0xldmVsID09PSAncmVkJyB8fCB1LnJpc2tMZXZlbCA9PT0gJ3llbGxvdycpO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuiOt+WPlumjjumZqeWQjeWNleWksei0pTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gW+WSqOivouW4iOerr10g5Y+R6YCB5o+Q6YaSXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kSW50ZXJ2ZW50aW9uUmVtaW5kZXIoc3R1ZGVudElkOiBzdHJpbmcsIGNvdW5zZWxvcklkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW50ZXJ2ZW50aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdHVkZW50SWQsXHJcbiAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY291bnNlbG9yL2ludGVydmVudGlvbnMnKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIuWPkemAgeWksei0pVwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBb5a2m55Sf56uvXSDmo4Dmn6XmmK/lkKbmnInmnKrlpITnkIbnmoTmj5DphpJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUGVuZGluZ0ludGVydmVudGlvbnMoc3R1ZGVudElkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaW50ZXJ2ZW50aW9uID0gYXdhaXQgcHJpc21hLmludGVydmVudGlvbi5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHN0dWRlbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyAvLyDlj6rmib7mnKrlpITnkIbnmoRcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgY291bnNlbG9yOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBhdmF0YXI6IHRydWUgfSB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGludGVydmVudGlvbjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBb5a2m55Sf56uvXSDlk43lupTmj5DphpIgKOaOpeWPl+aIluaLkue7nSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3BvbmRUb0ludGVydmVudGlvbihpbnRlcnZlbnRpb25JZDogc3RyaW5nLCByZXNwb25zZTogJ2FjY2VwdGVkJyB8ICdyZWplY3RlZCcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludGVydmVudGlvbi51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogaW50ZXJ2ZW50aW9uSWQgfSxcclxuICAgICAgZGF0YTogeyBzdGF0dXM6IHJlc3BvbnNlIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAocmVzcG9uc2UgPT09ICdhY2NlcHRlZCcpIHtcclxuICAgICAgIC8vIOWmguaenOaOpeWPl++8jOmhuuS+v+WPr+S7peWcqOi/memHjOiusOW9leaXpeW/l+aIluiAheWPkemAmuefpVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3N0dWRlbnQvZGFzaGJvYXJkJyk7IC8vIOWIt+aWsOeKtuaAgVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEyLiDmmbrog73pooTnuqbpgLvovpEgKOaguOW/g+eul+azlSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlU2xvdHNGb3JEYXRlKGNvdW5zZWxvcklkOiBzdHJpbmcsIGRhdGVTdHI6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XHJcbiAgICBcclxuICAgIC8vIDEuIOiOt+WPluKAnOaYn+acn+WHoOKAnSAo5rOo5oSP77yaSlMgZ2V0RGF5KCkg5pivIDAtNiAo5ZGo5pelLeWRqOWFrSnvvIzmiJHku6zpnIDopoHovazmiJAgMS03IOaIluiAhei3n+S9oOaVsOaNruW6kyBTY2hlZHVsZSDooajkv53mjIHkuIDoh7QpXHJcbiAgICAvLyDlgYforr7mlbDmja7lupPlrZjnmoTmmK/vvJoxPeWRqOS4gCAuLi4gNT3lkajkupQsIDY95ZGo5YWtLCA3PeWRqOaXpVxyXG4gICAgbGV0IGRheU9mV2VlayA9IHRhcmdldERhdGUuZ2V0RGF5KCk7XHJcbiAgICBpZiAoZGF5T2ZXZWVrID09PSAwKSBkYXlPZldlZWsgPSA3OyAvLyDmiorlkajml6Xku44w5Y+Y5Li6N1xyXG5cclxuICAgIC8vIDIuIOiOt+WPluWSqOivouW4iOeahOOAkOWfuuWHhuaOkuePreOAkShCYXNlIFNjaGVkdWxlKVxyXG4gICAgY29uc3QgYmFzZVNjaGVkdWxlcyA9IGF3YWl0IHByaXNtYS5zY2hlZHVsZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF5T2ZXZWVrLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlIC8vIOWPquaJvuiAgeW4iOW8gOaUvueahOaXtumXtFxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHsgdGltZVNsb3Q6IHRydWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g5aaC5p6c6ICB5biI6L+Z5aSp5Y6L5qC55rKh5o6S54+t77yM55u05o6l6L+U5Zue56m6XHJcbiAgICBpZiAoYmFzZVNjaGVkdWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogW10gfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiDojrflj5bor6Xml6XjgJDlt7LooqvljaDnlKjjgJHnmoTml7bmrrUgKEFwcG9pbnRtZW50cylcclxuICAgIC8vIOaIkeS7rOmcgOimgeafpeivoueKtuaAgeS4uiBwZW5kaW5nKOW+heWuoeaguCkg5ZKMIGNvbmZpcm1lZCjlt7Lnoa7orqQpIOeahO+8jHJlamVjdGVkKOW3suaLkue7nSkg55qE5LiN5Y2g5L2NXHJcbiAgICBjb25zdCBzdGFydE9mRGF5ID0gbmV3IERhdGUoZGF0ZVN0cik7IHN0YXJ0T2ZEYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGRhdGVTdHIpOyBlbmRPZkRheS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG5cclxuICAgIGNvbnN0IGJvb2tlZEFwcG9pbnRtZW50cyA9IGF3YWl0IHByaXNtYS5hcHBvaW50bWVudC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgY291bnNlbG9ySWQsXHJcbiAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgZ3RlOiBzdGFydE9mRGF5LFxyXG4gICAgICAgICAgbHRlOiBlbmRPZkRheVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICBpbjogWydwZW5kaW5nJywgJ2NvbmZpcm1lZCddIC8vIOKaoO+4jyDlhbPplK7vvJrlvoXlrqHmoLjlkozlt7Lnoa7orqTpg73nrpfljaDnlKjvvIzpmLLmraLph43lpI3nlLPor7dcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDogeyB0aW1lOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOaPkOWPluW3suiiq+WNoOeUqOeahOaXtumXtOWtl+espuS4suaVsOe7hFxyXG4gICAgY29uc3QgYm9va2VkVGltZXMgPSBib29rZWRBcHBvaW50bWVudHMubWFwKGFwcCA9PiBhcHAudGltZSk7XHJcblxyXG4gICAgLy8gNC4g6K6h566X44CQ6YC76L6R5Y+v55So44CRID0g5Z+65YeG5o6S54+tIC0g5bey6KKr5Y2g55SoXHJcbiAgICBsZXQgYXZhaWxhYmxlU2xvdHMgPSBiYXNlU2NoZWR1bGVzXHJcbiAgICAgIC5tYXAocyA9PiBzLnRpbWVTbG90KVxyXG4gICAgICAuZmlsdGVyKHNsb3QgPT4gIWJvb2tlZFRpbWVzLmluY2x1ZGVzKHNsb3QpKTtcclxuXHJcbiAgICAvLyA1LiDjgJDml7bpl7Tov4fmu6TjgJHvvJrlpoLmnpzmmK/igJzku4rlpKnigJ3vvIzlv4Xpobvov4fmu6Tmjonlt7Lnu4/ov4fljrvnmoTml7bpl7RcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBpc1RvZGF5ID0gbm93LnRvRGF0ZVN0cmluZygpID09PSB0YXJnZXREYXRlLnRvRGF0ZVN0cmluZygpO1xyXG5cclxuICAgIGlmIChpc1RvZGF5KSB7XHJcbiAgICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtCBcIkhIOm1tXCIg5qC85byPXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBjdXJyZW50TWludXRlID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RyID0gYCR7Y3VycmVudEhvdXJ9OiR7Y3VycmVudE1pbnV0ZX1gO1xyXG5cclxuICAgICAgLy8g6L+H5ruk77ya5Y+q5L+d55WZ5byA5aeL5pe26Ze05pma5LqO5b2T5YmN5pe26Ze055qEIHNsb3RcclxuICAgICAgLy8g5YGH6K6+IHNsb3Qg5qC85byP5Li6IFwiMDg6MzAgLSAwOToyMFwi77yM5oiR5Lus5Y+W5YmNNeS9jSBcIjA4OjMwXCIg6L+b6KGM5q+U6L6DXHJcbiAgICAgIGF2YWlsYWJsZVNsb3RzID0gYXZhaWxhYmxlU2xvdHMuZmlsdGVyKHNsb3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHNsb3Quc3BsaXQoJyAtICcpWzBdOyAvLyDlj5blh7ogXCIwODozMFwiXHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZSA+IGN1cnJlbnRUaW1lU3RyOyAvLyDlrZfnrKbkuLLmr5TovoMgXCIwOTozMFwiID4gXCIwODozMFwiIOaYr+acieaViOeahFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBhdmFpbGFibGVTbG90cy5zb3J0KCkgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLorqHnrpflj6/nlKjml7bpl7TlpLHotKU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlJBcXBCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CrisisAlert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CrisisAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$38fe7f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:38fe7f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7c9b46__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:7c9b46 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
function CrisisAlert({ studentId }) {
    _s();
    const [intervention, setIntervention] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 1. 检查是否有未处理的提醒
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrisisAlert.useEffect": ()=>{
            async function check() {
                if (!studentId) return;
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$38fe7f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["checkPendingInterventions"])(studentId);
                if (data) {
                    setIntervention(data);
                    setOpen(true);
                }
            }
            check();
        }
    }["CrisisAlert.useEffect"], [
        studentId
    ]);
    // 2. 处理接受
    const handleAccept = async ()=>{
        if (!intervention) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7c9b46__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["respondToIntervention"])(intervention.id, 'accepted');
        setOpen(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("已接受建议，正在跳转预约...");
        router.push('/student/booking'); // 跳转到预约页
    };
    // 3. 处理拒绝
    const handleReject = async ()=>{
        if (!intervention) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7c9b46__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["respondToIntervention"])(intervention.id, 'rejected');
        setOpen(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("您已拒绝此次预约建议");
    };
    if (!intervention) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: ()=>{},
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md border-t-4 border-t-[#5D9C59]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center gap-2 text-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-green-50 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-6 h-6 text-[#5D9C59]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CrisisAlert.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CrisisAlert.tsx",
                                    lineNumber: 52,
                                    columnNumber: 14
                                }, this),
                                "来自咨询师的留言"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CrisisAlert.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "pt-4 text-base text-slate-700 leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-[#2C3E50]",
                                    children: [
                                        intervention.counselor.name,
                                        " 老师"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CrisisAlert.tsx",
                                    lineNumber: 59,
                                    columnNumber: 14
                                }, this),
                                " 给您发来了一条消息：",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block mt-3 p-4 bg-slate-50 rounded-lg border border-slate-100 italic text-slate-600",
                                    children: [
                                        '"',
                                        intervention.message,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CrisisAlert.tsx",
                                    lineNumber: 62,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CrisisAlert.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CrisisAlert.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "flex gap-2 sm:justify-between mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: handleReject,
                            className: "text-slate-400 hover:text-slate-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/CrisisAlert.tsx",
                                    lineNumber: 72,
                                    columnNumber: 14
                                }, this),
                                " 暂时不需要"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CrisisAlert.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleAccept,
                            className: "bg-[#5D9C59] hover:bg-[#4a8546] w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/CrisisAlert.tsx",
                                    lineNumber: 75,
                                    columnNumber: 14
                                }, this),
                                " 立即去预约"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CrisisAlert.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CrisisAlert.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CrisisAlert.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CrisisAlert.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(CrisisAlert, "Sl2SKe3Pur1AvSNA/4RFYQUWMzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CrisisAlert;
var _c;
__turbopack_context__.k.register(_c, "CrisisAlert");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/student/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
// ✅ 1. 引入危机干预提醒组件
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CrisisAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CrisisAlert.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MENU_ITEMS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: '概览',
        href: '/student/dashboard'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
        label: '在线咨询',
        href: '/student/video',
        special: true
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        label: '我的预约',
        href: '/student/booking'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        label: '心理知识',
        href: '/student/articles'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        label: '心理测评',
        href: '/student/assessment'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        label: '消息中心',
        href: '/student/chat'
    }
];
function StudentLayout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden bg-[#F0F7EF]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-20 lg:w-64 hidden md:flex flex-col border-r border-gray-200 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[80px] flex items-center gap-3 px-6 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-[#5D9C59] flex items-center justify-center text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "3",
                                    className: "w-5 h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/student/layout.tsx",
                                        lineNumber: 29,
                                        columnNumber: 109
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/student/layout.tsx",
                                    lineNumber: 29,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/student/layout.tsx",
                                lineNumber: 28,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-lg hidden lg:block text-[#2C3E50]",
                                children: "学生中心"
                            }, void 0, false, {
                                fileName: "[project]/app/student/layout.tsx",
                                lineNumber: 31,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/student/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 py-6 px-3 space-y-1",
                        children: MENU_ITEMS.map((item)=>{
                            const isActive = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-[#E8F5E9] text-[#2E7D32] font-semibold' : 'text-slate-500 hover:bg-gray-50 hover:text-slate-900'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            className: `w-5 h-5 ${isActive ? 'text-[#2E7D32]' : 'text-slate-400'}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/student/layout.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden lg:block",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/student/layout.tsx",
                                            lineNumber: 45,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/student/layout.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/app/student/layout.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/student/layout.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentUser?.avatar,
                                    className: "w-9 h-9 rounded-full bg-slate-200 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/student/layout.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-slate-700 truncate",
                                            children: currentUser?.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/student/layout.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400",
                                            children: "学生账号"
                                        }, void 0, false, {
                                            fileName: "[project]/app/student/layout.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/student/layout.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/student/layout.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/student/layout.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/student/layout.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 relative overflow-y-auto p-4 md:p-8",
                children: [
                    currentUser?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CrisisAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        studentId: currentUser.id
                    }, void 0, false, {
                        fileName: "[project]/app/student/layout.tsx",
                        lineNumber: 66,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/student/layout.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/student/layout.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/student/layout.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(StudentLayout, "60xbtwnht5cBJ0ZP5i8rfvIdvcs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = StudentLayout;
var _c;
__turbopack_context__.k.register(_c, "StudentLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b1409ba0._.js.map