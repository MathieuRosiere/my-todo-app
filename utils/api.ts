export const api = {
    async call<TData>(endpoint: string, options?: RequestInit): Promise<TData> {
        const response = await window.fetch(`api/${endpoint}`, options);
        const result = await response.json();

        if (result.success === false) {
            throw new Error(result.error);
        }

        return result.data as TData;
    },

    get<TData>(endpoint: string, options?: RequestInit): Promise<TData> {
        return this.call(endpoint, { ...options, method: "GET" });
    },

    post<TData>(endpoint: string, body: string, options?: RequestInit): Promise<TData> {
        return this.call(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
        });
    },

    patch<TData>(endpoint: string, body: string, options?: RequestInit): Promise<TData> {
        return this.call(endpoint, {
            ...options,
            method: "PATCH",
            body: JSON.stringify(body),
        });
    },

    delete<TData>(endpoint: string, options?: RequestInit): Promise<TData> {
        return this.call(endpoint, { ...options, method: "DELETE" });
    },
};
