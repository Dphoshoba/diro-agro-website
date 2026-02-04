import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FarmCarousel } from "@/components/FarmCarousel";
import { motion } from "framer-motion";

export default function Products() {
    return (
        <section id="products" className="py-24 bg-[#FAF9F6]">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">Our Products</h2>
                    <h3 className="font-display text-4xl font-bold text-primary mb-4">Farm Fresh Goodness</h3>
                    <p className="text-muted-foreground">
                        We offer high-quality, safely packaged products available for retail and wholesale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Product Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1569288063643-5d29ad64df09?q=80&w=800&auto=format&fit=crop"
                                alt="Fresh Eggs"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-bold px-4 py-1 rounded-full text-sm">
                                Best Seller
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="font-display text-2xl font-bold text-primary mb-3">Fresh Farm Eggs</h4>
                            <p className="text-muted-foreground mb-6">
                                High-quality, organic eggs available in retail cartons and wholesale crates. Safely packaged and delivered fresh from our farm.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                    <Check size={16} className="text-secondary" /> Retail Cartons
                                </li>
                                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                    <Check size={16} className="text-secondary" /> Wholesale Crates
                                </li>
                                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                    <Check size={16} className="text-secondary" /> 100% Organic
                                </li>
                            </ul>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12">
                                Order Eggs
                            </Button>
                        </div>
                    </motion.div>

                    {/* Product Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <FarmCarousel />
                            <div className="absolute top-4 right-4 bg-primary text-white font-bold px-4 py-1 rounded-full text-sm z-10">
                                Coming Soon
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="font-display text-2xl font-bold text-primary mb-3">Quality Broilers</h4>
                            <p className="text-muted-foreground mb-6">
                                Fresh, halal-compliant poultry meat available for supermarkets, hotels, and wholesale customers. Safe, hygienic, and consistent.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                    <Check size={16} className="text-secondary" /> Fresh Meat
                                </li>
                                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                    <Check size={16} className="text-secondary" /> Halal Compliant
                                </li>
                                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                    <Check size={16} className="text-secondary" /> Hygienic Processing
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 rounded-xl h-12">
                                Inquire Availability
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
