export default function handler(req, res) {
    const body = req.body;
    console.log('this is running too')
    res.status(200).json({ data: `${body.barang} ${body.tempat} ${body.kontak}` });
}