import { Button } from "@/components/ui/button";
import { Truck, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container">
                <div className="bg-[#FAF9F6] rounded-[3rem] overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 md:p-16 space-y-8">
                            <div>
                                <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">Get in Touch</h2>
                                <h3 className="font-display text-4xl font-bold text-primary">Contact Us</h3>
                                <p className="text-muted-foreground mt-4">
                                    Have questions or want to place a bulk order? Reach out to us today.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Head Office</p>
                                        <p className="text-muted-foreground">Waterloo Post Office, Sierra Leone</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                        <Truck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Farm Location</p>
                                        <p className="text-muted-foreground">Bathlol Village, Port Loko District</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Call / WhatsApp</p>
                                        <p className="text-muted-foreground">+232-80242745</p>
                                        <p className="text-muted-foreground">+232-73446610</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary p-12 md:p-16 text-white">
                            <h4 className="font-display text-2xl font-bold mb-6">Send us a message</h4>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium opacity-80">First Name</label>
                                        <input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium opacity-80">Last Name</label>
                                        <input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-80">Email</label>
                                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-80">Message</label>
                                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"></textarea>
                                </div>
                                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12 rounded-lg mt-2">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
