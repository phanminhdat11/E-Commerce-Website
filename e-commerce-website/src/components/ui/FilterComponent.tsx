"use client";

import { useState } from "react";

export default function FilterComponent() {
  const [priceFrom, setPriceFrom] = useState("0 VNĐ");
  const [priceTo, setPriceTo] = useState("10 000 000 VNĐ");

  const [ratingFrom, setRatingFrom] = useState("0 Sao");
  const [ratingTo, setRatingTo] = useState("5 Sao");

  const priceOptions = [
    "0 VNĐ",
    "500 000 VNĐ",
    "1 000 000 VNĐ",
    "5 000 000 VNĐ",
    "10 000 000 VNĐ",
  ];

  const ratingOptions = ["0 Sao", "1 Sao", "2 Sao", "3 Sao", "4 Sao", "5 Sao"];

  return (
    <div className="w-64 border rounded-lg bg-white shadow-sm">

      {/* Header */}
      <div className="text-center font-semibold py-3 border-b">
        Filter
      </div>

      <div className="p-4 space-y-6">

        {/* ===== PRICE ===== */}
        <div className="space-y-3">
          <h3 className="font-medium">Giá</h3>

          <SelectRow
            label="Từ:"
            value={priceFrom}
            options={priceOptions}
            onChange={setPriceFrom}
          />

          <SelectRow
            label="Đến:"
            value={priceTo}
            options={priceOptions}
            onChange={setPriceTo}
          />
        </div>

        {/* ===== RATING ===== */}
        <div className="space-y-3">
          <h3 className="font-medium">Đánh giá</h3>

          <SelectRow
            label="Từ:"
            value={ratingFrom}
            options={ratingOptions}
            onChange={setRatingFrom}
          />

          <SelectRow
            label="Đến:"
            value={ratingTo}
            options={ratingOptions}
            onChange={setRatingTo}
          />
        </div>

      </div>
    </div>
  );
}

/* ===================== COMPONENT CON ===================== */

function SelectRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        
        {/* Label */}
        <span className="text-sm text-gray-600 w-10">{label}</span>

        {/* Select box */}
        <button
          onClick={() => setOpen(!open)}
          className="flex-1 flex items-center justify-between border rounded-md px-3 py-2 text-sm hover:bg-gray-50"
        >
          {value}

        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-1 w-[70%] bg-white border rounded-md shadow z-10">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}