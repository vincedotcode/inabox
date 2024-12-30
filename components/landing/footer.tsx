import Link from "next/link";


function Footer() {
    return (
    <footer className="border-t bg-muted">
        <div className="container py-12 px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-xl font-semibold">Inabox</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Making business expenses management easier and faster.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Integrations
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Documentation
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                API Reference
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                Careers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Inabox. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}

export { Footer };
