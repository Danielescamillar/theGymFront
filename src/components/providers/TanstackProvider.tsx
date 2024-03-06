"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"



const TanstackProvider = ({ children }) => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}

export default TanstackProvider