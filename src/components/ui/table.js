// src/components/ui/table.js
import React from 'react';

const Table = ({ children }) => {
  return <table className="min-w-full divide-y divide-gray-200">{children}</table>;
};

const TableHeader = ({ children }) => {
  return <thead className="bg-gray-50">{children}</thead>;
};

const TableBody = ({ children }) => {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};

const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

const TableHead = ({ children }) => {
  return <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>;
};

const TableCell = ({ children }) => {
  return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{children}</td>;
};

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
