import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-gray-700 py-16">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-light text-gray-900">Marc Vivier.</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        Delivering high-quality jewelry with passion and precision.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-gray-600 text-base">
                        <li><a href="#" className="hover:text-gray-900 transition">Home</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Support</h3>
                    <ul className="space-y-3 text-gray-600 text-base">
                        <li><a href="#" className="hover:text-gray-900 transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Get in Touch</h3>
                    <p className="flex items-center gap-3 text-base text-gray-600">
                        <Mail className="h-5 w-5 text-gray-500" />
                        support@brandname.com
                    </p>
                    <p className="flex items-center gap-3 mt-3 text-base text-gray-600">
                        <Phone className="h-5 w-5 text-gray-500" />
                        +1 (234) 567-890
                    </p>
                    {/* Social Links */}
                    <div className="flex gap-6 mt-6">
                        <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Marc Vivier. All rights reserved.
            </div>
        </footer>
    );
}
