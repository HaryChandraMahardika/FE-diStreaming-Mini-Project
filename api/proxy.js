import axios from "axios";

export default async function handler(req, res) {
  try {
    // Backend HTTP Laravel
    const backendBase = "http://203.194.115.210:8008";

    // Gabungkan URL request asli
    const url = `${backendBase}${req.url}`;

    const response = await axios({
      method: req.method,
      url,
      headers: {
        ...req.headers,
        host: undefined, // hapus host header lama
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