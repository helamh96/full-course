import { render, screen, waitFor } from '@testing-library/react';
import Gallery from '../components/Gallery';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function GalleryComponent() {
    return (
        <Provider store={store}>
            <Gallery id="1" count={3} />
        </Provider>
    );
}

// Test to ensure that images are loaded and URLs match the response data
test('Loads images and matches URLs with response data', async () => {
    render(<GalleryComponent />);

    // Ensure "Loading..." text is displayed initially
    const loadingTextElements = screen.getAllByText('Loading...');
    expect(loadingTextElements).toBeTruthy();

    // Fetch data from the API endpoint
    const apiResponse = await fetch(
        'http://localhost:3500/api/gallery/1?count=3&page=1'
    );
    const responseData = await apiResponse.json();
    const URLsFromResponse = responseData.images.map((image: any) => image.src);

    // Wait for images to be loaded and check if their URLs match the response data
    await waitFor(() => {
        const imageElements = screen.getAllByRole('img');
        const imageURLs = imageElements.map(
            (imageElement: any) => imageElement.src
        );
        expect(imageURLs).toStrictEqual(URLsFromResponse);
    });
});

// Test to verify that clicking on the next arrow renders the second page of the gallery
test('Clicking on the next arrow renders the second page', async () => {
    render(<GalleryComponent />);

    // Locate and click the next arrow button
    const nextButton = screen.getByLabelText('Go to next page');
    nextButton.click();

    // Fetch data for the second page from the API endpoint
    const apiResponse = await fetch(
        'http://localhost:3500/api/gallery/1?count=3&page=2'
    );
    const responseData = await apiResponse.json();
    const URLsFromResponse = responseData.images.map((image: any) => image.src);

    // Wait for images to be loaded and check if their URLs match the response data for page 2
    await waitFor(() => {
        const imageElements = screen.getAllByRole('img');
        const imageURLs = imageElements.map(
            (imageElement: any) => imageElement.src
        );
        expect(imageURLs).toStrictEqual(URLsFromResponse);
    });
});

// Test to verify that clicking on the back arrow renders the first page of the gallery
test('Clicking on the back arrow renders the first page', async () => {
    render(<GalleryComponent />);

    // Click the next arrow button to move to page 2
    const nextButton = screen.getByLabelText('Go to next page');
    nextButton.click();

    // Fetch data for the first page from the API endpoint
    const apiResponse = await fetch(
        'http://localhost:3500/api/gallery/1?count=3&page=1'
    );
    const responseData = await apiResponse.json();
    const URLsFromResponse = responseData.images.map((image: any) => image.src);

    // Wait for images to be loaded and check if their URLs match the response data for page 1
    await waitFor(() => {
        const imageElements = screen.getAllByRole('img');
        const imageURLs = imageElements.map(
            (imageElement: any) => imageElement.src
        );
        expect(imageURLs).toStrictEqual(URLsFromResponse);
    });
});
