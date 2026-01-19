import axios from "axios";

export default async function handler(req, res) {
  try {
    // Backend Laravel VPS HTTP
    const backendBase = "http://203.194.115.210:8008/api";

    // req.query.all adalah array path, gabungkan jadi string
    const path = req.query.all.join("/");

    const url = `${backendBase}/${path}`;

    const response = await axios({
      method: req.method,
      url,
      headers: {
        ...req.headers,
        host: undefined, // hapus header host lama
      },
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(err.response?.status || 500).json({
      message: err.message,
      data: err.response?.data || null,
    });
  }
}