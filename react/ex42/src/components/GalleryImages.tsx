import { ImageList, ImageListItem } from "@mui/material";

type Image = {
    width: number;
    height: number;
    src: string;
}

interface Props {
    images: Image[];
}

const GalleryImages = ({ images }: Props) => {

    return(
    <ImageList
        variant="quilted"
        gap={10}
        rowHeight={400}
        sx={{
            width: "100%",
            height: "100%",
        }}
    >
        {images?.map((item) => {
            const cols = item.width > 2 * item.height ? 2 : 1;
            const rows = item.height > 2 * item.width ? 2 : 1;

            return (
            <ImageListItem
            cols={cols || 1}
            rows={rows || 1}
            sx={{
                maxHeight: 400
            }}
            >
                <img 
                    src={item.src}
                    alt=""
                    loading="lazy"
                />
            </ImageListItem>
        );
    }
        )}
    </ImageList>
    );
};

export default GalleryImages;