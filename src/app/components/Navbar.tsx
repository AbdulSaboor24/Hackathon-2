'use client'

import { useState } from 'react';
import Link from 'next/link';
import { SearchIcon, CartIcon, UserIcon, MenuIcon, CloseIcon } from './icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const shopCategories = [
    { href: '/shop/men', label: 'Men' },
    { href: '/shop/women', label: 'Women' },
    { href: '/shop/kids', label: 'Kids' },
  ];

  const navLinks = [
    { href: '/sale', label: 'On Sale' },
    { href: '/new-arrivals', label: 'New Arrivals' },
    { href: '/brands', label: 'Brands' },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(true)}
              >
                <MenuIcon className="w-6 h-6" />
              </button>
              <Link href="/" className="text-2xl font-bold shrink-0 font-integralCF">
                SHOP.CO
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8 flex-grow justify-center">
              {/* Shop Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-600 hover:text-black transition-colors text-sm font-medium flex items-center gap-1"
                  onMouseEnter={() => setIsShopDropdownOpen(true)}
                  onMouseLeave={() => setIsShopDropdownOpen(false)}
                >
                  Shop
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isShopDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsShopDropdownOpen(true)}
                    onMouseLeave={() => setIsShopDropdownOpen(false)}
                  >
                    {shopCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Search and Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block relative group">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-full w-[250px] focus:w-[300px] focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <button className="lg:hidden hover:text-gray-600 transition-colors">
                <SearchIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-gray-600 transition-colors relative">
                <CartIcon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="hidden lg:block hover:text-gray-600 transition-colors">
                <UserIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="text-xl font-bold font-integralCF">
                  SHOP.CO
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                {/* Shop Categories */}
                <div className="border-b pb-4">
                  <span className="text-lg font-medium block mb-4">Shop</span>
                  {shopCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block py-3 text-gray-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>

                {/* Other Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 text-gray-600 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 