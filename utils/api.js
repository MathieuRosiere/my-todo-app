export const api = {
    async call(endpoint, options) {
        const response = await window.fetch(`api/${endpoint}`, options);
        const result = await response.json();

        if (result.success === false) {
            throw new Error(result.error);
        }

        return { ...result.data };
    },

    get(endpoint, options) {
        return this.call(endpoint, { ...options, method: "GET" });
    },

    post(endpoint, body, options) {
        return this.call(endpoint, { ...options, method: "POST" }, body);
    },

    patch(endpoint, body, options) {
        return this.call(endpoint, { ...options, method: "PATCH" }, body);
    },

    delete(endpoint, options) {
        return this.call(endpoint, { ...options, method: "DELETE" });
    },
};
