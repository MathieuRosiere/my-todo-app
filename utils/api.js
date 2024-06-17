export const api = {
    async get(endpoint) {
        const response = await window.fetch(`api/${endpoint}`, { method: "GET" });
        const result = await response.json();
        if (!result.success === false) {
            throw new Error("Network response failed");
        }
        return { ...result.data };
    },
};
