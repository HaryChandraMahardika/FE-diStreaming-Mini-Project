import axios from "axios";

export default async function handler(req, res) {
  try {
    const backendBase = "http://203.194.115.210:8008/api";
    const path = req.query.all.join("/");
    const url = `${backendBase}/${path}`;

    const response = await axios({
      method: req.method,
      url,
      headers: { ...req.headers, host: undefined },
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(err.response?.status || 500).json({
      message: err.message,
      data: err.response?.data || null,
    });
  }
}