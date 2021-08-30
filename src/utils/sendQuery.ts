import { axios } from "global";

async function sendQuery(query: String) {
    try {
        const req = await axios({ data: { query } });
        const res = await req.data;
        return res.data;
    } catch(err) {
        throw err;
    }
}

export default sendQuery;
