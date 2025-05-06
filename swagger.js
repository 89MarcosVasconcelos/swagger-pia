module.exports = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "API de Autenticação",
        description: "Documentação da API de autenticação",
    },
    host: "localhost:3000",
    basePath: "/api",
    schemes: ["http"],
    consumes: ["application/x-www-form-urlencoded"],
    produces: ["application/json"],
    paths: {
        "/register": {
            post: {
                tags: ["Autenticação"],
                summary: "Registrar novo usuário",
                parameters: [
                    {
                        name: "username",
                        in: "formData",
                        required: true,
                        type: "string",
                    },
                    {
                        name: "password",
                        in: "formData",
                        required: true,
                        type: "string",
                    },
                ],
                responses: {
                    200: {
                        description: "Usuário registrado com sucesso",
                    },
                },
            },
        },
        "/token": {
            post: {
                tags: ["Autenticação"],
                summary: "Gerar token OAuth",
                parameters: [
                    { name: "username", in: "formData", required: true, type: "string" },
                    { name: "password", in: "formData", required: true, type: "string" },
                ],
                responses: {
                    200: {
                        description: "Token gerado com sucesso",
                    },
                },
            },
        },
    },
};
