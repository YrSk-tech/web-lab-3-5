const BASE_URL = "http://127.0.0.1:8000";
const RESOURSE_URL = `${BASE_URL}/pen`;

export function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
};

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const postOfficeTool = (body) => baseRequest({ method: "POST", body });

export const updateOfficeTool = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteOfficeTool = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });

export const getAllOfficeTool = async() => {
    const rawResponse = await baseRequest({ method: "GET" });
    return await rawResponse.json();
};