import { Star, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="relative order-2 md:order-1"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <video
                                controls
                                className="w-full h-auto object-cover"
                                poster="/images/flyer.png"
                            >
                                <source src="/images/farm-tour.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                                Watch Our Story
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-10 bg-[#F0F7F4] rounded-[50px] transform -rotate-3 scale-110"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <motion.div variants={fadeIn}>
                            <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">About Us</h2>
                            <h3 className="font-display text-4xl font-bold text-primary mb-6">Sustainable Farming for a Better Future</h3>
                        </motion.div>

                        <motion.div variants={fadeIn} className="text-muted-foreground space-y-4">
                            <p>
                                Diro Agro is a modern poultry farm located on 8 hectares of flat farmland in Bathlol Village, Port Loko District, Sierra Leone. We are committed to producing farm-fresh eggs and high-quality poultry products.
                            </p>
                            <p>
                                Our aim is simple: to deliver affordable, safe, and sustainable poultry products while supporting local communities and building food security in Sierra Leone.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-secondary/20 p-2 rounded-lg text-secondary-foreground">
                                    < Star size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Vision</h4>
                                    <p className="text-sm text-muted-foreground">To become the leading trusted Agriculture brand in Sierra Leone.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-secondary/20 p-2 rounded-lg text-secondary-foreground">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Values</h4>
                                    <p className="text-sm text-muted-foreground">Quality, Trust, Sustainability, and Excellence.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="pt-6 border-t border-border">
                            <blockquote className="italic text-primary/80 text-lg font-display">
                                "We are building not just a farm, but a trusted national brand that brings nourishment to families and institutions across the country."
                            </blockquote>
                            <p className="mt-2 font-bold text-primary">— CEO, Diro Agro</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
