module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/db.ts
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: [
        'query'
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002337fe5445dba398cbfff16255654f9fc2c93f70":"getUsers","003b6233f928d4de0ec767b42f46fc1b559b96d8bc":"getRiskStudents","003c108f4b10c5ed7560b4e9ffef34ade9266dda13":"getSystemSettings","003dba44829f8b712a2edf4b71618eecadfcc55a0e":"getAdminDashboardStats","00cfc92782635b92b803fc2bde935ced14749c2d6d":"getArticles","00eaf6ed903fc4afe44650a28c30445bf35d735731":"getCounselors","4020f3f2fb9b6d05e04700047d03d95155a47cd242":"deleteUser","4022f387eebec215cbab17dade5c2b7364a4bfc9bd":"getAssessmentHistory","403f0fb6ce061f84be1a5d45325585af7f73cfa7d1":"updateSystemSettings","40464ac44dc8de44de9a76ace0f2b9ab86878e2765":"getCounselorAppointments","40582840976840dcb9e19fbe1809bdcc094e60849a":"createUser","4076c1fffee5862a62b264ab4b023657c8d9e4b639":"getArticleById","407ab247e9c7485991e18a9203d13ca1c8c1535250":"createArticle","40a2a235a7096533593e62a0f655b9674b7f5cae9b":"createAppointmentWithDetails","40c279fd8f6c5d86ee066418e188815dcb5b57afe9":"deleteArticle","40c2fcb384938738311a223be1b7121afc514580e9":"checkPendingInterventions","40de132af61ba01e723550b42711e9dd737ac620e9":"getCounselorSchedule","6004a8706ca230722c111b3d820848003760de25a5":"getAvailableSlotsForDate","6004d38bb3cc7c7f3dd16bff23ff34790521ec9dcd":"getChatContacts","600bbc7dfe8b9e2ee4faccc1fd242b57913346d9a8":"updateAppointmentStatus","6017fcbb10440c8f1538df4316c6f53318c6a9c746":"getMessages","601a790ad71882827d005ab62ca15adc48ee90010c":"loginAction","6027ad75deeea94e4c29d226f1aecde8baddc6c7e9":"updateSchedule","603891c61866a64c09b7fc48522c944068d0b5f0c7":"updateConsultationRecord","607dbf66fc51d2aada0b30e269f6c3aea142ddff0c":"submitPsychTest","60a6718a470945b30bab300aa74c996afed6c2d6df":"getAppointments","60d06e6e862e7cff8c80ec7e8674ceb819581ce006":"respondToIntervention","60fc8622b99530666f349f8326e1b99243b435875b":"updateUser","70001983a346de85aa0dade685d11e734730583f1b":"sendInterventionReminder","70f9fa8362bf578f8ee79da562b009f8b38064878d":"sendMessage","780f399bd1f985ae9c27b6497fc48f7a5754b1295e":"saveAssessment"},"",""] */ __turbopack_context__.s([
    "checkPendingInterventions",
    ()=>checkPendingInterventions,
    "createAppointmentWithDetails",
    ()=>createAppointmentWithDetails,
    "createArticle",
    ()=>createArticle,
    "createUser",
    ()=>createUser,
    "deleteArticle",
    ()=>deleteArticle,
    "deleteUser",
    ()=>deleteUser,
    "getAdminDashboardStats",
    ()=>getAdminDashboardStats,
    "getAppointments",
    ()=>getAppointments,
    "getArticleById",
    ()=>getArticleById,
    "getArticles",
    ()=>getArticles,
    "getAssessmentHistory",
    ()=>getAssessmentHistory,
    "getAvailableSlotsForDate",
    ()=>getAvailableSlotsForDate,
    "getChatContacts",
    ()=>getChatContacts,
    "getCounselorAppointments",
    ()=>getCounselorAppointments,
    "getCounselorSchedule",
    ()=>getCounselorSchedule,
    "getCounselors",
    ()=>getCounselors,
    "getMessages",
    ()=>getMessages,
    "getRiskStudents",
    ()=>getRiskStudents,
    "getSystemSettings",
    ()=>getSystemSettings,
    "getUsers",
    ()=>getUsers,
    "loginAction",
    ()=>loginAction,
    "respondToIntervention",
    ()=>respondToIntervention,
    "saveAssessment",
    ()=>saveAssessment,
    "sendInterventionReminder",
    ()=>sendInterventionReminder,
    "sendMessage",
    ()=>sendMessage,
    "submitPsychTest",
    ()=>submitPsychTest,
    "updateAppointmentStatus",
    ()=>updateAppointmentStatus,
    "updateConsultationRecord",
    ()=>updateConsultationRecord,
    "updateSchedule",
    ()=>updateSchedule,
    "updateSystemSettings",
    ()=>updateSystemSettings,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getUsers() {
    try {
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {
            success: true,
            data: users
        };
    } catch (error) {
        console.error("获取用户失败:", error);
        return {
            success: false,
            data: []
        };
    }
}
async function createUser(formData) {
    const name = formData.get("name");
    const username = formData.get("username");
    const role = formData.get("role");
    const college = formData.get("college");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                name,
                username,
                role,
                college,
                password: "123456",
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: "创建失败，学号可能已存在"
        };
    }
}
async function updateUser(id, formData) {
    const name = formData.get("name");
    const username = formData.get("username");
    const role = formData.get("role");
    const college = formData.get("college");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id
            },
            data: {
                name,
                username,
                role,
                college
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: "更新失败，学号可能冲突"
        };
    }
}
async function deleteUser(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/users");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: "删除失败"
        };
    }
}
async function loginAction(username, role) {
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
            where: {
                username,
                role
            }
        });
        if (!user) return {
            success: false,
            error: "用户不存在或角色错误"
        };
        // 返回用户信息（不含密码）
        const { password, ...userInfo } = user;
        return {
            success: true,
            data: userInfo
        };
    } catch (error) {
        return {
            success: false,
            error: "数据库连接失败"
        };
    }
}
async function getCounselors() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
        where: {
            role: 'counselor'
        },
        select: {
            id: true,
            name: true,
            college: true,
            avatar: true
        } // 明确选择需要的字段
    });
}
async function getAppointments(userId, role) {
    const where = role === 'student' ? {
        studentId: userId
    } : {
        counselorId: userId
    };
    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.findMany({
        where,
        include: {
            // ⚠️ 关键修改：User表没有email字段，改查 username(学号) 和 college
            student: {
                select: {
                    name: true,
                    username: true,
                    college: true,
                    avatar: true
                }
            },
            counselor: {
                select: {
                    name: true,
                    college: true,
                    avatar: true
                }
            },
            testResult: true
        },
        orderBy: {
            date: 'desc'
        }
    });
    return data;
}
async function createAppointmentWithDetails(data) {
    // 检查时间冲突
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.findFirst({
        where: {
            counselorId: data.counselorId,
            date: new Date(data.date),
            time: data.time,
            status: 'confirmed'
        }
    });
    if (existing) return {
        success: false,
        msg: "该时段已被占用"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.create({
            data: {
                studentId: data.studentId,
                counselorId: data.counselorId,
                date: new Date(data.date),
                time: data.time,
                // 详细信息
                idCard: data.idCard,
                studentIdNum: data.studentIdNum,
                phone: data.phone,
                college: data.college,
                major: data.major,
                grade: data.grade,
                classInfo: data.classInfo,
                mentalHistory: data.mentalHistory,
                physicalState: data.physicalState,
                problemType: data.problemType,
                status: 'pending'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/student/booking');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/counselor/dashboard');
        return {
            success: true
        };
    } catch (e) {
        console.error(e);
        return {
            success: false,
            msg: "预约创建异常"
        };
    }
}
async function updateAppointmentStatus(id, status) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.update({
        where: {
            id
        },
        data: {
            status
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/counselor/dashboard");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/student/booking");
    return {
        success: true
    };
}
async function updateConsultationRecord(id, notes) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.update({
            where: {
                id
            },
            data: {
                notes,
                status: 'completed'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/counselor/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/counselor/cases"); // 确保刷新档案页面
        return {
            success: true
        };
    } catch (error) {
        console.error("保存咨询记录失败:", error); // 打印错误日志方便排查
        return {
            success: false,
            error: "保存失败"
        };
    }
}
async function submitPsychTest(appointmentId, answers) {
    try {
        const { sds, sas, ses } = answers;
        // 1. 计算原始分
        const sdsRaw = (sds || []).reduce((a, b)=>a + b, 0);
        const sasRaw = (sas || []).reduce((a, b)=>a + b, 0);
        const sesScore = (ses || []).reduce((a, b)=>a + b, 0);
        // 2. 计算标准分 (仅做记录)
        const sdsScore = Math.floor(sdsRaw * 1.25);
        const sasScore = Math.floor(sasRaw * 1.25);
        // 3. 这里的 isHighRisk 仅用于单次记录，不再联动系统报警
        let isHighRisk = false;
        let riskLevel = 'normal';
        if (sdsScore >= 53 || sasScore >= 50) {
            isHighRisk = true;
            if (sdsScore >= 63 || sasScore >= 60) {
                riskLevel = 'red';
            } else {
                riskLevel = 'yellow';
            }
        }
        // 4. 保存结果到数据库 (Upsert防止重复报错)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].testResult.upsert({
            where: {
                appointmentId: appointmentId
            },
            create: {
                appointmentId,
                sdsScore,
                sasScore,
                sesScore,
                rawAnswers: JSON.stringify(answers),
                isHighRisk,
                riskLevel
            },
            update: {
                sdsScore,
                sasScore,
                sesScore,
                rawAnswers: JSON.stringify(answers),
                isHighRisk,
                riskLevel,
                createdAt: new Date()
            }
        });
        // ❌ 已删除：prisma.appointment.update (标记预约为危机) 的代码
        // ❌ 已删除：prisma.user.update (标记学生为红名) 的代码
        // ❌ 已删除：Crisis 相关的页面刷新
        // 5. 仅刷新预约列表
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/student/booking');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/counselor/cases');
        // 返回成功，不再返回 isHighRisk 给前端弹窗
        return {
            success: true
        };
    } catch (error) {
        console.error("提交测评失败:", error);
        return {
            success: false,
            msg: "提交失败，请重试"
        };
    }
}
async function getCounselorSchedule(counselorId) {
    try {
        const schedules = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].schedule.findMany({
            where: {
                counselorId,
                isAvailable: true
            }
        });
        return {
            success: true,
            data: schedules
        };
    } catch (error) {
        return {
            success: false,
            data: []
        };
    }
}
async function updateSchedule(counselorId, slots) {
    try {
        const ops = slots.map((slot)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].schedule.upsert({
                where: {
                    counselorId_dayOfWeek_timeSlot: {
                        counselorId,
                        dayOfWeek: slot.dayOfWeek,
                        timeSlot: slot.timeSlot
                    }
                },
                update: {
                    isAvailable: slot.isAvailable
                },
                create: {
                    counselorId,
                    dayOfWeek: slot.dayOfWeek,
                    timeSlot: slot.timeSlot,
                    isAvailable: slot.isAvailable
                }
            }));
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(ops);
        return {
            success: true
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error: "保存失败"
        };
    }
}
async function getChatContacts(currentUserId, role) {
    try {
        if (role === 'student') {
            const counselors = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
                where: {
                    role: 'counselor'
                },
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                    college: true
                }
            });
            return {
                success: true,
                data: counselors
            };
        } else {
            const students = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
                where: {
                    role: 'student'
                },
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                    college: true
                }
            });
            return {
                success: true,
                data: students
            };
        }
    } catch (error) {
        return {
            success: false,
            data: []
        };
    }
}
async function getMessages(userId1, userId2) {
    try {
        const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].message.findMany({
            where: {
                OR: [
                    {
                        senderId: userId1,
                        receiverId: userId2
                    },
                    {
                        senderId: userId2,
                        receiverId: userId1
                    }
                ]
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                sender: {
                    select: {
                        name: true,
                        avatar: true
                    }
                }
            }
        });
        return {
            success: true,
            data: messages
        };
    } catch (error) {
        return {
            success: false,
            data: []
        };
    }
}
async function sendMessage(senderId, receiverId, content) {
    try {
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].message.create({
            data: {
                senderId,
                receiverId,
                content
            }
        });
        return {
            success: true,
            data: message
        };
    } catch (error) {
        return {
            success: false,
            error: "发送失败"
        };
    }
}
async function getArticles() {
    const articles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].article.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return articles.map((a)=>({
            ...a,
            createdAt: a.createdAt.toISOString()
        }));
}
async function getArticleById(id) {
    try {
        const article = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].article.findUnique({
            where: {
                id
            }
        });
        if (article) return {
            success: true,
            data: article
        };
        return {
            success: false,
            error: "文章未找到"
        };
    } catch (error) {
        return {
            success: false,
            error: "查询失败"
        };
    }
}
async function createArticle(data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].article.create({
        data: {
            ...data,
            author: '管理员',
            views: 0,
            image: "https://images.unsplash.com/photo-1499209974431-2761eb43a768?w=800&q=80"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/student/articles");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/content");
    return {
        success: true
    };
}
async function deleteArticle(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].article.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/content");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/student/articles");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: "删除失败"
        };
    }
}
async function getAdminDashboardStats() {
    try {
        const [studentCount, appointmentCount, completedCount, rawChartData] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.count({
                where: {
                    role: 'student'
                }
            }),
            // 统计所有预约 (包括等待中的，用于显示热度)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.count(),
            // 统计已完成
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.count({
                where: {
                    status: 'completed'
                }
            }),
            // 图表数据 (统计最近7天)
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.findMany({
                where: {
                    date: {
                        gte: new Date(new Date().setDate(new Date().getDate() - 6))
                    }
                },
                select: {
                    date: true
                }
            })
        ]);
        const completionRate = appointmentCount > 0 ? Math.round(completedCount / appointmentCount * 100) + "%" : "0%";
        const chartData = [];
        const weekMap = [
            '周日',
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六'
        ];
        for(let i = 6; i >= 0; i--){
            const d = new Date();
            d.setDate(d.getDate() - i);
            const month = d.getMonth() + 1;
            const day = d.getDate();
            const dateKey = `${month}/${day}`;
            const weekLabel = weekMap[d.getDay()];
            const count = rawChartData.filter((apt)=>{
                const aptDate = new Date(apt.date);
                return aptDate.getDate() === day && aptDate.getMonth() + 1 === month;
            }).length;
            chartData.push({
                name: dateKey,
                day: weekLabel,
                visits: count
            });
        }
        return {
            success: true,
            data: {
                stats: {
                    students: studentCount,
                    appointments: appointmentCount,
                    crisis: 0,
                    rate: completionRate
                },
                chart: chartData
            }
        };
    } catch (error) {
        console.error("看板数据加载失败:", error);
        return {
            success: false,
            error: "加载失败"
        };
    }
}
async function getSystemSettings() {
    try {
        let config = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].systemConfig.findFirst();
        if (!config) {
            config = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].systemConfig.create({
                data: {}
            });
        }
        return {
            success: true,
            data: config
        };
    } catch (error) {
        return {
            success: false,
            error: "获取配置失败"
        };
    }
}
async function updateSystemSettings(data) {
    try {
        const first = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].systemConfig.findFirst();
        if (first) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].systemConfig.update({
                where: {
                    id: first.id
                },
                data: {
                    platformName: data.platformName,
                    hotline: data.hotline,
                    openHours: data.openHours,
                    maintenanceMode: data.maintenanceMode === 'true' || data.maintenanceMode === true
                }
            });
            return {
                success: true
            };
        }
        return {
            success: false,
            error: "未找到配置记录"
        };
    } catch (error) {
        return {
            success: false,
            error: "保存失败"
        };
    }
}
async function saveAssessment(userId, score, resultText, testType) {
    try {
        let isHighRisk = false;
        let threshold = 10;
        if (testType === 'gad7') threshold = 9;
        if (testType === 'pss') threshold = 14;
        if (score > threshold) {
            isHighRisk = true;
        }
        // ✅ 必须是 prisma.assessmentResult
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].assessmentResult.create({
            data: {
                userId,
                score,
                type: testType,
                result: resultText,
                isHighRisk
            }
        });
        if (isHighRisk) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
                where: {
                    id: userId
                },
                data: {
                    riskLevel: 'red'
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/student/assessment');
        return {
            success: true
        };
    } catch (error) {
        console.error("保存测评失败:", error);
        return {
            success: false
        };
    }
}
async function getAssessmentHistory(userId) {
    try {
        // ❌ 绝对不能是 prisma.testResult
        // ✅ 必须是 prisma.assessmentResult
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].assessmentResult.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return data;
    } catch (error) {
        console.error("获取历史失败:", error);
        return [];
    }
}
async function getRiskStudents() {
    try {
        // 步骤 1: 找出所有高分测评的 studentId (分数 > 10)
        const highRiskAssessments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].assessment.findMany({
            where: {
                score: {
                    gt: 10
                }
            },
            select: {
                studentId: true
            },
            distinct: [
                'studentId'
            ] // 去重
        });
        const highRiskIds = highRiskAssessments.map((a)=>a.studentId);
        // 步骤 2: 找出被标记为 red/yellow 的用户
        // 步骤 3: 合并查询 - 只要满足其中一个条件就算高风险
        const riskUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
            where: {
                role: 'student',
                OR: [
                    {
                        riskLevel: {
                            in: [
                                'red',
                                'yellow'
                            ]
                        }
                    },
                    {
                        id: {
                            in: highRiskIds
                        }
                    } // 或者虽未标记但分高的
                ]
            },
            include: {
                // 查最近的干预记录
                studentInterventions: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1
                }
            }
        });
        // 步骤 4: 补全数据 (查最近一次分数)
        const enrichedUsers = await Promise.all(riskUsers.map(async (u)=>{
            const lastTest = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].assessment.findFirst({
                where: {
                    studentId: u.id
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            return {
                ...u,
                lastScore: lastTest?.score || 0,
                lastTestTime: lastTest?.createdAt,
                latestIntervention: u.studentInterventions[0] || null
            };
        }));
        // 最后再过滤一遍，确保只显示确实有风险的
        return enrichedUsers.filter((u)=>u.lastScore > 10 || u.riskLevel === 'red' || u.riskLevel === 'yellow');
    } catch (error) {
        console.error("获取风险名单失败:", error);
        return [];
    }
}
async function sendInterventionReminder(studentId, counselorId, message) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].intervention.create({
            data: {
                studentId,
                counselorId,
                message,
                status: 'pending'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/counselor/interventions');
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: "发送失败"
        };
    }
}
async function checkPendingInterventions(studentId) {
    try {
        const intervention = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].intervention.findFirst({
            where: {
                studentId,
                status: 'pending' // 只找未处理的
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                counselor: {
                    select: {
                        name: true,
                        avatar: true
                    }
                }
            }
        });
        return intervention;
    } catch (error) {
        return null;
    }
}
async function respondToIntervention(interventionId, response) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].intervention.update({
            where: {
                id: interventionId
            },
            data: {
                status: response
            }
        });
        if (response === 'accepted') {
        // 如果接受，顺便可以在这里记录日志或者发通知
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/student/dashboard'); // 刷新状态
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false
        };
    }
}
async function getAvailableSlotsForDate(counselorId, dateStr) {
    try {
        const targetDate = new Date(dateStr);
        // 1. 获取“星期几” (注意：JS getDay() 是 0-6 (周日-周六)，我们需要转成 1-7 或者跟你数据库 Schedule 表保持一致)
        // 假设数据库存的是：1=周一 ... 5=周五, 6=周六, 7=周日
        let dayOfWeek = targetDate.getDay();
        if (dayOfWeek === 0) dayOfWeek = 7; // 把周日从0变为7
        // 2. 获取咨询师的【基准排班】(Base Schedule)
        const baseSchedules = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].schedule.findMany({
            where: {
                counselorId,
                dayOfWeek,
                isAvailable: true // 只找老师开放的时间
            },
            select: {
                timeSlot: true
            }
        });
        // 如果老师这天压根没排班，直接返回空
        if (baseSchedules.length === 0) {
            return {
                success: true,
                data: []
            };
        }
        // 3. 获取该日【已被占用】的时段 (Appointments)
        // 我们需要查询状态为 pending(待审核) 和 confirmed(已确认) 的，rejected(已拒绝) 的不占位
        const startOfDay = new Date(dateStr);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(dateStr);
        endOfDay.setHours(23, 59, 59, 999);
        const bookedAppointments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.findMany({
            where: {
                counselorId,
                date: {
                    gte: startOfDay,
                    lte: endOfDay
                },
                status: {
                    in: [
                        'pending',
                        'confirmed'
                    ] // ⚠️ 关键：待审核和已确认都算占用，防止重复申请
                }
            },
            select: {
                time: true
            }
        });
        // 提取已被占用的时间字符串数组
        const bookedTimes = bookedAppointments.map((app)=>app.time);
        // 4. 计算【逻辑可用】 = 基准排班 - 已被占用
        let availableSlots = baseSchedules.map((s)=>s.timeSlot).filter((slot)=>!bookedTimes.includes(slot));
        // 5. 【时间过滤】：如果是“今天”，必须过滤掉已经过去的时间
        const now = new Date();
        const isToday = now.toDateString() === targetDate.toDateString();
        if (isToday) {
            // 获取当前时间 "HH:mm" 格式
            const currentHour = now.getHours().toString().padStart(2, '0');
            const currentMinute = now.getMinutes().toString().padStart(2, '0');
            const currentTimeStr = `${currentHour}:${currentMinute}`;
            // 过滤：只保留开始时间晚于当前时间的 slot
            // 假设 slot 格式为 "08:30 - 09:20"，我们取前5位 "08:30" 进行比较
            availableSlots = availableSlots.filter((slot)=>{
                const startTime = slot.split(' - ')[0]; // 取出 "08:30"
                return startTime > currentTimeStr; // 字符串比较 "09:30" > "08:30" 是有效的
            });
        }
        return {
            success: true,
            data: availableSlots.sort()
        };
    } catch (error) {
        console.error("计算可用时间失败:", error);
        return {
            success: false,
            data: []
        };
    }
}
async function getCounselorAppointments(counselorId) {
    try {
        const appointments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appointment.findMany({
            where: {
                counselorId
            },
            orderBy: {
                date: 'desc'
            },
            include: {
                student: {
                    select: {
                        name: true,
                        gender: true,
                        phone: true,
                        avatar: true
                    }
                },
                // ✅ 关键：一定要把 testResult 查出来
                testResult: true
            }
        });
        // 序列化返回值 (防止日期格式报错)
        return appointments.map((apt)=>({
                ...apt,
                date: apt.date.toISOString(),
                createdAt: apt.createdAt.toISOString(),
                testResult: apt.testResult ? {
                    ...apt.testResult,
                    createdAt: apt.testResult.createdAt.toISOString()
                } : null
            }));
    } catch (error) {
        console.error("获取咨询师预约失败:", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    loginAction,
    getCounselors,
    getAppointments,
    createAppointmentWithDetails,
    updateAppointmentStatus,
    updateConsultationRecord,
    submitPsychTest,
    getCounselorSchedule,
    updateSchedule,
    getChatContacts,
    getMessages,
    sendMessage,
    getArticles,
    getArticleById,
    createArticle,
    deleteArticle,
    getAdminDashboardStats,
    getSystemSettings,
    updateSystemSettings,
    saveAssessment,
    getAssessmentHistory,
    getRiskStudents,
    sendInterventionReminder,
    checkPendingInterventions,
    respondToIntervention,
    getAvailableSlotsForDate,
    getCounselorAppointments
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsers, "002337fe5445dba398cbfff16255654f9fc2c93f70", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUser, "40582840976840dcb9e19fbe1809bdcc094e60849a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUser, "60fc8622b99530666f349f8326e1b99243b435875b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUser, "4020f3f2fb9b6d05e04700047d03d95155a47cd242", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "601a790ad71882827d005ab62ca15adc48ee90010c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCounselors, "00eaf6ed903fc4afe44650a28c30445bf35d735731", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAppointments, "60a6718a470945b30bab300aa74c996afed6c2d6df", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAppointmentWithDetails, "40a2a235a7096533593e62a0f655b9674b7f5cae9b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAppointmentStatus, "600bbc7dfe8b9e2ee4faccc1fd242b57913346d9a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateConsultationRecord, "603891c61866a64c09b7fc48522c944068d0b5f0c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitPsychTest, "607dbf66fc51d2aada0b30e269f6c3aea142ddff0c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCounselorSchedule, "40de132af61ba01e723550b42711e9dd737ac620e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSchedule, "6027ad75deeea94e4c29d226f1aecde8baddc6c7e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getChatContacts, "6004d38bb3cc7c7f3dd16bff23ff34790521ec9dcd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMessages, "6017fcbb10440c8f1538df4316c6f53318c6a9c746", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendMessage, "70f9fa8362bf578f8ee79da562b009f8b38064878d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getArticles, "00cfc92782635b92b803fc2bde935ced14749c2d6d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getArticleById, "4076c1fffee5862a62b264ab4b023657c8d9e4b639", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createArticle, "407ab247e9c7485991e18a9203d13ca1c8c1535250", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteArticle, "40c279fd8f6c5d86ee066418e188815dcb5b57afe9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminDashboardStats, "003dba44829f8b712a2edf4b71618eecadfcc55a0e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSystemSettings, "003c108f4b10c5ed7560b4e9ffef34ade9266dda13", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSystemSettings, "403f0fb6ce061f84be1a5d45325585af7f73cfa7d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveAssessment, "780f399bd1f985ae9c27b6497fc48f7a5754b1295e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAssessmentHistory, "4022f387eebec215cbab17dade5c2b7364a4bfc9bd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRiskStudents, "003b6233f928d4de0ec767b42f46fc1b559b96d8bc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendInterventionReminder, "70001983a346de85aa0dade685d11e734730583f1b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkPendingInterventions, "40c2fcb384938738311a223be1b7121afc514580e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(respondToIntervention, "60d06e6e862e7cff8c80ec7e8674ceb819581ce006", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableSlotsForDate, "6004a8706ca230722c111b3d820848003760de25a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCounselorAppointments, "40464ac44dc8de44de9a76ace0f2b9ab86878e2765", null);
}),
"[project]/.next-internal/server/app/student/articles/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/student/articles/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00cfc92782635b92b803fc2bde935ced14749c2d6d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticles"],
    "40c2fcb384938738311a223be1b7121afc514580e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPendingInterventions"],
    "60d06e6e862e7cff8c80ec7e8674ceb819581ce006",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["respondToIntervention"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$student$2f$articles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/student/articles/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3c3fe9a2._.js.map