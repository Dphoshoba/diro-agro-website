import { Button } from "@/components/ui/button";
import { Truck, ShieldCheck, Star, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    return (
        <section id="services" className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="container relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">Why Choose Diro Agro?</h2>
                        <h3 className="font-display text-4xl md:text-5xl font-bold mb-8">
                            Locally Rooted,<br />Nationally Trusted.
                        </h3>

                        <div className="space-y-8">
                            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 mb-8">
                                <img
                                    src="/images/delivery-van.png"
                                    alt="Diro Agro Delivery Van"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {[
                                { icon: Truck, title: "Consistent Supply Chain", desc: "Reliable delivery across multiple districts in Sierra Leone." },
                                { icon: ShieldCheck, title: "Hygienic Management", desc: "Biosecure farm design ensuring safe and healthy products." },
                                { icon: Star, title: "Halal Compliant", desc: "Processing methods that respect cultural and religious standards." },
                                { icon: Users, title: "Community Support", desc: "Creating jobs and empowering local farmers through knowledge transfer." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="bg-white/10 p-3 rounded-xl h-fit">
                                        <item.icon className="text-secondary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-white/70">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[3rem] border border-white/10">
                        <h4 className="font-display text-2xl font-bold mb-6 text-center">Our Trusted Partners</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {["Hotels & Restaurants", "Schools & Universities", "Hospitals & Clinics", "Supermarkets"].map((partner, idx) => (
                                <div key={idx} className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors cursor-default">
                                    <span className="font-medium">{partner}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-secondary/20 rounded-2xl p-6 text-center">
                            <h5 className="font-bold text-lg mb-2">Join Our Team</h5>
                            <p className="text-sm text-white/80 mb-4">We offer opportunities in farm management, veterinary care, and sales.</p>
                            <Button variant="link" className="text-secondary hover:text-white p-0 h-auto font-bold">
                                Check Vacancies <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
