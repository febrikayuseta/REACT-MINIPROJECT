
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../../src/components/ProductCard';
import { useCart } from '../../src/context/CartContext';
import { useToast } from '../../src/context/ToastContext';

jest.mock('../../src/context/CartContext', () => ({
    useCart: jest.fn(),
}));

jest.mock('../../src/context/ToastContext', () => ({
    useToast: jest.fn(),
}));

describe('ProductCard Component', () => {
    const mockProduct = {
        id: '1',
        name: 'Es Kopi Kenangan',
        price: 18000,
        image: '/test-image.jpg',
    };

    const mockAddToCart = jest.fn();
    const mockAddToast = jest.fn();

    beforeEach(() => {
        (useCart as jest.Mock).mockReturnValue({
            addToCart: mockAddToCart,
        });
        (useToast as jest.Mock).mockReturnValue({
            addToast: mockAddToast,
        });
        jest.clearAllMocks();
    });

    it('renders product details correctly', () => {
        render(<ProductCard {...mockProduct} />);

        expect(screen.getByText('Es Kopi Kenangan')).toBeInTheDocument();
        expect(screen.getByText(/Rp\.18\.000/)).toBeInTheDocument();
        const image = screen.getByAltText('Es Kopi Kenangan') as HTMLImageElement;
        expect(image.src).toContain('/test-image.jpg');
    });

    it('calls addToCart and addToast when the add button is clicked', async () => {
        const user = userEvent.setup();
        render(<ProductCard {...mockProduct} />);

        const addButton = screen.getByRole('button', { name: '+' });
        await user.click(addButton);

        expect(mockAddToCart).toHaveBeenCalledWith(
            mockProduct.id,
            mockProduct.name,
            mockProduct.price,
            mockProduct.image
        );
        expect(mockAddToast).toHaveBeenCalledWith(
            expect.stringContaining('Es Kopi Kenangan telah ditambahkan'),
            'success'
        );
    });
});
