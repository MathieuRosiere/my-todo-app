import { useQuery } from "@tanstack/vue-query";

export function useTodosQuery() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const response = await window.fetch("/api/todos", { method: "GET" });
            const result = await response.json();
            return result.data;
        },
    });
}

// const proxy = useTodosQuery();

// const todos = computed(() => {
//     const rawData = toRaw(proxy);
//     const data = rawData.data;
//     const dataValue = data.value;
//     const rawDataValue = toRaw(dataValue);
//     return rawDataValue;
// });
