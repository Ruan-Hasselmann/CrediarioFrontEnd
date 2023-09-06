import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [dados, setDados] = useState(null)
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clienteId, setClienteId] = useState(null);

    const httpConfig = (dados, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            })

            setMethod(method);
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setMethod(method);
            setClienteId(dados);
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setDados(json);
            } catch (error) {
                setError("Houve um erro ao carregar os dados!");
            }

            setLoading(false);
        }

        fetchData();

    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === "POST") {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                json = await res.json();

                if (res.status === 201) {
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${clienteId}`;
                const res = await fetch(deleteUrl, config);
                if (res.status === 200) {
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
            }

            setCallFetch(json);
        }

        httpRequest();
    }, [config, method, url])

    return { dados, httpConfig, loading, error };
};