"use client";

import React from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 font-bold text-lg border-b">Sidebar Menu</div>
        <ul className="p-4 space-y-3">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Jobs</li>
          <li className="hover:text-blue-600 cursor-pointer">Marketplace</li>
        </ul>
      </div>
    </>
  );
}
