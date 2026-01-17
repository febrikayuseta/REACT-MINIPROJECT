'use client';

import React from 'react';
import { useProductDetail } from '../context/ProductDetailContext';

function ProductDetailModal() {
  const { selectedProduct, closeDetail } = useProductDetail();

  if (!selectedProduct) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeDetail();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-xs w-full overflow-hidden animate-fadeIn">
        {/* Tombol Close */}
        <button
          onClick={closeDetail}
          className="absolute top-4 right-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
        >
          ✕
        </button>

        {/* Gambar Produk */}
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-48 object-contain bg-gray-100"
        />

        {/* Detail Produk */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedProduct.name}
          </h2>
          
          <p className="text-pink-700 font-semibold text-lg mb-4">
            Rp.{selectedProduct.price.toLocaleString('id-ID')}
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {selectedProduct.description || 'Produk premium berkualitas tinggi dari Bebyelle Coffee.'}
          </p>

          {/* Tombol Aksi */}
          <button
            onClick={closeDetail}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
