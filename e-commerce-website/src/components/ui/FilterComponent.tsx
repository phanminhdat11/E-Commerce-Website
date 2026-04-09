"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-200 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        Filter
      </div>

      <div className="space-y-6 p-4 sm:p-5">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">Giá</h3>

          <SelectRow
            label="Từ"
            value={priceFrom}
            options={priceOptions}
            onChange={setPriceFrom}
          />

          <SelectRow
            label="Đến"
            value={priceTo}
            options={priceOptions}
            onChange={setPriceTo}
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">Đánh giá</h3>

          <SelectRow
            label="Từ"
            value={ratingFrom}
            options={ratingOptions}
            onChange={setRatingFrom}
          />

          <SelectRow
            label="Đến"
            value={ratingTo}
            options={ratingOptions}
            onChange={setRatingTo}
          />
        </div>
      </div>
    </div>
  );
}

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
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <span className="text-sm font-medium text-slate-600 sm:w-12">{label}</span>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex min-h-11 flex-1 items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50"
          aria-expanded={open}
        >
          <span className="truncate">{value}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-3 text-xs text-slate-400 transition ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg sm:left-auto sm:w-[calc(100%-3.75rem)]">
          {options.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="block w-full px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
