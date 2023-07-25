import express from 'express';
import cors from 'cors';
import galleryCreator from './gallery';

const PORT = 3500;
const app = express();
const { fakeDB } = galleryCreator;
const { galleryCollection } = fakeDB(1);

app.use(cors());
app.use(express.json());

app.get('/api/gallery/:id', async (req: { params: { id: any; }; query: { count: any; page: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; }; }) => {
    try {
        const { id } = req.params;
        const count = Number(req.query.count) || 10;
        const page = Number(req.query.page) || 1;
        const gallery = galleryCollection.find((element) => String(element.galleryId) === id);

        if (!gallery) {
            return res.status(404).send("The gallery does not exist");
        }

        const total = gallery.images.length;
        const pageImages = gallery.images.slice((page - 1) * count, page * count);

        const outputPage = {
            id,
            page,
            images: pageImages,
            total,
        };

        return res.status(200).send(outputPage);
    } catch (error) {
        console.log(error);
        return res.status(400).send('Something went wrong');
    }

});

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
