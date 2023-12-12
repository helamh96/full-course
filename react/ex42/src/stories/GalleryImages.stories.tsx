import { Meta, StoryObj } from '@storybook/react';
import GalleryImages from '../components/GalleryImages';

export default {
    title: 'Images',
    component: GalleryImages,
} as Meta<typeof GalleryImages>;

type Story = StoryObj<typeof GalleryImages>;

export const GalleryTemplate: Story = {
    args: {
        images: [],
    },
};

export const SimplePage: Story = {
    ...GalleryTemplate,
    args: {
        images: [
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/3ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
        ],
    },
};

export const FullImages: Story = {
    ...GalleryTemplate,
    args: {
        images: [
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 876,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
            {
                width: 314,
                height: 885,
                src: 'https://cdn2.thecatapi.com/images/4ip.gif',
            },
        ],
    },
};
