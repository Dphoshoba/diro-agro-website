import { Button } from "@/components/ui/button";
import { Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF9F6]">
      {/* Abstract Organic Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8F5E9] rounded-bl-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#FFF8E1] rounded-tr-[80px] -z-10 opacity-60"></div>
      
      <div className="container grid md:grid-cols-2 gap-12 items-center py-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Farm Fresh • Trustworthy • Sustainable
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1]">
            Fresh Eggs & <br/>
            <span className="text-secondary">Poultry Products</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            From Bathlol to every district in Sierra Leone. We deliver affordable, safe, and sustainable poultry products directly to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 transition-transform hover:scale-105">
              Order Now
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 rounded-full px-8 h-12 text-base">
              Learn More
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Trusted by 500+ families</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 organic-shape overflow-hidden shadow-2xl shadow-primary/10 bg-white p-2">
             <img 
               src="/images/flyer.png" 
               alt="Fresh Farm Eggs" 
               className="w-full h-auto organic-shape object-cover"
             />
          </div>
          
          {/* Floating Badges */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-700">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Quality</p>
              <p className="font-bold text-primary">100% Natural</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute top-10 -right-4 z-20 bg-secondary text-secondary-foreground py-2 px-4 rounded-full shadow-lg font-bold text-sm transform rotate-3"
          >
            We Deliver! 🚚
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
